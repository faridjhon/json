const searchButton = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailstext = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchButton.addEventListener('click ', getmealList);


function getmealList(){

    let searchInput = document.getElementById('seachinput').nodeValue.trim();
    fetch ('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then (res => res.json())
    .then (data =>{
        let html = "";
        if(data.meals){
            data.meals.forEach(meal =>{
                if(data.meals){
                    data.meals.forEach(meal => {
                        html += `
                            <div class = "meal-item" data-id = "${meal.idMeal}">
                                <div class = "meal-img">
                                    <img src = "${meal.strMealThumb}" alt = "food">
                                </div>
                                <div class = "meal-name">
                                    <h3>${meal.strMeal}</h3>
                                    <a href = "#" class = "recipe-btn">Get Recipe</a>
                                </div>
                            </div>
                        `;
            })
        }

        





    })
}