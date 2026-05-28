//import { lazy } from "react";


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







const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },


    // Add more temple objects here...

    {
        templeName: "Abidjan Ivory Coast Temple",
        location: "Lot 118 Riviera Attoban Bonoumin Cocody Abidjan",
        dedicated: " 2025, May, 25th",
        area: "17,362 square feet",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },

    {
        templeName: "Accra Ghana temple",
        location: "57 Independence Ave North Ridge P.M.B. CT 209, Cantonments, Accra",
        dedicated: " 2004, January, 11th",
        area: "17,500 square feet",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },

    {
        templeName: "Adelaide Australia Temple",
        location: "53-59 Lower Portrush Rd Marden, South Australia  5070",
        dedicated: "2000, June, 15th",
        area: " 10,700 square feet",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"



    }
];

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {
    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.width = 200;
        image.loading = "lazy";

        // image.style.borderRadius = "8px";

        image.classList.add("temple-image");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);


        gallery.appendChild(card);
    });
}
displayTemples(temples);


document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(
        temples.filter(
            (temple) => parseInt(temple.dedicated.split(",")[0]) < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(
        temples.filter(
            (temple) => parseInt(temple.dedicated.split(",")[0]) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(
        temples.filter((temple) => temple.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(
        temples.filter((temple) => temple.area < 10000)
    );
});