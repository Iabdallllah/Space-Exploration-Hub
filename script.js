// Display current date on home page
function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        dateElement.textContent = '📅 ' + today.toLocaleDateString('en-US', options);
    }
}

// Calculate distance to Mars (JavaScript function)
function calculateDistance() {
    const minDistance = 54.6; // million km
    const maxDistance = 401; // million km
    const avgDistance = 225; // million km
    
    document.getElementById('distance-result').innerHTML = 
        `<strong>Distance to Mars:</strong><br>
        Minimum: ${minDistance} million km<br>
        Maximum: ${maxDistance} million km<br>
        Average: ${avgDistance} million km`;
}

// Form submission function
function submitForm() {
    document.getElementById('form-result').textContent = 
        '✅ Thank you! Your message has been sent successfully.';
}

// Initialize date on page load
updateDate();
