// scripts/menu.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active'); // Toggle the active class
        });
    }
});
