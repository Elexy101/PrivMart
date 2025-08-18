// Application State
const appState = {
    currentPage: 'home',
    isWalletConnected: false,
    walletBalance: 0,
    cart: [],
    products: [
        {
            id: '1',
            name: 'Leo T-Shirt',
            price: 29.99,
            image: 'Leo_Tshirt.jpeg',
            category: 'Clothing'
        },
        {
            id: '2',
            name: 'Leo Hoodie',
            price: 59.99,
            image: 'Leo_Hoodie.jpeg',
            category: 'Clothing'
        },
        {
            id: '3',
            name: 'Leo Mug',
            price: 14.99,
            image: 'Leo_Mug.jpeg',
            category: 'Accessories'
        }
    ]
};

// Utility Functions
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function formatPrice(price) {
    return price.toFixed(2);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const count = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
}

function updateWalletBalance() {
    document.getElementById('walletBalance').textContent = formatPrice(appState.walletBalance);
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    document.getElementById(pageId + 'Page').classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    appState.currentPage = pageId;
    
    // Load page content
    if (pageId === 'products') {
        loadProducts();
    } else if (pageId === 'cart') {
        loadCart();
    }
}

// Wallet Functions
function connectWallet() {
    if (!appState.isWalletConnected) {
        // Simulate wallet connection
        appState.isWalletConnected = true;
        appState.walletBalance = 100.00; // Starting balance
        
        updateWalletStatus();
        updateWalletBalance();
        showToast('Wallet connected successfully!');
    }
}

function updateWalletStatus() {
    const statusElements = document.querySelectorAll('#walletStatus');
    statusElements.forEach(element => {
        element.textContent = appState.isWalletConnected ? 'Connected' : 'Connect Wallet';
    });
}

function depositFunds() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    
    if (!amount || amount <= 0) {
        showToast('Please enter a valid amount', 'error');
        return;
    }
    
    if (!appState.isWalletConnected) {
        showToast('Please connect your wallet first', 'error');
        return;
    }
    
    appState.walletBalance += amount;
    updateWalletBalance();
    document.getElementById('depositAmount').value = '';
    showToast(`Successfully deposited $${formatPrice(amount)}`);
}

function withdrawFunds() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    
    if (!amount || amount <= 0) {
        showToast('Please enter a valid amount', 'error');
        return;
    }
    
    if (!appState.isWalletConnected) {
        showToast('Please connect your wallet first', 'error');
        return;
    }
    
    if (amount > appState.walletBalance) {
        showToast('Insufficient funds', 'error');
        return;
    }
    
    appState.walletBalance -= amount;
    updateWalletBalance();
    document.getElementById('withdrawAmount').value = '';
    showToast(`Successfully withdrew $${formatPrice(amount)}`);
}

function checkBalance() {
    if (!appState.isWalletConnected) {
        showToast('Please connect your wallet first', 'error');
        return;
    }
    
    // Simulate balance check with small random variation
    const variation = (Math.random() - 0.5) * 0.1;
    appState.walletBalance += variation;
    updateWalletBalance();
    showToast('Balance updated');
}

// Product Functions
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    appState.products.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4='">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-category">${product.category}</p>
        </div>
        <div class="product-footer">
            <span class="product-price">$${formatPrice(product.price)}</span>
            <button class="btn-add-to-cart" onclick="addToCart('${product.id}')">
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

function addToCart(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = appState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartBadge();
    showToast(`${product.name} added to cart`);
}

// Cart Functions
function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (appState.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some products to get started!</p>
                <button class="btn btn-wallet" onclick="showPage('products')">Shop Now</button>
            </div>
        `;
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    appState.cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = formatPrice(total);
}

function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1nPC90ZXh0Pjwvc3ZnPg=='">
        </div>
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${formatPrice(item.price)}</div>
        </div>
        <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            <button class="btn btn-sm" onclick="removeFromCart('${item.id}')" style="margin-left: 1rem;">Remove</button>
        </div>
    `;
    
    return cartItem;
}

function updateQuantity(productId, change) {
    const item = appState.cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    updateCartBadge();
    loadCart();
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    updateCartBadge();
    loadCart();
    showToast('Item removed from cart');
}

function checkout() {
    if (appState.cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    if (!appState.isWalletConnected) {
        showToast('Please connect your wallet first', 'error');
        return;
    }
    
    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (total > appState.walletBalance) {
        showToast('Insufficient funds for checkout', 'error');
        return;
    }
    
    // Process payment
    appState.walletBalance -= total;
    appState.cart = [];
    
    updateWalletBalance();
    updateCartBadge();
    loadCart();
    
    showToast(`Payment successful! $${formatPrice(total)} charged to your wallet.`);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });
    
    // Wallet connections
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('heroConnectWallet').addEventListener('click', connectWallet);
    
    // Wallet actions
    document.getElementById('depositBtn').addEventListener('click', depositFunds);
    document.getElementById('withdrawBtn').addEventListener('click', withdrawFunds);
    document.getElementById('checkBalance').addEventListener('click', checkBalance);
    
    // Navigation buttons
    document.getElementById('exploreProducts').addEventListener('click', () => showPage('products'));
    document.getElementById('cartBtn').addEventListener('click', () => showPage('cart'));
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    
    // Enter key support for inputs
    document.getElementById('depositAmount').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') depositFunds();
    });
    
    document.getElementById('withdrawAmount').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') withdrawFunds();
    });
    
    // Initialize
    updateCartBadge();
    updateWalletBalance();
    loadProducts();
});

// Global functions for onclick handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.showPage = showPage;