const thingsData = {
    adventure: [
        { name: "Trekking in Himachal", img: "img/himi.jpg" },
        { name: "River Rafting – Rishikesh", img: "img/rish.jpg" },
        { name: "Paragliding – Bir Billing", img: "img/para.jpg" },
        { name: "Scuba Diving – Andaman", img: "img/scuba.jpg" }
    ],

    spiritual: [
        { name: "Varanasi Ganga Aarti", img: "img/ganga.jpg" },
        { name: "Golden Temple – Amritsar", img: "img/gold.jpg" },
        { name: "Tirupati Balaji Darshan", img: "img/balaji.jpg" }
    ],

    food: [
        { name: "Street Food – Delhi", img: "img/street.jpg" },
        { name: "Hyderabadi Biryani", img: "img/biryani.jpg" },
        { name: "Mumbai Vada Pav", img: "img/vada.jpg" }
    ],

    festivals: [
        { name: "Diwali Celebrations", img: "img/diwalli.jpeg" },
        { name: "Holi Festival", img: "img/holi.jpeg" },
        { name: "Dussehra – Mysore", img: "img/dusse.jpg" }
    ]
};

const container = document.getElementById("cardsContainer");

function loadCategory(type) {
    container.innerHTML = "";
    thingsData[type].forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.img}">
                <div class="card-title">${item.name}</div>
            </div>
        `;
    });
}

document.querySelectorAll(".category").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".category.active").classList.remove("active");
        btn.classList.add("active");
        loadCategory(btn.dataset.filter);
    });
});

loadCategory("adventure");
