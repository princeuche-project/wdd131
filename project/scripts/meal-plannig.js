const mealPlan = [
    {
        day: "Monday",
        breakfast: "Oatmeal & Fruit",
        lunch: "Chicken Salad",
        dinner: "Grilled Fish & Vegetables"
    },
    {
        day: "Tuesday",
        breakfast: "Whole Wheat Toast & Eggs",
        lunch: "Turkey Sandwich",
        dinner: "Brown Rice & Chicken"
    },
    {
        day: "Wednesday",
        breakfast: "Greek Yogurt & Berries",
        lunch: "Vegetable Wrap",
        dinner: "Lean Beef Stir Fry"
    },
    {
        day: "Thursday",
        breakfast: "Smoothie Bowl",
        lunch: "Quinoa Salad",
        dinner: "Baked Salmon"
    },
    {
        day: "Friday",
        breakfast: "Banana Pancakes",
        lunch: "Chicken Wrap",
        dinner: "Vegetable Pasta"
    },
    {
        day: "Saturday",
        breakfast: "Fruit Salad",
        lunch: "Rice & Beans",
        dinner: "Grilled Chicken"
    },
    {
        day: "Sunday",
        breakfast: "Scrambled Eggs",
        lunch: "Healthy Burger",
        dinner: "Roasted Vegetables"
    }
];

const tableBody = document.querySelector("#meal-table");

mealPlan.forEach(meal => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${meal.day}</td>
        <td>${meal.breakfast}</td>
        <td>${meal.lunch}</td>
        <td>${meal.dinner}</td>
    `;

    tableBody.appendChild(row);
});
