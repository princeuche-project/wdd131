

document.querySelectorAll(".view-recipe").forEach(button => {
    button.addEventListener("click", () => {
        alert(button.dataset.recipe);
    })
})