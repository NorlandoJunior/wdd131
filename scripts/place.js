// Define actual year and data the last modification
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById("LastModified").textContent = document.lastModified;

//Function to calcule wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

//Check the conditions to show wind chill
const temperature = 10; // °C
const windSpeed = 5; //Km/h

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
}

else {
    document.getElementById('windchill').textContent = "N/A";
}