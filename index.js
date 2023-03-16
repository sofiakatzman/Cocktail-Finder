//wait for dom to load to start up tbd if necessary
document.addEventListener("DOMContentLoaded", function() {});

//sends request for data from server
const url = "http://localhost:3000/recipies"

//DOM element selectors that collect user filter labels
const form = document.querySelector('form')
const dropdownSpiritBase = document.querySelector('#dropdownSpiritBase')
const dropdownMixer = document.querySelector('#dropdownMixer')


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
            console.log(recipe.name)
        } else {
            console.log("Please try a different combination!") // in the end we want this to return only if there are NO matched recipes
        }
    })
  })
  .catch(error => console.error(error))
})

function displayRecipeCard(recipe){

}

//write function to display matchd item on DOM 




  
