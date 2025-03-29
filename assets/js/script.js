document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            nav.classList.toggle('show');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = event.target.closest('nav');
        const isClickOnToggle = event.target.closest('.menu-toggle');

        if (!isClickInsideNav && !isClickOnToggle && nav && nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });

    // Close mobile menu when clicking a nav item
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768 && nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });

    // Highlight current page in navigation
    const currentLocation = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if the current page matches the nav link
        if (currentLocation.includes(linkPath) && linkPath !== '/' && linkPath !== '/index.html') {
            link.classList.add('active');
        } else if (currentLocation === '/' && (linkPath === '/' || linkPath === '/index.html')) {
            link.classList.add('active');
        }
    });

    // Add touch capability to project gallery images
    const galleryImages = document.querySelectorAll('.project-gallery img');
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function () {
                // Could expand to show larger image in a modal
                this.classList.toggle('expanded');
            });
        });
    }
}); 