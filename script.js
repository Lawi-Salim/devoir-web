document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

