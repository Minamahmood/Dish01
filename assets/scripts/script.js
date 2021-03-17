// let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
var storedItem = JSON.parse(localStorage.getItem("storedItem"));
console.log(storedItem)
const searchForm = document.querySelector("form"); // we have only one form
const searchResultDiv = document.querySelector(".search-result"); // the div for the search(the food pics and info)
const container = document.querySelector(".container");
let searchQuery = "";
//varebales for the ids
const APP_ID = "cf2a6181";
const APP_key = "2636e7bf0909d931f93613bbdc0d57c0";
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Application Keys :ca209bae08f31367dac0eb37d98a78fd   -------->Nutrition
//Application ID :81ea45e5 ----->Nutrition
//URL =https://api.edamam.com/api/nutrition-details
/////////////////////////////////////////////////////////////////////////////////////////////////////
const appNutrition_ID = "81ea45e5";
const appNutrition_key = "ca209bae08f31367dac0eb37d98a78fd";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//curl "https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
recipeSearch.addEventListener("submit", (e) => {
    e.preventDefault(); //  the behavior of our form
    searchQuery = e.target.querySelector("input").value;
    fetchAPI();
    console.log("searchQuery", searchQuery);
});
async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    document.getElementById("savedText").innerHTML = storedItem[0]+" eating at "+storedItem[1]
    console.log(data);
}
var nutritionSearch = document.querySelector ("#nutritionSearch");
nutritionFetchApi() 

nutritionSearch.addEventListener('submit', (e) => {
  e.preventDefault();
searchQuery = e.target.querySelector('input').value;
var encodedQuery = encodeURI(searchQuery);
let searchQuery = () => {
  encodedURI(e.target.querySelector('input').value)
}
console.log("encodedQuery" ,encodedQuery);
  nutritionFetchApi();
  console.log("searchQuery", searchQuery);
})
async function nutritionFetchApi(){
  const baseURL =`https://api.edamam.com/api/nutrition-data?app_id=${appNutrition_ID}&app_key=${appNutrition_key}&ingr=500%20g%20bread%20flour`;
  const response = await fetch(baseURL);
  const data = await response.json();
  if(data)
  console.log(data);
}
function generateHTML(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    results.map((result) => {
        generatedHTML += `
      <div class="item" data-img="${result.recipe.image} "data-label="${result.recipe.label} "data-url="${
        result.recipe.url}" data-calories=" ${result.recipe.calories.toFixed(2)}">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        
        <div onload="get()">
        <p id="savedText"></p>
        <p id="openedText"></p>
        <button onclick="save(event)">SAVE</button>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
    });
    searchResultDiv.innerHTML = generatedHTML;
}


//save to local storge

function save(e) {
  console.log(e.target.parentElement.parentElement)

  var tmp =(e.target.parentElement.parentElement)
  var recipe ={img:tmp.dataset.img}
  console.log(recipe)
    var Item =[document.getElementById("input").value,momentVar] 
    console.log(Item);
    localStorage.setItem("storedItem", JSON.stringify(Item) ) 
 
}
function git() {
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem + "opened";
}