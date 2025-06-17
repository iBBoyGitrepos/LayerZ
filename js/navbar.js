document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const stickyScrollY = 16; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > stickyScrollY) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});