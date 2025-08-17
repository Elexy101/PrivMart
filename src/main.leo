import credits.aleo;

program ecommerce_private_test1.aleo {

    // This is the constructor for the program.
    // The constructor allows you to manage program upgrades.
    // It is called when the program is deployed or upgraded.
    // It is currently configured to **prevent** upgrades.
    // Other configurations include: 
    //  - @admin(address="aleo1...")
    //  - @checksum(mapping="credits.aleo/fixme", key="0field")
    //  - @custom
    // For more information, please refer to the documentation: `https://docs.leo-lang.org/guides/upgradability`
    @noupgrade
    async constructor() {}

    // Enhanced Product Structure with category and discount
    struct Product {
        id: u32,
        name: field,
        price: u64,       // in microAleo credits (1 credit = 1_000_000 micro)
        seller: address,
        stock: u32,
        category: field,  // e.g., "electronics", "clothing"
        active: bool,     // for soft deletion
        discount_code: field, // optional discount code
        discount_rate: u32   // percentage (0-100)
    }

    // Enhanced Order Structure with verification hash
    struct Order {
        id: u32,
        product_id: u32,
        buyer: address,
        quantity: u32,
        total_paid: u64,  // discounted amount recorded
        status: field,    // "pending", "paid", "shipped", "refunded"
        timestamp: u32,   // block height for tracking
        verification_hash: field // for order integrity
    }

    // Payment Receipt with timestamp
    struct Receipt {
        order_id: u32,
        amount: u64,      // full amount paid to seller
        from: address,
        to: address,
        timestamp: u32
    }

    // Storage mappings
    mapping products: u32 => Product;
    mapping orders: u32 => Order;
    mapping receipts: u32 => Receipt;
    mapping user_orders: address => u32; // maps user to latest order ID
    mapping user_order_count: address => u32; // tracks number of orders per user
    mapping seller_balance: address => u64; // tracks seller earnings
    mapping buyer_balance: address => u64; // tracks buyer deposited funds
    mapping category_products: field => u32; // maps category to latest product ID
    mapping category_product_count: field => u32; // tracks number of products per category
    mapping valid_discounts: field => bool; // tracks valid discount codes

    // Admin address for restricted operations
    const ADMIN: address = aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h;

    // Status constants
    const STATUS_PENDING: field = 0field;
    const STATUS_PAID: field = 1field;
    const STATUS_SHIPPED: field = 2field;
    const STATUS_REFUNDED: field = 3field;

    // Counters
    mapping product_count: u32 => u32;
    mapping order_count: u32 => u32;
    mapping receipt_count: u32 => u32;

    // Initialize counters
    /*
    finalize initialize_counters() {
        Mapping::set(product_count, 0u32, 0u32);
        Mapping::set(order_count, 0u32, 0u32);
        Mapping::set(receipt_count, 0u32, 0u32);
    }
    */

    // 💰 Deposit Funds to Smart Contract (Buyer)
    async transition deposit(program_address: address, amount: u64) -> Future {
        let caller: address = self.caller;
        let deposit_future: Future = credits.aleo/transfer_public_as_signer(program_address, amount);
        return finalize_deposit(caller, amount, deposit_future);
    }

    async function finalize_deposit(caller: address, amount: u64, deposit_future: Future) {
        deposit_future.await();

        let current_balance: u64 = Mapping::get_or_use(buyer_balance, caller, 0u64);
        Mapping::set(buyer_balance, caller, current_balance + amount);
    }

    // 💰 Withdraw Funds from Smart Contract (Buyer)
    async transition withdraw_buyer(amount: u64) -> Future {
        let caller: address = self.caller;

        let withdraw_future: Future = credits.aleo/transfer_public(caller, amount);
        return finalize_withdraw_buyer(caller, amount, withdraw_future);
    }

    async function finalize_withdraw_buyer(caller: address, amount: u64, withdraw_future: Future) {
        withdraw_future.await();

        let current_balance: u64 = Mapping::get_or_use(buyer_balance, caller, 0u64);
        assert(current_balance >= amount);
        Mapping::set(buyer_balance, caller, current_balance - amount);
    }

    // 🛒 List Product with Discount (Admin only)
    async transition list_product(name: field, price: u64, stock: u32, category: field, discount_code: field, discount_rate: u32) -> (Future) {
        let caller: address = self.caller;
        assert(caller == ADMIN);
        assert(discount_rate <= 100u32); // Ensure valid discount rate

        return (finalize_list_product(caller, name, price, stock, category, discount_code, discount_rate));
    }

    async function finalize_list_product(seller: address, name: field, price: u64, stock: u32, category: field, discount_code: field, discount_rate: u32) {
        
        let new_id: u32 = Mapping::get_or_use(product_count, 0u32, 0u32) + 1u32;
        // Increment product counter
        Mapping::set(product_count, 0u32, new_id);

        // Create new product
        Mapping::set(products, new_id, Product {
            id: new_id,
            name: name,
            price: price,
            seller: seller,
            stock: stock,
            category: category,
            active: true,
            discount_code: discount_code,
            discount_rate: discount_rate
        });

        // Update category index
        Mapping::set(category_products, category, new_id);
        let category_count: u32 = Mapping::get_or_use(category_product_count, category, 0u32) + 1u32;
        Mapping::set(category_product_count, category, category_count);

        // Mark discount code as valid using ternary operator
        Mapping::set(valid_discounts, discount_code, (discount_code != 0field) ? true : Mapping::get_or_use(valid_discounts, discount_code, false));
    }

    // 💸 Buy Product with Atomic Payment from Buyer Balance
    async transition buy_product(product_id: u32, quantity: u32, discount_code: field) -> (Future) {
        let caller: address = self.caller;

        // Create a dummy payment future (actual transfer handled in finalize)
        let payment_future: Future = credits.aleo/transfer_public(caller, 0u64); // Placeholder, no actual transfer here

        return (finalize_purchase(product_id, quantity, caller, discount_code, payment_future));
    }

    async function finalize_purchase(product_id: u32, quantity: u32, caller: address, discount_code: field, payment_future: Future) {
        payment_future.await();

        // Generate IDs
        let order_id: u32 = Mapping::get_or_use(order_count, 0u32, 0u32) + 1u32;
        let receipt_id: u32 = Mapping::get_or_use(receipt_count, 0u32, 0u32) + 1u32;

        let product: Product = Mapping::get(products, product_id);

        // Verify product and stock
        assert(product.active);
        assert(product.stock >= quantity);

        // Calculate full price (undiscounted)
        let base_total: u64 = product.price * quantity as u64;

        // Verify buyer has sufficient balance
        let buyer_balances: u64 = Mapping::get_or_use(buyer_balance, caller, 0u64);
        assert(buyer_balances >= base_total);

        // Calculate discounted total for order recording
        let discount_rate: u32 = (discount_code != 0field && Mapping::get_or_use(valid_discounts, discount_code, false) && discount_code == product.discount_code) ? product.discount_rate : 0u32;
        let total: u64 = base_total * (100u64 - discount_rate as u64) / 100u64;

        // Calculate verification hash using discounted total (for order consistency)
        let verification_hash: field = BHP256::hash_to_field(order_id as field + product_id as field + caller as field + quantity as field + total as field + block.height as field);

        // Update counters
        Mapping::set(order_count, 0u32, order_id);
        Mapping::set(receipt_count, 0u32, receipt_id);

        // Create order with discounted total
        Mapping::set(orders, order_id, Order {
            id: order_id,
            product_id: product_id,
            buyer: caller,
            quantity: quantity,
            total_paid: total, // Record discounted price
            status: STATUS_PAID,
            timestamp: block.height,
            verification_hash: verification_hash
        });

        // Create receipt with full amount
        Mapping::set(receipts, receipt_id, Receipt {
            order_id: order_id,
            amount: base_total, // Record full amount paid to seller
            from: caller,
            to: product.seller,
            timestamp: block.height
        });

        // Update user orders
        Mapping::set(user_orders, caller, order_id);
        let order_counts: u32 = Mapping::get_or_use(user_order_count, caller, 0u32) + 1u32;
        Mapping::set(user_order_count, caller, order_counts);

        // Update product stock
        Mapping::set(products, product_id, Product {
            id: product.id,
            name: product.name,
            price: product.price,
            seller: product.seller,
            stock: product.stock - quantity,
            category: product.category,
            active: product.active,
            discount_code: product.discount_code,
            discount_rate: product.discount_rate
        });

        // Deduct full amount from buyer balance
        Mapping::set(buyer_balance, caller, buyer_balances - base_total);

        // Update seller balance with full amount
        let current_balance: u64 = Mapping::get_or_use(seller_balance, product.seller, 0u64);
        Mapping::set(seller_balance, product.seller, current_balance + base_total);
    }

    // 🔄 Process Refund (Admin only)
    async transition process_refund(order_id: u32, buyer: address, total_paid: u64) -> Future {
        let caller: address = self.caller;
        assert(caller == ADMIN);

        let refund_future: Future = credits.aleo/transfer_public(buyer, total_paid);

        return finalize_refund(order_id, refund_future);
    }

    async function finalize_refund(order_id: u32, refund_future: Future) {
        refund_future.await();


        let order: Order = Mapping::get(orders, order_id);
        assert(order.status == STATUS_PAID || order.status == STATUS_SHIPPED);

        let product: Product = Mapping::get(products, order.product_id);

        // Verify order integrity
        let verification_hash: field = BHP256::hash_to_field(order.id as field + order.product_id as field + order.buyer as field + order.quantity as field + order.total_paid as field + order.timestamp as field);
        assert(verification_hash == order.verification_hash);

        // Update order status
        Mapping::set(orders, order_id, Order {
            id: order.id,
            product_id: order.product_id,
            buyer: order.buyer,
            quantity: order.quantity,
            total_paid: order.total_paid,
            status: STATUS_REFUNDED,
            timestamp: block.height,
            verification_hash: order.verification_hash
        });

        // Restock product
        Mapping::set(products, order.product_id, Product {
            id: product.id,
            name: product.name,
            price: product.price,
            seller: product.seller,
            stock: product.stock + order.quantity,
            category: product.category,
            active: product.active,
            discount_code: product.discount_code,
            discount_rate: product.discount_rate
        });

        // Refund buyer with discounted amount
        let buyer_balances: u64 = Mapping::get_or_use(buyer_balance, order.buyer, 0u64);
        Mapping::set(buyer_balance, order.buyer, buyer_balances + order.total_paid);

        // Deduct full amount from seller balance
        let current_balance: u64 = Mapping::get(seller_balance, product.seller);
        Mapping::set(seller_balance, product.seller, current_balance - order.total_paid);
    }

    // 🏦 Withdraw Earnings (Seller)
    async transition withdraw_seller(amount: u64) -> Future {
        let caller: address = self.caller;

        let withdraw_future: Future = credits.aleo/transfer_public(caller, amount);
        return finalize_withdraw_seller(caller, amount, withdraw_future);
    }

    async function finalize_withdraw_seller(caller: address, amount: u64, withdraw_future: Future) {
        withdraw_future.await();

        let current_balance: u64 = Mapping::get_or_use(seller_balance, caller, 0u64);
        assert(current_balance >= amount);
        Mapping::set(seller_balance, caller, current_balance - amount);
    }



    // 📦 Update Order Status (Admin only)
    async transition update_order_status(order_id: u32, new_status: field) -> Future {
        let caller: address = self.caller;
        assert(caller == ADMIN);
        assert(new_status == STATUS_PAID || new_status == STATUS_SHIPPED || new_status == STATUS_REFUNDED);

        return finalize_update_order_status(order_id, new_status);
    }

    async function finalize_update_order_status(order_id: u32, new_status: field) {
        let order: Order = Mapping::get(orders, order_id);
        Mapping::set(orders, order_id, Order {
            id: order.id,
            product_id: order.product_id,
            buyer: order.buyer,
            quantity: order.quantity,
            total_paid: order.total_paid,
            status: new_status,
            timestamp: block.height,
            verification_hash: order.verification_hash
        });
    }

    // 🚫 Deactivate Product (Admin only)
    async transition deactivate_product(product_id: u32) -> Future {
        let caller: address = self.caller;
        assert(caller == ADMIN);
        return finalize_deactivate_product(product_id);
    }

    async function finalize_deactivate_product(product_id: u32) {
        let product: Product = Mapping::get(products, product_id);
        Mapping::set(products, product_id, Product {
            id: product.id,
            name: product.name,
            price: product.price,
            seller: product.seller,
            stock: product.stock,
            category: product.category,
            active: false,
            discount_code: product.discount_code,
            discount_rate: product.discount_rate
        });
    }

    // 🎟️ Add Discount Code (Admin only)
    async transition add_discount_code(code: field) -> Future {
        let caller: address = self.caller;
        assert(caller == ADMIN);
        return finalize_add_discount_code(code);
    }

    async function finalize_add_discount_code(code: field) {
        Mapping::set(valid_discounts, code, true);
    }

}
