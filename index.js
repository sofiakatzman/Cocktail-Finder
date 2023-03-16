
//wait for dom to load to start up tbd if necessary
document.addEventListener("DOMContentLoaded", function() {
  });

//sends request for data from server
const url = "http://localhost:3000/recipies"


//DOM element selectors that collect user filter labels
const form = document.querySelector('form')
const dropdownSpiritBase = document.querySelector('#dropdownSpiritBase')
const dropdownSpirit2 = document.querySelector('#dropdownSpirit2')
const dropdownMixer = document.querySelector('#dropdownMixer')
const dropdownLemonLime = document.querySelector('#dropdownLemonLime')
const dropdownGarnish = document.querySelector('#dropdownGarnish')
const dropdownGarnish2 = document.querySelector('#dropdownGarnish2')
const submitButton = document.querySelector('#submitButton')


//event listener that waits for button to be clicked to store the filter label data
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const selectedSpiritBase = dropdownSpiritBase.value
  const selectedSpirit2 = dropdownSpirit2.value
  const selectedMixer = dropdownMixer.value
  const selectedLemonLime = dropdownLemonLime.value
  const selectedGarnish = dropdownGarnish.value
  const selectedGarnish2 = dropdownGarnish2.value
  console.log(selectedSpiritBase)

  fetch(url)
  .then(response => response.json())
  .then(data => { 
    data.forEach(recipie => {
        if (recipie.spirit1[0] === selectedSpiritBase){
            console.log("We have a match!")
        }

        else{
            console.log("No match!")
        }
        
    })
})
  .catch(error => console.error(error))

})

//Now i need to write the function that will go through the arrays and look for the values above. 








  
