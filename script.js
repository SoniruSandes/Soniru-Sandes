document.getElementById('myButton').addEventListener('click', function() {
    alert('Button Clicked!');
});

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

