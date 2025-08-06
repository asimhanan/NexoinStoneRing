
// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Check if product is already in cart
function updateCartBadges() {
    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('.add-to-cart').getAttribute('product-title');
        const badge = card.querySelector('.in-cart-badge');

        const found = cart.find(item => item.title === title);
        if (found && badge) {
            badge.style.display = 'inline-block';
        }
    });
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const productTitle = this.getAttribute('product-title');
        const productPrice = parseFloat(this.getAttribute('product-price'));

        if (!productTitle || !productPrice) return;

        const existingProduct = cart.find(item => item.title === productTitle);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ title: productTitle, price: productPrice, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${productTitle} has been added to your cart.`);
        updateCartBadges(); // Update the badge
    });
});

updateCartBadges(); // Initial badge check on page load

   // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });