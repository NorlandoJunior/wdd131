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
    // Tenta obter o valor de reviewCount do localStorage. Se não encontrar, define como 0.
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    // Exibe o número de reviews no elemento
    if (document.getElementById("reviewCounter")) {
        document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;
    }

    // Adiciona o listener ao formulário
    document.getElementById("reviewForm").addEventListener("submit", function (e) {
        e.preventDefault();  // Evita o comportamento padrão de envio do formulário

        reviewCount++;  // Incrementa o contador

        // Armazena a contagem no localStorage novamente
        localStorage.setItem("reviewCount", reviewCount);

        // Atualiza o contador de reviews na página
        document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;
    });
});

</script>