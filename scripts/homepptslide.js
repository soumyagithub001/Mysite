const slides = document.querySelectorAll('.content-card .slide');
let currentSlide = 0;
const slideDuration = 20000; // Time each slide is visible (in milliseconds)
const transitionDuration = 1000; // Duration of the slide transition (in milliseconds)
const dots = document.querySelectorAll('.dots-container .dot'); // Select the dot elements

function showSlide(index) {
    // Reset all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
        if (i === index) {
            slide.classList.add('active'); // Show current slide
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev'); // Previous slide
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next'); // Next slide
        }
    });
      // Update dot indicators
      dots.forEach((dot, i) => {
        dot.classList.remove('active'); // Remove active class from all dots
        if (i === index) {
            dot.classList.add('active'); // Add active class to the current dot
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
    showSlide(currentSlide);
}

// Show the first slide on load
showSlide(currentSlide);

// Change slide every (slideDuration + transitionDuration)
setInterval(nextSlide, slideDuration + transitionDuration);
