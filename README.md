# PrivMart
## Advanced Everyday Payments and E-Commerce on Aleo Blockchain Using Leo Programming
This is a decentralized e-commerce platform that handles everyday payments (e.g., deposits, withdrawals, purchases, refunds) with enhanced features like discounts, order verification, and privacy. It advances basic payments by incorporating atomic operations, discount logic, integrity hashes, and admin controls, all while leveraging Aleo's privacy features to keep sensitive data (e.g., buyer balances, order details) private. This program named `ecommerce_private_test1.aleo`, simulates a marketplace where sellers list products, buyers deposit funds and make purchases, and admins manage operations—all secured on-chain.

## PROGRAM TRANSACTION ID
TRANSACTION ID: 
at107f057ppslzyg8qu273rjcx9m4kfantfw9c42uj4e5nwtrrztsrsw44yr7

PROGRAM ADDRESS: 
aleo1ven5qj0mk2p95qskz7sf8cyxx88f7vnpyle4s9fkxfqtve33wsxqvnmpsu

## FLOWCHART DIAGRAM 
<img width="3133" height="2387" alt="diagram-export-25-08-2025-17_45_54" src="https://github.com/user-attachments/assets/07f41b4a-26f0-40a3-a7e0-e9e73789c0b7" />


### Key advancements include:

- Privacy-Preserving Transactions: Uses Aleo zero-knowledge proofs to execute computations privately.
- Atomic Payments: Ensures transfers (via credits.aleo integration) happen atomically with state updates.
- Discount and Category Support: Enhances product listings with categories and discount codes for real-world e-commerce.
- Order Integrity: Employs hashes for verification to prevent tampering.
- Admin Controls: Restricted operations for security, with no upgrades allowed post-deployment.

### Program Components
1. Structs

- Product: Represents items for sale, including ID, name, price, seller, stock, category, active status, discount code, and rate.
- Order: Tracks purchases with ID, product ID, buyer, quantity, total paid (discounted), status, timestamp, and verification hash.
- Receipt: Logs payments separately with order ID, amount (full, undiscounted), from/to addresses, and timestamp.

2. Mappings
These store data on-chain:

- products, orders, receipts: Core data.
- user_orders, user_order_count: User-specific tracking.
- seller_balance, buyer_balance: Fund management.
- category_products, category_product_count: Category indexing.
- valid_discounts: Discount validation.
- product_count, order_count, receipt_count: ID counters.

3. Constants

- ADMIN: Hardcoded admin address.
- Status fields (e.g., STATUS_PAID = 1field).

4. Functions and Transitions
In Leo, transitions are public entry points (callable by users), often async to handle off-chain computations. Functions (e.g., finalize_*) are internal finalize logic executed on-chain after transitions. All operations integrate with `credits.aleo` for token transfers.

5. Constructor

- async constructor(): Initializes the program with @noupgrade to prevent changes post-deployment. Does nothing else but can be extended for setup.

## ** PROGRAM FUNCTIONS ** 

6. Deposit Funds (Buyer)
   ```bash
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
   ```
- async transition deposit(program_address: address, amount: u64) -> Future: Allows buyers to deposit credits into the contract. Calls `credits.aleo/transfer_public_as_signer` to transfer funds atomically.
- async function finalize_deposit(caller: address, amount: u64, deposit_future: Future): Awaits the transfer, then updates the buyer's balance in `buyer_balance` mapping.

7. Withdraw Funds (Buyer)
```bash
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
```
- async transition withdraw_buyer(amount: u64) -> Future: Buyers withdraw deposited funds. Creates a transfer future via `credits.aleo/transfer_public`.
- async function finalize_withdraw_buyer(caller: address, amount: u64, withdraw_future: Future): Awaits transfer, checks and deducts from `buyer_balance`.

8. List Product (Admin Only)
```bash
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
```
## PREVIEW (ADMIN)
<img width="1918" height="962" alt="Screenshot from 2025-08-19 18-29-51" src="https://github.com/user-attachments/assets/0501257c-4942-44ae-9539-bb3f23fb3d4d" />


- async transition list_product(name: field, price: u64, stock: u32, category: field, discount_code: field, discount_rate: u32) -> (Future): Admin lists a new product with discount. Asserts admin caller and valid discount rate.
- async function finalize_list_product(seller: address, name: field, price: u64, stock: u32, category: field, discount_code: field, discount_rate: u32): Increments product ID, stores the product, updates category indexes, and marks discount as valid if provided.

9. Buy Product
```bash
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
```

## PREVIEW (BUYER)
<img width="1918" height="962" alt="Screenshot from 2025-08-19 18-30-48" src="https://github.com/user-attachments/assets/abdf0ba3-f4df-44ff-bba5-6ddc5d03e408" />


- async transition buy_product(product_id: u32, quantity: u32, discount_code: field) -> (Future): Buyers purchase using deposited funds. uses a placeholder future (actual transfer in finalize).
- async function finalize_purchase(product_id: u32, quantity: u32, caller: address, discount_code: field, payment_future: Future): Verifies product/stock/balance, applies discount if valid, calculates verification hash, creates order/receipt, updates stock/balances/user trackers. Deducts full (undiscounted) amount from buyer, credits full to seller.

10. Process Refund (Admin Only)
```bash
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
```
- async transition process_refund(order_id: u32, buyer: address, total_paid: u64) -> Future: Admin initiates refund with transfer future.
- async function finalize_refund(order_id: u32, refund_future: Future): Awaits transfer, verifies order integrity via hash, updates status to refunded, restocks product, refunds discounted amount to buyer, deducts from seller.

11. Withdraw Earnings (Seller)
```bash
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
```

- async transition withdraw_seller(amount: u64) -> Future: Sellers withdraw earnings. Creates transfer future.
- async function finalize_withdraw_seller(caller: address, amount: u64, withdraw_future: Future): Awaits transfer, checks and deducts from `seller_balance`.

12. Update Order Status (Admin Only)
```bash
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
```
- async transition update_order_status(order_id: u32, new_status: field) -> Future: Admin changes order status (asserts valid status).
- async function finalize_update_order_status(order_id: u32, new_status: field): Updates the order status and timestamp.

13. Deactivate Product (Admin Only)
```bash
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
```
- async transition deactivate_product(product_id: u32) -> Future: Admin soft-deletes a product.
- async function finalize_deactivate_product(product_id: u32): Sets products active to false.

14. Add Discount Code (Admin Only)
```bash
    // 🎟️ Add Discount Code (Admin only)
    async transition add_discount_code(code: field) -> Future {
        let caller: address = self.caller;
        assert(caller == ADMIN);
        return finalize_add_discount_code(code);
    }

    async function finalize_add_discount_code(code: field) {
        Mapping::set(valid_discounts, code, true);
    }
```
- async transition add_discount_code(code: field) -> Future: Admin adds a valid discount code.
- async function finalize_add_discount_code(code: field): Marks the code as valid in valid_discounts.

# Usage Notes

## Deploy on Aleo testnet/mainnet using Leo tools.
- you can deploy using leo-cli from https://github.com/ProvableHQ/leo as there is a guide-through
## Interact via Aleo CLI or SDK (e.g., call transitions like leo run deposit).
- you can interact with the project using the leo-cli e.g leo execute 
## Privacy: Balances and orders are private; only necessary data is revealed.
Improvements: Add more error handling, events, or multi-seller support.

## YOUTUBE WATCH PREVIEW
- ADMIN PANEL: https://youtu.be/1C0XFdacIpM
- CUSTOMER/USER PANEL: https://youtu.be/eaNAg0DwSAg

e>>>For full code, see the repository files. Contributions welcome!
