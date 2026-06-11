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



// Water Calculator

function calculateWater() {

    const weight =
        document.getElementById("weight").value;

    if (weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    const water =
        (weight * 35) / 1000;

    document.getElementById("result")
        .innerHTML =
        `Recommended water intake:
    ${water.toFixed(1)} liters/day`;
}


function calculateBMI() {

    let weight =
        document.getElementById('weight').value;

    let height =
        document.getElementById('height').value / 100;

    let bmi =
        weight / (height * height);

    document.getElementById('bmiResult')
        .innerHTML =
        `Your BMI is ${bmi.toFixed(1)}`;

}


function subscribeNewsletter() {

    const email =
        document.getElementById("emailInput").value;

    const message =
        document.getElementById("subscribeMessage");

    if (email === "") {

        message.innerHTML =
            "⚠️ Please enter your email address.";

        message.style.color = "red";

        return;
    }

    message.innerHTML =
        `✅ Thank you for subscribing, ${email}! 
        You will now receive healthy eating tips and recipes.`;

    message.style.color = "green";

    document.getElementById("emailInput").value = "";
}


const getNutrient = document.getElementById("nutrients");
const message = document.getElementById("message");

getNutrient.addEventListener("change", () => {
    const value = getNutrient.value;

    switch (value) {
        case "carbs":
            message.textContent =
                "Carbohydrates are the body's main source of energy. They help fuel the brain, muscles, and other organs throughout the day.";
            break;

        case "proteins":
            message.textContent =
                "Proteins are essential for building and repairing tissues, supporting muscle growth, and maintaining a healthy immune system.";
            break;

        case "fats":
            message.textContent =
                "Healthy fats provide long-lasting energy, support brain function, and help the body absorb important vitamins.";
            break;

        case "vitamins":
            message.textContent =
                "Vitamins help regulate body functions, strengthen the immune system, and support overall health and well-being.";
            break;

        case "minerals":
            message.textContent =
                "Minerals are important for strong bones, healthy muscles, nerve function, and maintaining proper body processes.";
            break;

        default:
            message.textContent = "";
    }
});



// const products = [
//     {
//         id: "fc-1888",
//         name: "Flux capacitor",
//         averagerating: 4.5
//     },
//     {
//         id: "fc-2050",
//         name: "Power laces",
//         averagerating: 4.7
//     },
//     {
//         id: "fs-1987",
//         name: "Time circuits",
//         averagerating: 3.5
//     },
//     {
//         id: "ac-2000",
//         name: "Low voltage reactor",
//         averagerating: 3.9
//     },
//     {
//         id: "jj-1969",
//         name: "Warp equalizer",
//         averagerating: 5.0
//     },

//     {
//         id: "am-3996",
//         name: "Crypto trading",
//         averagerating: 8.4
//     }
// ];


// const getproduct = document.getElementById("product");

// if (getproduct) {
//     products.forEach(product => {
//         const option = document.createElement("option");

//         option.value = product.id;
//         option.textContent = product.name;

//         getproduct.appendChild(option);
//     });
// }

// // const getproduct = document.querySelector("#product");

// // products.forEach(product => {
// //     const option = document.createElement("option");

// //     option.value = product.id;     // value field
// //     option.textContent = product.name; // displayed text

// //     getproduct.appendChild(option);


// // });


// // Get current count from localStorage
// let countReview = Number(localStorage.getItem("countReview")) || 0;

// // Increment count
// countReview++;

// // Save updated count
// localStorage.setItem("countReview", countReview);

// // Display count on page
// document.getElementById("countReview").textContent = countReview;


