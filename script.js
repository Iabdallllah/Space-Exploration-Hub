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

// Show astronaut information
function showAstronautInfo() {
    const infoElement = document.getElementById('astronaut-info');
    if (infoElement) {
        infoElement.innerHTML = 
            `<strong>Current ISS Crew:</strong><br>
            The International Space Station typically hosts 6-7 astronauts from various countries including NASA, Roscosmos, ESA, JAXA, and CSA. They conduct experiments and maintain the station while orbiting Earth every 90 minutes!`;
    }
}

// Calculate rocket speed
function calculateSpeed() {
    const speedElement = document.getElementById('speed-result');
    if (speedElement) {
        const escapeVelocity = 11.2; // km/s
        const orbitalVelocity = 7.8; // km/s
        
        speedElement.innerHTML = 
            `<strong>Rocket Speeds:</strong><br>
            Earth Escape Velocity: ${escapeVelocity} km/s (40,320 km/h)<br>
            Orbital Velocity: ${orbitalVelocity} km/s (28,080 km/h)<br>
            That's over 25,000 miles per hour!`;
    }
}

// Initialize date on page load
updateDate();
