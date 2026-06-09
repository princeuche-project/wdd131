// const buttons = document.querySelectorAll(".view-recipe");
// const modal = document.getElementById("recipeModal");
// const recipeText = document.getElementById("recipeText");
// const closeModal = document.getElementById("closeModal")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const recipe = button.getAttribute("data-recipe");
//         recipeText.textContent = recipe;
//         modal.style.display = "block";
//     });
// });

// closeModal.addEventListener("click", () => {
//     modal.style.display = "none"
// });

// window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.style.display = "none"
//     }
// });

document.querySelectorAll(".view-recipe").forEach(button => {
    button.addEventListener("click", () => {
        alert(button.dataset.recipe);
    })
})