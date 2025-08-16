# PrivMart
## Advanced Everyday Payments and E-Commerce on Aleo Blockchain Using Leo Programming
This is a decentralized e-commerce platform that handles everyday payments (e.g., deposits, withdrawals, purchases, refunds) with enhanced features like discounts, order verification, and privacy. It advances basic payments by incorporating atomic operations, discount logic, integrity hashes, and admin controls, all while leveraging Aleo's privacy features to keep sensitive data (e.g., buyer balances, order details) private. This program named `ecommerce_private_test1.aleo`, simulates a marketplace where sellers list products, buyers deposit funds and make purchases, and admins manage operations—all secured on-chain.

## PROGRAM TRANSACTION ID
TRANSACTION ID: 
at107f057ppslzyg8qu273rjcx9m4kfantfw9c42uj4e5nwtrrztsrsw44yr7

PROGRAM ADDRESS: 
aleo193a0vh5ftsn735nwlwh00qjt5drcprrasyqyxfc7g89rcpywxy8s202ufv

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

- async transition deposit(program_address: address, amount: u64) -> Future: Allows buyers to deposit credits into the contract. Calls `credits.aleo/transfer_public_as_signer` to transfer funds atomically.
- async function finalize_deposit(caller: address, amount: u64, deposit_future: Future): Awaits the transfer, then updates the buyer's balance in `buyer_balance` mapping.

7. Withdraw Funds (Buyer)

- async transition withdraw_buyer(amount: u64) -> Future: Buyers withdraw deposited funds. Creates a transfer future via `credits.aleo/transfer_public`.
- async function finalize_withdraw_buyer(caller: address, amount: u64, withdraw_future: Future): Awaits transfer, checks and deducts from `buyer_balance`.

8. List Product (Admin Only)

- async transition list_product(name: field, price: u64, stock: u32, category: field, discount_code: field, discount_rate: u32) -> (Future): Admin lists a new product with discount. Asserts admin caller and valid discount rate.
- async function finalize_list_product(seller: address, name: field, price: u64, stock: u32, category: field, discount_code: field, discount_rate: u32): Increments product ID, stores the product, updates category indexes, and marks discount as valid if provided.

9. Buy Product

- async transition buy_product(product_id: u32, quantity: u32, discount_code: field) -> (Future): Buyers purchase using deposited funds. uses a placeholder future (actual transfer in finalize).
- async function finalize_purchase(product_id: u32, quantity: u32, caller: address, discount_code: field, payment_future: Future): Verifies product/stock/balance, applies discount if valid, calculates verification hash, creates order/receipt, updates stock/balances/user trackers. Deducts full (undiscounted) amount from buyer, credits full to seller.

10. Process Refund (Admin Only)

- async transition process_refund(order_id: u32, buyer: address, total_paid: u64) -> Future: Admin initiates refund with transfer future.
- async function finalize_refund(order_id: u32, refund_future: Future): Awaits transfer, verifies order integrity via hash, updates status to refunded, restocks product, refunds discounted amount to buyer, deducts from seller.

11. Withdraw Earnings (Seller)

- async transition withdraw_seller(amount: u64) -> Future: Sellers withdraw earnings. Creates transfer future.
- async function finalize_withdraw_seller(caller: address, amount: u64, withdraw_future: Future): Awaits transfer, checks and deducts from `seller_balance`.

12. Update Order Status (Admin Only)

- async transition update_order_status(order_id: u32, new_status: field) -> Future: Admin changes order status (asserts valid status).
- async function finalize_update_order_status(order_id: u32, new_status: field): Updates the order status and timestamp.

13. Deactivate Product (Admin Only)

- async transition deactivate_product(product_id: u32) -> Future: Admin soft-deletes a product.
- async function finalize_deactivate_product(product_id: u32): Sets products active to false.

14. Add Discount Code (Admin Only)

- async transition add_discount_code(code: field) -> Future: Admin adds a valid discount code.
- async function finalize_add_discount_code(code: field): Marks the code as valid in valid_discounts.

# Usage Notes

## Deploy on Aleo testnet/mainnet using Leo tools.
## Interact via Aleo CLI or SDK (e.g., call transitions like leo run deposit).
## Privacy: Balances and orders are private; only necessary data is revealed.
Improvements: Add more error handling, events, or multi-seller support.

e>>>For full code, see the repository files. Contributions welcome!
