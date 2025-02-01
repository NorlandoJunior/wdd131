document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    hamburger.textContent = nav.classList.contains('hidden') ? '☰' : '✖';
});


const temples = [
    { name: "Aba Nigeria", location: "Aba, Nigeria", dedicated: 2005, size: 11500, image: "images/aba-nigeria-temple.jpg" },
    { name: "Apia Samoa", location: "Apia, Samoa", dedicated: 1983, size: 18691, image: "images/apia-samoa-temple.jpg" },
    { name: "Belem Brazil", location: "Belem, Brazil", dedicated: 2020, size: 28000, image: "images/belem_brazil_temple.jpg" },
    { name: "Salt Lake", location: "Salt Lake City, USA", dedicated: 1893, size: 253000, image: "images/salt-lake-temple.jpg" },
    { name: "Payson Utah", location: "Payson, Utah, USA", dedicated: 2015, size: 96630, image: "images/payson-utah-temple.jpg" }
];

function displayTemples(filter) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter(t => t.dedicated < 1900);
    } else if (filter === "new") {
        filteredTemples = temples.filter(t => t.dedicated > 2000);
    } else if (filter === "large") {
        filteredTemples = temples.filter(t => t.size > 90000);
    } else if (filter === "small") {
        filteredTemples = temples.filter(t => t.size < 10000);
    }

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.size} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute("data-filter");
        displayTemples(filter);
    });
});

displayTemples("all");
