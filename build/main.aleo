import credits.aleo;
program ecommerce_private_test1.aleo;

struct Product:
    id as u32;
    name as field;
    price as u64;
    seller as address;
    stock as u32;
    category as field;
    active as boolean;
    discount_code as field;
    discount_rate as u32;

struct Order:
    id as u32;
    product_id as u32;
    buyer as address;
    quantity as u32;
    total_paid as u64;
    status as field;
    timestamp as u32;
    verification_hash as field;

struct Receipt:
    order_id as u32;
    amount as u64;
    from as address;
    to as address;
    timestamp as u32;

mapping products:
    key as u32.public;
    value as Product.public;

mapping orders:
    key as u32.public;
    value as Order.public;

mapping receipts:
    key as u32.public;
    value as Receipt.public;

mapping user_orders:
    key as address.public;
    value as u32.public;

mapping user_order_count:
    key as address.public;
    value as u32.public;

mapping seller_balance:
    key as address.public;
    value as u64.public;

mapping buyer_balance:
    key as address.public;
    value as u64.public;

mapping category_products:
    key as field.public;
    value as u32.public;

mapping category_product_count:
    key as field.public;
    value as u32.public;

mapping valid_discounts:
    key as field.public;
    value as boolean.public;

mapping product_count:
    key as u32.public;
    value as u32.public;

mapping order_count:
    key as u32.public;
    value as u32.public;

mapping receipt_count:
    key as u32.public;
    value as u32.public;

function deposit:
    input r0 as address.private;
    input r1 as u64.private;
    call credits.aleo/transfer_public_as_signer r0 r1 into r2;
    async deposit self.caller r1 r2 into r3;
    output r3 as ecommerce_private_test1.aleo/deposit.future;

finalize deposit:
    input r0 as address.public;
    input r1 as u64.public;
    input r2 as credits.aleo/transfer_public_as_signer.future;
    await r2;
    get.or_use buyer_balance[r0] 0u64 into r3;
    add r3 r1 into r4;
    set r4 into buyer_balance[r0];

function withdraw_buyer:
    input r0 as u64.private;
    call credits.aleo/transfer_public self.caller r0 into r1;
    async withdraw_buyer self.caller r0 r1 into r2;
    output r2 as ecommerce_private_test1.aleo/withdraw_buyer.future;

finalize withdraw_buyer:
    input r0 as address.public;
    input r1 as u64.public;
    input r2 as credits.aleo/transfer_public.future;
    await r2;
    get.or_use buyer_balance[r0] 0u64 into r3;
    gte r3 r1 into r4;
    assert.eq r4 true;
    sub r3 r1 into r5;
    set r5 into buyer_balance[r0];

function list_product:
    input r0 as field.private;
    input r1 as u64.private;
    input r2 as u32.private;
    input r3 as field.private;
    input r4 as field.private;
    input r5 as u32.private;
    is.eq self.caller aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h into r6;
    assert.eq r6 true;
    lte r5 100u32 into r7;
    assert.eq r7 true;
    async list_product self.caller r0 r1 r2 r3 r4 r5 into r8;
    output r8 as ecommerce_private_test1.aleo/list_product.future;

finalize list_product:
    input r0 as address.public;
    input r1 as field.public;
    input r2 as u64.public;
    input r3 as u32.public;
    input r4 as field.public;
    input r5 as field.public;
    input r6 as u32.public;
    get.or_use product_count[0u32] 0u32 into r7;
    add r7 1u32 into r8;
    set r8 into product_count[0u32];
    cast r8 r1 r2 r0 r3 r4 true r5 r6 into r9 as Product;
    set r9 into products[r8];
    set r8 into category_products[r4];
    get.or_use category_product_count[r4] 0u32 into r10;
    add r10 1u32 into r11;
    set r11 into category_product_count[r4];
    is.neq r5 0field into r12;
    get.or_use valid_discounts[r5] false into r13;
    ternary r12 true r13 into r14;
    set r14 into valid_discounts[r5];

function buy_product:
    input r0 as u32.private;
    input r1 as u32.private;
    input r2 as field.private;
    call credits.aleo/transfer_public self.caller 0u64 into r3;
    async buy_product r0 r1 self.caller r2 r3 into r4;
    output r4 as ecommerce_private_test1.aleo/buy_product.future;

