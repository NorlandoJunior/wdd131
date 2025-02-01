import { temples } from "./filtered-temples.js";

function displayTemples(filter = "all") {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    } else if (filter === "new") {
        filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    } else if (filter === "large") {
        filteredTemples = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
        filteredTemples = temples.filter(t => t.area < 10000);
    }

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="500" height="250">
        `;
        container.appendChild(card);
    });
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute("data-filter");
        displayTemples(filter);
    });
});

// Exibir todos os templos ao carregar a página
displayTemples();