let timeoutId;

// Function to hide the header
function hideHeader() {
    const header = document.querySelector('.header');
    header.classList.add('hidden'); // Add the hidden class to move the header out of view
}

// Function to show the header
function showHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('hidden'); // Remove the hidden class to bring the header back
}

// Event listener for scroll and click events to show the header
window.addEventListener('scroll', function() {
    showHeader(); // Show header on scroll
    resetTimeout(); // Reset the timeout on any interaction
});

window.addEventListener('click', function() {
    showHeader(); // Show header on click
    resetTimeout(); // Reset the timeout on any interaction
});

// Add more interaction events as needed
window.addEventListener('mousemove', function() {
    showHeader(); // Show header on mouse move
    resetTimeout(); // Reset the timeout on any interaction
});

// Function to reset the timeout
function resetTimeout() {
    clearTimeout(timeoutId); // Clear any existing timeout
    hideHeader(); // Start the timeout to hide the header after 0.4 seconds
    timeoutId = setTimeout(hideHeader, 400); // Set a new timeout for 0.4 seconds
}

// Initial call to start the timeout on page load
resetTimeout();
