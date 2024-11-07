async function trackUserIP() {
    try {
        // Fetch the user's IP address from ipify API
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;

        // Log the IP address to the console
        console.log("User's IP Address:", userIP);

        // Optional: Send the IP address to your server for tracking
        await sendIPToServer(userIP);
    } catch (error) {
        console.error("Error fetching IP address:", error);
    }
}

async function sendIPToServer(ip) {
    try {
        await fetch('/track-ip', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip }),
        });
    } catch (error) {
        console.error("Error sending IP to server:", error);
    }
}

// Call the function to track IP address when the page loads
window.onload = trackUserIP;