const homeSection = document.querySelector('.home');
const images = [
    'images/AI_Home_1.webp', // First image
    'images/AI_Home_2.webp', // Second image
    'images/AI_Home_3.webp', // Add more images as needed
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
    homeSection.style.backgroundImage = `url('${images[currentImageIndex]}')`; // Update background image
}

// Change background image every 20 seconds
setInterval(changeBackgroundImage, 20000); // Change interval as needed
