// Smooth scrolling function
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Trigger animations on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (sectionPosition < screenPosition) {
            section.classList.add('fade-in');
        }
    });

    const header = document.querySelector('.header');
    if (header.getBoundingClientRect().top < window.innerHeight) {
        header.classList.add('slide-in-from-top');
    }

    const navBar = document.querySelector('.nav-bar');
    if (navBar.getBoundingClientRect().top < window.innerHeight) {
        navBar.classList.add('slide-in-from-top');
    }

    const footer = document.querySelector('.footer');
    if (footer.getBoundingClientRect().top < window.innerHeight) {
        footer.classList.add('slide-in-from-bottom');
    }

    // Animated buttons on scroll
    const buttons = document.querySelectorAll('.neon-button');
    buttons.forEach(button => {
        const buttonPosition = button.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (buttonPosition < screenPosition) {
            button.classList.add('bounce');
        }
    });

    // Animate portfolio items on scroll
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (itemPosition < screenPosition) {
            item.classList.add('fade-in-up');
        }
    });
});

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll('.nav-bar a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Trigger animations on page load
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animated');
    });

    const buttons = document.querySelectorAll('.neon-button');
    buttons.forEach(button => {
        button.classList.add('animated');
    });

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.classList.add('animated');
    });
});
