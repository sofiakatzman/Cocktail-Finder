//Cocktail Recipie Finder BASIC FUNCTION

//This app will be connected to an API in file name JSON.db
//When the DOM Content Loads, the webpage will ask the user to pick up to 3 ingredients 
//When the user submits the form, JS will look through the DB for recipies that match those X ingredients 
//All matches will be returned to the user. 

//The user can choose to identify the maximum number of additional ingredients they will need in order to make their creation 
//JS will return the recipie that meets that specific criteria (array length < x )

//The recipie cards will have a "like button"
//when a user likes a recipie the like is sent via server and stored in the JSON.db file

//night mode will change the css class to an inverted design that is tbd 
//night mode will be availabel via a button or switch - tbd 

document.addEventListener("DOMContentLoaded", function() {
    // code to be executed after the DOM is loaded
  });

const url = "http://localhost:3000/recipies"

fetch(url)
  .then(response => response.json())
  .then(data => getRecipiesByFilter(data))
  .catch(error => console.error(error))

function getRecipiesByFilter(data){
    console.log(data)
}

const form = document.querySelector('form')
const dropdown = document.querySelector('#dropdown')


const dropdownSpiritBase = document.querySelector('#dropdownSpiritBase')
const dropdownSpirit2 = document.querySelector('#dropdownSpirit2')
const dropdownMixer = document.querySelector('#dropdownMixer')
const dropdownLemonLime = document.querySelector('#dropdownLemonLime')
const dropdownGarnish = document.querySelector('#dropdownGarnish')
const dropdownGarnish2 = document.querySelector('#dropdownGarnish2')
const submitButton = document.querySelector('#submitButton')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const selectedSpiritBase = dropdownSpiritBase.value
  const selectedSpirit2 = dropdownSpirit2.value
  const selectedMixer = dropdownMixer.value
  const selectedLemonLime = dropdownLemonLime.value
  const selectedGarnish = dropdownGarnish.value
  const selectedGarnish2 = dropdownGarnish2.value

  console.log(selectedSpiritBase + selectedSpirit2 + selectedMixer + selectedLemonLime + selectedGarnish + selectedGarnish2)

})


  
