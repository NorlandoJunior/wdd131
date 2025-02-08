document.addEventListener("DOMContentLoaded", function () {
    let reviewCount = localStorage.getItem("reviewCount") || 0;

    document.querySelector("form").addEventListener("submit", function () {
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        const userName = document.getElementById("user-name").value;
        localStorage.setItem("userName", userName);
    });

    if (document.getElementById("reviewCounter")) {
        document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;
    }
});
