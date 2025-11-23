const data = {

    cities: {
        Hyderabad: {
            img: "img/charminar.jpg",
            places: [
                { name: "Charminar", img: "img/charminar.jpg" },
                { name: "Golconda Fort", img: "img/golconda.jpeg" },
                { name: "Hussain Sagar", img: "img/hussan.jpg" },
                { name: "Birla Mandir", img: "img/birla.jpg" }
            ]
        },
        Chennai: {
            img: "img/chennai.jpg",
            places: [
                { name: "Marina Beach", img: "img/marina.jpg" },
                { name: "Kapaleeshwarar Temple", img: "img/kapaleeshwar.jpg" },
                { name: "Valluvar Kottam", img: "img/valluvar.jpeg" }
            ]
        },
        Mumbai: {
            img: "img/mumbai.jpg",
            places: [
                { name: "Gateway of India", img: "img/delhi.jpg" },
                { name: "Marine Drive", img: "img/marina.jpg" },
                { name: "Elephanta Caves", img: "img/elephant.jpeg" }
            ]
        },
        Delhi: {
            img: "img/delhi.jpg",
            places: [
                { name: "India Gate", img: "img/delhi.jpg" },
                { name: "Red Fort", img: "img/redfort.jpeg" },
                { name: "Qutub Minar", img: "img/qutub.jpeg" }
            ]
        }
    },

    states: {
        Kerala: {
            img: "img/kerala.jpeg",
            places: [
                { name: "Alleppey", img: "img/Alleppey.jpg" },
                { name: "Munnar", img: "img/munnar.jpeg" },
                { name: "Kumarakom", img: "img/kumarakom.jpeg" }
            ]
        },
        Rajasthan: {
            img: "img/rajasthan.jpeg",
            places: [
                { name: "Jaipur", img: "img/jaipur.jpeg" },
                { name: "Udaipur", img: "img/udaipur.jpeg" },
                { name: "Jodhpur", img: "img/jodhpur.jpeg" }
            ]
        },
        Goa: {
            img: "img/goa.jpeg",
            places: [
                { name: "Calangute Beach", img: "img/calanguta.jpeg" },
                { name: "Baga Beach", img: "img/baga.jpeg" },
                { name: "Old Goa Churches", img: "img/church.jpeg" }
            ]
        }
    },

    beaches: {
        Goa: {
            img: "img/goa.jpeg",
            places: [
                { name: "Baga Beach", img: "img/baga.jpeg" },
                { name: "Candolim Beach", img: "img/candolim.jpeg" },
                { name: "Anjuna Beach", img: "img/anjuna.jpeg" }
            ]
        },
        Gokarna: {
            img: "img/rokarna.jpeg",
            places: [
                { name: "Om Beach", img: "img/om.jpeg" },
                { name: "Kudle Beach", img: "img/kundal.jpeg" },
                { name: "Paradise Beach", img: "img/paradise.jpeg" }
            ]
        }
    },

    nature: {
        Munnar: {
            img: "img/munnar.jpeg",
            places: [
                { name: "Top Station", img: "img/top.jpeg" },
                { name: "Tea Gardens", img: "img/tea.jpeg" },
                { name: "Eravikulam National Park", img: "img/park.jpeg" }
            ]
        },
        Himalayas: {
            img: "img/himalayas.jpeg",
            places: [
                { name: "Manali", img: "img/manali.jpeg" },
                { name: "Shimla", img: "img/shimla.jpeg" },
                { name: "Dharamshala", img: "img/dharm.jpeg" }
            ]
        }
    },

    heritage: {
        "Taj Mahal": {
            img: "img/taj.jpeg",
            places: [
                { name: "Taj Museum", img: "img/museum.jpeg" },
                { name: "Agra Fort", img: "img/agra.jpeg" }
            ]
        },
        Hampi: {
            img: "img/humpi.jpeg",
            places: [
                { name: "Virupaksha Temple", img: "img/virupaksha.jpeg" },
                { name: "Vittala Temple", img: "img/vittala.jpeg" }
            ]
        }
    }
};


let currentLevel = "category";  
let selectedCategory = "";
let selectedItem = "";

const cardsContainer = document.getElementById("cardsContainer");
const backBtn = document.getElementById("backBtn");

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
        } else if (currentLevel === "places") {
            window.location.href = `place_details.html?place=${encodeURIComponent(name)}`;
        }
    });

    cardsContainer.appendChild(card);
}
document.querySelectorAll(".category").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".category.active").classList.remove("active");
        btn.classList.add("active");

        currentLevel = "category";
        loadSubItems(btn.dataset.filter);
    });
});

backBtn.addEventListener("click", () => {
    if (currentLevel === "places") {
        loadSubItems(selectedCategory);
    }
});

loadSubItems("cities");
