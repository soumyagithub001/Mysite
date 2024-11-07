window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Change 50 to any scroll distance you prefer
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});