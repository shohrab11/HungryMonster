const inputValue = document.getElementById('inputText');
const submitBtn = document.getElementById('submitButton');
const mealEl = document.getElementById('meal');

const mealIngredians = document.getElementById('meal-ingredians');


 submitBtn.addEventListener('click',function(){

    const term = inputValue.value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;

      fetch(url)
     .then( res => res.json())
     .then( data => {
        mealEl.innerHTML = data.meals.map(
         (meal) => `

         <button onclick="displayMealDeatils('${meal.idMeal}')">
         <div class="card-group col-md-4">
             <div class="card">
                 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
        </div>
    
        </button>
        
         `
     )
    })
    .catch(err => alert("Errorr in Meal name"))

    })


function displayMealDeatils(id){
     const link = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    
    fetch(`${link}`)
  .then( res => res.json())
  .then(data => 
    {
        mealIngredians.innerHTML = data.melas.map(
            (meal) =>
            `
            <div class="card-group col-md-4">
                 <div class="card">
                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${meal.strMeal}</h3>
                    </div>
                </div>
                <h4> Meal Ingredians </h4>
                <ul>
                  <li>${meal.strIngredient1}</li>
                  <li>${meal.strIngredient2}</li>
                  <li>${meal.strIngredient3}</li>
                  <li>${meal.strIngredient4}</li>
                  <li>${meal.strIngredient5}</li>
                  <li>${meal.strIngredient6}</li>
                </ul>
            </div>
            
            `
        )
    
      })
    

}

