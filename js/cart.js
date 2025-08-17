document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsEl = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    let total = 0;
    cartItemsEl.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.imgSrc}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name} ${item.type}</h3>
                    <p>$${item.price}</p>
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${cart.indexOf(item)}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${cart.indexOf(item)}, 1)">+</button>
                    </div>
                    <button onclick="removeItem(${cart.indexOf(item)})">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    totalPriceEl.textContent = total.toFixed(2);
});

function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}