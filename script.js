
document.getElementById('mechstrike').addEventListener('click', function() {
    window.open('https://www.youtube.com/channel/UCLZ5j6dU6daEHhOAvLkxEQA?sub_confirmation=1', '_blank');
});

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show "home" section by default
showSection('home');
