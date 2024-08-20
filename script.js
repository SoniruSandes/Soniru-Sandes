document.getElementById('myButton').addEventListener('click', function() {
    alert('https://youtube.com/@Gaming-Quest-');
});

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactForm = document.getElementById('contact-form');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactForm.style.display = 'block';
        window.scrollTo(0, contactForm.offsetTop);
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('https://docs.google.com/spreadsheets/d/10DaHJXmp0Vf4MebmUTqolovjOVdhK4jzTVlMrVKyzPQ/edit?usp=sharing', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
