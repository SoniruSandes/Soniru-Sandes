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
