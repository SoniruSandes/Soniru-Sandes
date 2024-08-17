document.getElementById('myButton').addEventListener('click', function() {
    alert('Button Clicked!');
});

document.getElementById('themeSwitcher').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.innerHTML = document.body.classList.contains('dark') ? '&#9788;' : '&#9728;';
});