finalize buy_product:
    input r0 as u32.public;
    input r1 as u32.public;
    input r2 as address.public;
    input r3 as field.public;
    input r4 as credits.aleo/transfer_public.future;
    await r4;
    get.or_use order_count[0u32] 0u32 into r5;
    add r5 1u32 into r6;
    get.or_use receipt_count[0u32] 0u32 into r7;
    add r7 1u32 into r8;
    get products[r0] into r9;
    assert.eq r9.active true;
    gte r9.stock r1 into r10;
    assert.eq r10 true;
    cast r1 into r11 as u64;
    mul r9.price r11 into r12;
    get.or_use buyer_balance[r2] 0u64 into r13;
    gte r13 r12 into r14;
    assert.eq r14 true;
    is.neq r3 0field into r15;
    get.or_use valid_discounts[r3] false into r16;
    and r15 r16 into r17;
    is.eq r3 r9.discount_code into r18;
    and r17 r18 into r19;
    ternary r19 r9.discount_rate 0u32 into r20;
    cast r20 into r21 as u64;
    sub 100u64 r21 into r22;
    mul r12 r22 into r23;
    div r23 100u64 into r24;
    cast r6 into r25 as field;
    cast r0 into r26 as field;
    add r25 r26 into r27;
    cast r2 into r28 as field;
    add r27 r28 into r29;
    cast r1 into r30 as field;
    add r29 r30 into r31;
    cast r24 into r32 as field;
    add r31 r32 into r33;
    cast block.height into r34 as field;
    add r33 r34 into r35;
    hash.bhp256 r35 into r36 as field;
    set r6 into order_count[0u32];
    set r8 into receipt_count[0u32];
    cast r6 r0 r2 r1 r24 1field block.height r36 into r37 as Order;
    set r37 into orders[r6];
    cast r6 r12 r2 r9.seller block.height into r38 as Receipt;
    set r38 into receipts[r8];
    set r6 into user_orders[r2];
    get.or_use user_order_count[r2] 0u32 into r39;
    add r39 1u32 into r40;
    set r40 into user_order_count[r2];
    sub r9.stock r1 into r41;
    cast r9.id r9.name r9.price r9.seller r41 r9.category r9.active r9.discount_code r9.discount_rate into r42 as Product;
    set r42 into products[r0];
    sub r13 r12 into r43;
    set r43 into buyer_balance[r2];
    get.or_use seller_balance[r9.seller] 0u64 into r44;
    add r44 r12 into r45;
    set r45 into seller_balance[r9.seller];

function process_refund:
    input r0 as u32.private;
    input r1 as address.private;
    input r2 as u64.private;
    is.eq self.caller aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h into r3;
    assert.eq r3 true;
    call credits.aleo/transfer_public r1 r2 into r4;
    async process_refund r0 r4 into r5;
    output r5 as ecommerce_private_test1.aleo/process_refund.future;

finalize process_refund:
    input r0 as u32.public;
    input r1 as credits.aleo/transfer_public.future;
    await r1;
    get orders[r0] into r2;
    is.eq r2.status 1field into r3;
    is.eq r2.status 2field into r4;
    or r3 r4 into r5;
    assert.eq r5 true;
    get products[r2.product_id] into r6;
    cast r2.id into r7 as field;
    cast r2.product_id into r8 as field;
    add r7 r8 into r9;
    cast r2.buyer into r10 as field;
    add r9 r10 into r11;
    cast r2.quantity into r12 as field;
    add r11 r12 into r13;
    cast r2.total_paid into r14 as field;
    add r13 r14 into r15;
    cast r2.timestamp into r16 as field;
    add r15 r16 into r17;
    hash.bhp256 r17 into r18 as field;
    is.eq r18 r2.verification_hash into r19;
    assert.eq r19 true;
    cast r2.id r2.product_id r2.buyer r2.quantity r2.total_paid 3field block.height r2.verification_hash into r20 as Order;
    set r20 into orders[r0];
    add r6.stock r2.quantity into r21;
    cast r6.id r6.name r6.price r6.seller r21 r6.category r6.active r6.discount_code r6.discount_rate into r22 as Product;
    set r22 into products[r2.product_id];
    get.or_use buyer_balance[r2.buyer] 0u64 into r23;
    add r23 r2.total_paid into r24;
    set r24 into buyer_balance[r2.buyer];
    get seller_balance[r6.seller] into r25;
    sub r25 r2.total_paid into r26;
    set r26 into seller_balance[r6.seller];

function withdraw_seller:
    input r0 as u64.private;
    call credits.aleo/transfer_public self.caller r0 into r1;
    async withdraw_seller self.caller r0 r1 into r2;
    output r2 as ecommerce_private_test1.aleo/withdraw_seller.future;

finalize withdraw_seller:
    input r0 as address.public;
    input r1 as u64.public;
    input r2 as credits.aleo/transfer_public.future;
    await r2;
    get.or_use seller_balance[r0] 0u64 into r3;
    gte r3 r1 into r4;
    assert.eq r4 true;
    sub r3 r1 into r5;
    set r5 into seller_balance[r0];

function update_order_status:
    input r0 as u32.private;
    input r1 as field.private;
    is.eq self.caller aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h into r2;
    assert.eq r2 true;
    is.eq r1 1field into r3;
    is.eq r1 2field into r4;
    or r3 r4 into r5;
    is.eq r1 3field into r6;
    or r5 r6 into r7;
    assert.eq r7 true;
    async update_order_status r0 r1 into r8;
    output r8 as ecommerce_private_test1.aleo/update_order_status.future;

finalize update_order_status:
    input r0 as u32.public;
    input r1 as field.public;
    get orders[r0] into r2;
    cast r2.id r2.product_id r2.buyer r2.quantity r2.total_paid r1 block.height r2.verification_hash into r3 as Order;
    set r3 into orders[r0];

function deactivate_product:
    input r0 as u32.private;
    is.eq self.caller aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h into r1;
    assert.eq r1 true;
    async deactivate_product r0 into r2;
    output r2 as ecommerce_private_test1.aleo/deactivate_product.future;

finalize deactivate_product:
    input r0 as u32.public;
    get products[r0] into r1;
    cast r1.id r1.name r1.price r1.seller r1.stock r1.category false r1.discount_code r1.discount_rate into r2 as Product;
    set r2 into products[r0];

function add_discount_code:
    input r0 as field.private;
    is.eq self.caller aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h into r1;
    assert.eq r1 true;
    async add_discount_code r0 into r2;
    output r2 as ecommerce_private_test1.aleo/add_discount_code.future;

finalize add_discount_code:
    input r0 as field.public;
    set true into valid_discounts[r0];

constructor:
    assert.eq edition 0u16;
