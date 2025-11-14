/*const images = [
    "Paris.jpg",
    "Bali.jpg",
    "Newyork.jpg",
    "tokyo.jpg"
];


let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".prev").addEventListener("click", prevImage);

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentIndex];
}
*/
document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "a0c05968d95bd7758b639a44b774f741"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weatherResults").innerHTML =
        `<h3>${data.name}, ${data.sys.country}</h3>
         <p>Temperature: ${data.main.temp}°C</p>
         <p>Weather: ${data.weather[0].main}</p>`;
    })
    .catch(error => {
        document.getElementById("weatherResults").innerHTML = "City not found.";
    });
});

const destinations = [
    { name: "Paris, France", image: "Paris.jpg" },
    { name: "Bali, Indonesia", image: "Bali.jpg" },
    { name: "New York, USA", image: "Newyork.jpg" },
    { name: "Tokyo, Japan", image: "Tokyo.jpg" }
];

let index = 0;

const carouselImage = document.getElementById("carousel-image");
const carouselTitle = document.getElementById("carousel-title");

document.querySelector(".next").addEventListener("click", () => changeSlide(1));
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));

function changeSlide(direction) {
    index = (index + direction + destinations.length) % destinations.length;
    carouselImage.src = destinations[index].image;
    carouselTitle.textContent = destinations[index].name;
}
