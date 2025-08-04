document.addEventListener('DOMContentLoaded', function () {
    const cartCounter = document.getElementById('cart-counter');

    // Load counter value from localStorage on page load
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.innerText = cartCount;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            cartCount++; // Increment cart count
            localStorage.setItem('cartCount', cartCount); // Save new count to localStorage
            cartCounter.innerText = cartCount; // Update counter display
            alert('Watch has been added to your cart!');
        });
    });
});