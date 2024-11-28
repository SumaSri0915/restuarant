// Handle Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let cart = [];

// Add items to the cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-name');
        const itemPrice = parseFloat(this.getAttribute('data-price'));
        
        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

// Update the cart display
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItemElement);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Handle Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logged in with email: ${email}`);
});

// Handle Sign-Up form submission
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    alert(`Signed up with email: ${email}`);
});

// Checkout Button (Optional Logic)
const checkoutButton = document.getElementById('checkoutBtn');
checkoutButton.addEventListener('click', function() {
    alert('Proceeding to checkout...');
});
