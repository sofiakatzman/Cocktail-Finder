//wait for dom to load to start up tbd if necessary
document.addEventListener("DOMContentLoaded", function() {});

//sends request for data from server
const url = "http://localhost:3000/recipes"

//DOM element selectors that collect user filter labels
const form = document.querySelector('form')
const dropdownSpiritBase = document.querySelector('#dropdownSpiritBase')
const dropdownMixer = document.querySelector('#dropdownMixer')
let divCollect = document.querySelector('#recipe-display')

//event listener that waits for button to be clicked to store the filter label data
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const selectedSpiritBase = dropdownSpiritBase.value
  const selectedMixer = dropdownMixer.value

  //server fetch request to retrieve json data
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(recipe => { 
  //filter function that itterates through kson data
  //need to add if statements for when only one or the other is picked
        if(recipe.spirit1[0] === selectedSpiritBase && recipe.mixer[0] === selectedMixer){
          displayRecipeCard(recipe)  
          console.log(recipe.name)
        } else {
            console.log("Please try a different combination!") // in the end we want this to return only if there are NO matched recipes
        }
    })
  })
  .catch(error => console.error(error))
})


function displayRecipeCard(recipe){

  //creates a heading for drink name
    let h2 = document.createElement('h2')
    h2.innerHtml = recipe.name
    h2.innerHtml = "TEST"
  //displays drink photo
    let img = document.createElement('img')
    img.setAttribute('src', recipe.imageURL)

  //creates a paragraph element that can hold drink ingredients
    img.setAttribute('class', 'recipe-photo')
    let pLikes = document.createElement('p')
    pLikes.innerText = `${recipe.likeCount}`

  //creates a paragraph element that can hold drink likes

    let pIngredients = document.createElement('p')
    pIngredients.innerText = "hello"


  //creates like button 
    let btn = document.createElement('button')
    btn.setAttribute('class', 'like-btn')
    btn.innerText = "like"

    //puts all new elements together into one card
    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, img, pLikes, btn)
    divCollect.append(divCard)
    }