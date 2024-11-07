// Array to store service descriptions and images
const services = [
    {
        title: "Intelligent AI & ML Solutions",
        image: "images/Intelligent AI ML solutions.PNG",
        description: "Tailored artificial intelligence and machine learning innovations that empower businesses to harness data for smarter decision-making."
    },
    {
        title: "Precision Time Series Forecasting",
        image: "images/Precise Time series Forecasting.PNG",
        description: "Cutting-edge forecasting methods that analyze historical data to accurately predict future trends, ensuring strategic agility."
    },
    {
        title: "Transformative Data Analytics",
        image: "images/Advance Data Analytics.PNG",
        description: "Comprehensive analytics services that turn complex data into meaningful insights, driving growth and operational excellence."
    },
    {
        title: "Advanced Data Engineering",
        image: "images/data engineering.PNG",
        description: "Expertise in building robust data architectures that ensure your data is secure, accessible, and primed for analysis."
    },
    {
        title: "SEO Mastery",
        image: "images/SEO technology.PNG",
        description: "Strategic search engine optimization techniques that elevate your online presence, driving organic traffic and enhancing brand visibility."
    },
    {
        title: "Dynamic Social Media Strategies",
        image: "images/socialmedia.PNG",
        description: "Engaging social media marketing campaigns designed to resonate with audiences, boost brand loyalty, and increase conversions."
    },
    {
        title: "Innovative Web Solutions",
        image: "images/Web application.PNG",
        description: "Full-stack web development that creates seamless, interactive, and user-centered digital experiences tailored to your business needs."
    },
    {
        title: "Smart Process Automation",
        image: "images/smartproc_automation.png",
        description: "Next-gen automation solutions that streamline workflows, reduce operational costs, and free up resources for strategic initiatives."
    },
    {
        title: "Cloud Innovation Solutions",
        image: "images/Innovative cloud solution.png",
        description: "Scalable cloud solutions that enhance operational flexibility, optimize costs, and ensure secure data management, enabling seamless access and collaboration across your organization."
    },
    {
        title: "AI-Powered Business Consulting",
        image: "images/AI Powered Business Consulting.png",
        description: "Strategic consulting services leveraging AI insights to drive innovation, improve operational efficiency, and enhance competitive advantage, ensuring your business is equipped to thrive in a data-driven world."
    }
];

let currentIndex = 0;
let slideInterval;
const displayDuration = 30000; // 5 seconds display time
const autoSlideDelay = 30000; // 20 seconds for auto-slide after manual click

// Function to start the automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(showNextService, displayDuration);
}

// Function to show the next service in the slideshow
function showNextService() {
    currentIndex = (currentIndex + 1) % services.length;
    updateServiceDisplay(currentIndex);
}

// Function to show a specific service when clicked
function showService(index) {
    clearInterval(slideInterval); // Stop slideshow
    updateServiceDisplay(index);
    currentIndex = index;

    // Resume slideshow after a delay
    setTimeout(startSlideshow, autoSlideDelay);
}

// Function to update the service display
function updateServiceDisplay(index) {
    const service = services[index];
    document.getElementById('service-title').innerText = service.title;
    document.getElementById('service-image').src = service.image; // Update image source
    document.getElementById('service-description').innerText = service.description; // Update description text
    updateDots(index); // Call to update dots based on the current index
    // Update dot colors
}

// Function to update the dot indicators
function updateDots(index) {
    const dotContainer = document.getElementById('dot-container');
    dotContainer.innerHTML = ''; // Clear existing dots
    
    services.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === index) {
            dot.style.backgroundColor = 'darkgray'; // Change color for active dot
        }
        dotContainer.appendChild(dot);
    });
}

// Initialize the slideshow on page load
document.addEventListener('DOMContentLoaded', () => {
    updateServiceDisplay(currentIndex);
    startSlideshow();
});
