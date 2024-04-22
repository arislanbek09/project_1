
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });
});
