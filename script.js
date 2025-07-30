document.getElementById('mechstrike').addEventListener('click', function() {
    window.open('https://www.youtube.com/channel/UCLZ5j6dU6daEHhOAvLkxEQA?sub_confirmation=1', '_blank');
});

const themeSwitcher = document.querySelector('.theme-switcher');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const currentPage = document.getElementById('currentPage');
const footer = document.querySelector('footer');

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Check for saved user theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    // Apply device theme if no user preference is saved
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

themeSwitcher.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Hide nav menu after clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Update the current page display
    const sectionName = document.querySelector(`a[href="#${sectionId}"]`).textContent;
    currentPage.textContent = sectionName;
    const currentPageMobile = document.getElementById('currentPageMobile');
    if (currentPageMobile) currentPageMobile.textContent = sectionName;

    // Remove active class from all links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the current link
    document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');

    // Hide footer when navigating to specified sections
    if (footer) {
        if (sectionId === 'contact' || sectionId === 'about') {
            footer.classList.add('hide');
            footer.classList.remove('show');
        } else {
            footer.classList.remove('hide');
            footer.classList.add('show');
        }
    }
    
}

// Show "home" section by default
showSection('home');

// --- Material 3 bounce effect for desktop browsers (Windows/Chrome) ---
(function() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    let bouncing = false;

    mainContent.addEventListener('scroll', function() {
        if (bouncing) return;
        // Top bounce
        if (mainContent.scrollTop <= 0) {
            bouncing = true;
            mainContent.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(24px)' },
                { transform: 'translateY(0)' }
            ], {
                duration: 400,
                easing: 'cubic-bezier(.4,0,.2,1)'
            }).onfinish = () => { bouncing = false; };
        }
        // Bottom bounce
        if (mainContent.scrollTop + mainContent.clientHeight >= mainContent.scrollHeight) {
            bouncing = true;
            mainContent.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(-18px)' },
                { transform: 'translateY(0)' }
            ], {
                duration: 350,
                easing: 'cubic-bezier(.4,0,.2,1)'
            }).onfinish = () => { bouncing = false; };
        }
    });
})();

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
});
