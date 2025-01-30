document.addEventListener("DOMContentLoaded", () => {
    // Atualizar ano no footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mostrar última modificação
    document.getElementById("lastModified").textContent = document.lastModified;

    // Armazena preferências do usuário no localStorage
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Dark Mode";
    themeToggle.style.padding = "10px";
    themeToggle.style.cursor = "pointer";

    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        let darkMode = localStorage.getItem("darkMode");

        if (darkMode === "enabled") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            localStorage.setItem("darkMode", "disabled");
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            localStorage.setItem("darkMode", "enabled");
        }
    });

    // Verifica se o usuário já escolheu um tema
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});
