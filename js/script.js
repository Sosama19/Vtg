// Example: Handle Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you can add code to handle form submission, e.g., send data to a server
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }

    // Example: Add to Cart Functionality (Basic Alert)
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
            // Here you can add code to handle adding items to a shopping cart
        });
    });
});
