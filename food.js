const food = () =>{
    let searchfood = document.getElementById('searchfood');
    let getfood = searchfood.value;
    console.log(getfood);
    searchfood.value = '';
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getfood}`
    fetch( url)
    .then(res => res.json())
    .then(data => displayfood(data.meals))
}


const displayfood = meals => {
    console.log(meals);
    let searchresult = document.getElementById('searchresult');
    searchresult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
        `
        <div onclick="loadmeal(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" width="750" height="300" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,250)}...</p>
                    </div>
                </div>
        `
    
        searchresult.appendChild(div);
    })

  
    // for (const meal of meals){
    //     console.log(meal);
    // }
}


const loadmeal= detail => {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaymeal(data.meals[0]))
}


const displaymeal = meal => {
    console.log(meal);
    let mealdetail = document.getElementById('mealdetail');
    mealdetail.textContent = '';
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go for tutorials</a>
    </div>`
    mealdetail.appendChild(div);
}