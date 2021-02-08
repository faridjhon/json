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
                html +="
                <div class="mealitem" data-id = "${meal.idMeal}">
                <div>
                <img src="${meal.strMealThumb}" alt="">  
                </div>

                <div>
                    <h3>
                        ${meal.strMeal}
                    </h3>
                </div>
                
                
                </div>
                
                
                
                
                
                
                " ;
            })
        }

        





    })
}