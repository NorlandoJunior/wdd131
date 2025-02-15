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
// count a subimit button
<script>
document.addEventListener("DOMContentLoaded", function () {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário para testar localmente
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        const fname = document.getElementById("f-name").value;
        localStorage.setItem("fname", fname);

        // Atualiza o contador na página
        if (document.getElementById("reviewCounter")) {
            document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;
        }
    });

    // Atualiza o contador ao carregar a página
    if (document.getElementById("reviewCounter")) {
        document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;
    }
});
</script>