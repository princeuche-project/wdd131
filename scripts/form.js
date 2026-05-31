// Get current year
const year = new Date().getFullYear();

// Insert year into footer
document.getElementById("year").textContent = `© ${year} 2026 Uchenna Godstime CopyRight Reserved`;

// Get last modified date
const lastModified = document.lastModified;

// Insert last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;


const products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    },

    {
        id: "am-3996",
        name: "Crypto trading",
        averagerating: 8.4
    }
];


const getproduct = document.getElementById("product");

if (getproduct) {
    products.forEach(product => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        getproduct.appendChild(option);
    });
}

// const getproduct = document.querySelector("#product");

// products.forEach(product => {
//     const option = document.createElement("option");

//     option.value = product.id;     // value field
//     option.textContent = product.name; // displayed text

//     getproduct.appendChild(option);


// });


// Get current count from localStorage
let countReview = Number(localStorage.getItem("countReview")) || 0;

// Increment count
countReview++;

// Save updated count
localStorage.setItem("countReview", countReview);

// Display count on page
document.getElementById("countReview").textContent = countReview;


