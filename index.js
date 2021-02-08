const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
// event listeners
searchBtn.addEventListener('click', getMealList);



// get meal 
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(res => res.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `                    
                        <div class = "meal-img" >
                            <img src = "${meal.strMealThumb}" >
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>                            
                        </div>                    
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any Item!";
            mealList.classList.add('Sorry!!!!!');
        }

        mealList.innerHTML = html;
    });
}



