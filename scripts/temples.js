

// Get current year
const year = new Date().getFullYear();

// Insert year into footer
document.getElementById("year").textContent = `© ${year} 2026 Uchenna Godstime CopyRight Reserved`;

// Get last modified date
const lastModified = document.lastModified;

// Insert last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;


// Hamburger Menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");



navMenu.classList.add("hide");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("hide");

    if (navMenu.classList.contains("hide")) {
        menuButton.innerHTML = "&#9776;";
    } else {
        menuButton.innerHTML = "✖";
    }
});


