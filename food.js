const food = () =>{
    let searchfood = document.getElementById('searchfood');
    let getfood = searchfood.value;
    console.log(getfood);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getfood}`
    fetch( url)
    .then(res => res.json())
    .then(data => console.log(data))
}