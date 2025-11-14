const data = {

    /* -----------------------  CITIES  ----------------------- */
    cities: {
        Hyderabad: {
            img: "../img/charminar.jpg",
            places: [
                { name: "Charminar", img: "../img/charminar.jpg" },
                { name: "Golconda Fort", img: "../img/golconda.jpeg" },
                { name: "Hussain Sagar", img: "../img/hussan.jpg" },
                { name: "Birla Mandir", img: "../img/birla.jpg" }
            ]
        },
        Chennai: {
            img: "../img/chennai.jpg",
            places: [
                { name: "Marina Beach", img: "../img/marina.jpg" },
                { name: "Kapaleeshwarar Temple", img: "../img/kapaleeshwar.jpg" },
                { name: "Valluvar Kottam", img: "../img/valluvar.jpeg" }
            ]
        },
        Mumbai: {
            img: "../img/mumbai.jpg",
            places: [
                { name: "Gateway of India", img: "../img/delhi.jpg" },
                { name: "Marine Drive", img: "../img/marina.jpg" },
                { name: "Elephanta Caves", img: "../img/elephant.jpeg" }
            ]
        },
        Delhi: {
            img: "../img/delhi.jpg",
            places: [
                { name: "India Gate", img: "../img/delhi.jpg" },
                { name: "Red Fort", img: "../img/redfort.jpeg" },
                { name: "Qutub Minar", img: "../img/qutub.jpeg" }
            ]
        }
    },

    /* -----------------------  STATES  ----------------------- */
    states: {
        Kerala: {
            img: "https://source.unsplash.com/800x600/?kerala",
            places: [
                { name: "Alleppey", img: "https://source.unsplash.com/800x600/?alleppey" },
                { name: "Munnar", img: "https://source.unsplash.com/800x600/?munnar" },
                { name: "Kumarakom", img: "https://source.unsplash.com/800x600/?kumarakom" }
            ]
        },
        Rajasthan: {
            img: "https://source.unsplash.com/800x600/?rajasthan",
            places: [
                { name: "Jaipur", img: "https://source.unsplash.com/800x600/?jaipur" },
                { name: "Udaipur", img: "https://source.unsplash.com/800x600/?udaipur" },
                { name: "Jodhpur", img: "https://source.unsplash.com/800x600/?jodhpur" }
            ]
        },
        Goa: {
            img: "https://source.unsplash.com/800x600/?goa",
            places: [
                { name: "Calangute Beach", img: "https://source.unsplash.com/800x600/?calangute" },
                { name: "Baga Beach", img: "https://source.unsplash.com/800x600/?baga-beach" },
                { name: "Old Goa Churches", img: "https://source.unsplash.com/800x600/?old-goa" }
            ]
        }
    },

    /* -----------------------  BEACHES  ----------------------- */
    beaches: {
        Goa: {
            img: "https://source.unsplash.com/800x600/?goa-beach",
            places: [
                { name: "Baga Beach", img: "https://source.unsplash.com/800x600/?baga" },
                { name: "Candolim Beach", img: "https://source.unsplash.com/800x600/?candolim" },
                { name: "Anjuna Beach", img: "https://source.unsplash.com/800x600/?anjuna" }
            ]
        },
        Gokarna: {
            img: "https://source.unsplash.com/800x600/?gokarna,beach",
            places: [
                { name: "Om Beach", img: "https://source.unsplash.com/800x600/?om-beach" },
                { name: "Kudle Beach", img: "https://source.unsplash.com/800x600/?kudle-beach" },
                { name: "Paradise Beach", img: "https://source.unsplash.com/800x600/?paradise-beach" }
            ]
        }
    },

    /* -----------------------  NATURE  ----------------------- */
    nature: {
        Munnar: {
            img: "https://source.unsplash.com/800x600/?munnar,tea",
            places: [
                { name: "Top Station", img: "https://source.unsplash.com/800x600/?top-station" },
                { name: "Tea Gardens", img: "https://source.unsplash.com/800x600/?tea-garden" },
                { name: "Eravikulam National Park", img: "https://source.unsplash.com/800x600/?eravikulam" }
            ]
        },
        Himalayas: {
            img: "https://source.unsplash.com/800x600/?himalayas",
            places: [
                { name: "Manali", img: "https://source.unsplash.com/800x600/?manali" },
                { name: "Shimla", img: "https://source.unsplash.com/800x600/?shimla" },
                { name: "Dharamshala", img: "https://source.unsplash.com/800x600/?dharamshala" }
            ]
        }
    },

    /* -----------------------  HERITAGE  ----------------------- */
    heritage: {
        "Taj Mahal": {
            img: "https://source.unsplash.com/800x600/?tajmahal",
            places: [
                { name: "Taj Museum", img: "https://source.unsplash.com/800x600/?taj-museum" },
                { name: "Agra Fort", img: "https://source.unsplash.com/800x600/?agra-fort" }
            ]
        },
        Hampi: {
            img: "https://source.unsplash.com/800x600/?hampi",
            places: [
                { name: "Virupaksha Temple", img: "https://source.unsplash.com/800x600/?virupaksha" },
                { name: "Vittala Temple", img: "https://source.unsplash.com/800x600/?vittala-temple" }
            ]
        }
    }
};


let currentLevel = "category";  
let selectedCategory = "";
let selectedItem = "";

const cardsContainer = document.getElementById("cardsContainer");
const backBtn = document.getElementById("backBtn");

/* -------- LEVEL 1: Load category items (Cities / States / etc.) -------- */
function loadSubItems(category) {
    currentLevel = "sub";
    selectedCategory = category;

    cardsContainer.innerHTML = "";
    backBtn.style.display = "none";

    const subItems = data[category];

    for (let item in subItems) {
        createCard(item, subItems[item].img);
    }
}

/* -------- LEVEL 2: Load places inside selected city/state -------- */
function loadPlaces(itemName) {
    currentLevel = "places";
    selectedItem = itemName;

    cardsContainer.innerHTML = "";
    backBtn.style.display = "block";

    const placeList = data[selectedCategory][itemName].places;

    placeList.forEach(place => {
        createCard(place.name, place.img);
    });
}

/* -------- Create Card Component -------- */
function createCard(name, img) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${img}">
        <div class="card-title">${name}</div>
    `;

    card.addEventListener("click", () => {
        if (currentLevel === "category") {
            loadSubItems(name);
        } else if (currentLevel === "sub") {
            loadPlaces(name);
        }
    });

    cardsContainer.appendChild(card);
}

/* -------- Category Buttons -------- */
document.querySelectorAll(".category").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".category.active").classList.remove("active");
        btn.classList.add("active");

        currentLevel = "category";
        loadSubItems(btn.dataset.filter);
    });
});

/* -------- BACK BUTTON -------- */
backBtn.addEventListener("click", () => {
    if (currentLevel === "places") {
        loadSubItems(selectedCategory);
    }
});

/* Default Load */
loadSubItems("cities");
