// ---------- GET PLACE FROM URL FIRST ----------
const urlParams = new URLSearchParams(window.location.search);
const place = urlParams.get("place");

// Place name on top
document.getElementById("placeName").textContent = place;

// ---------- GOOGLE MAP ----------
document.getElementById("mapFrame").src =
    `https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`;


// ---------- WEATHER (OpenWeather API) ----------
// Map places to actual cities
const cityMapping = {
    "Charminar": "Hyderabad",
    "Golconda Fort": "Hyderabad",
    "Hussain Sagar": "Hyderabad",
    "Birla Mandir": "Hyderabad",

    "Marina Beach": "Chennai",
    "Kapaleeshwarar Temple": "Chennai",
    "Valluvar Kottam": "Chennai",

    "Gateway of India": "Mumbai",
    "Marine Drive": "Mumbai",
    "Elephanta Caves": "Mumbai",

    "India Gate": "Delhi",
    "Red Fort": "Delhi",
    "Qutub Minar": "Delhi"
};

const city = cityMapping[place] || place;

const weatherBox = document.getElementById("weatherBox");
const API_KEY = "a0c05968d95bd7758b639a44b774f741";

// Fetch the weather
fetch(`https://corsproxy.io/?https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        weatherBox.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    })
    .catch(() => {
        weatherBox.innerHTML = "Weather unavailable";
    });



// ---------- PLACE DESCRIPTIONS ----------
const placeDescriptions = {
    "Charminar": "Charminar, built in 1591, is Hyderabad’s most iconic monument...",
    "Golconda Fort": "Golconda Fort is a majestic fortress known for its brilliant architecture...",
    "Hussain Sagar": "Hussain Sagar is a historic lake famous for its giant Buddha statue...",
    "Birla Mandir": "Birla Mandir is a beautiful white-marble temple on a hilltop...",

    "Marina Beach": "Marina Beach in Chennai is the second longest urban beach...",
    "Kapaleeshwarar Temple": "An ancient Dravidian-style temple in Chennai...",
    "Valluvar Kottam": "A landmark dedicated to Tamil poet Tiruvalluvar...",

    "Gateway of India": "Gateway of India is Mumbai’s grand monument...",
    "Marine Drive": "Marine Drive is Mumbai’s famous 3.6 km long promenade...",
    "Elephanta Caves": "Ancient rock-cut caves famous for Shiva carvings.",

    "India Gate": "India Gate is a war memorial in New Delhi...",
    "Red Fort": "Red Fort is a UNESCO heritage site made of red sandstone...",
    "Qutub Minar": "Qutub Minar is the tallest brick minaret in the world..."
};


// ---------- SHOW DESCRIPTION ----------
const descriptionBox = document.getElementById("descriptionBox");

if (placeDescriptions[place]) {
    descriptionBox.textContent = placeDescriptions[place];
} else {
    descriptionBox.textContent = "Description not available for this place.";
}
