# Cocktail Recipe Finder

Cocktail Recipe Finder App for Phase 1 Project Assignment by Sofia Katzman


# Description:  

Cocktail Finder is a cocktail recipe finder app that will match you with a cocktail recipe based on your choice of base spirit and mixer. 

Features: 

- Users can "like" cocktails. Likes are stored in server. 
- Users can filter different cocktail / mixer combinations. 


## Installation

Cocktail Finder requires a server conection to it's db.json file in order for the application to work. 
NPM built a full fake rest API JSON Server for backend prototyping and details can be found here: 
https://www.npmjs.com/package/json-server?activeTab=readme

Please follow the below instructions to install and connect to this server. 

#1. Installing NPM JSON SERVER
To install the JSON Server, please run the below command in your terminal: 

        npm install -g json-server

#2. Start your JSON Server 
In your terminal, initialize the server connection by entering the below code in your local environment: 

        json-server --watch db.json

Once the below screen is seen, you can open the index.html file on your preferred browser to use this app.


![server connection successful prompt on command terminal](https://i.ibb.co/jJJhvzv/Local-Server-Connection-Successful-Photo.png)


## Usage Visuals

App features : 

- Scroll through our database of drinks!

![Gif of Scrolling through App](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWMxNWM1MWJmNjU5YWY4MTM1YmI0MTdmNTI1N2QzMjIzZTNkYWQ1OSZjdD1n/ky7fp8RSI73NzASkH7/giphy.gif)

- Filter recipes by choosing your favoritee base alchohol & mixer combination. 

![Gif of using filter function on App](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRjMmM5YWZhY2YyOTM3YTUzNmIxNDhkOGRkMDJjYTE0ZjdkOThhYyZjdD1n/TuMkQcS5mcS38DRT11/giphy.gif)


- "Like" any of our drinks. The display count is a collective amount between all of our users. 

![Gif of using like feature on App](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjdkZDgxNjUwMTZjNTJmMzMyMDhlMGU0NjZlZGUzMGNjYTM3MzM5NyZjdD1n/oVKLcUQFqrWnq2Za7P/giphy.gif)

- Easily accreess all recipies with the click of a button! 

![Gif of clicking a button that causes all recipes to be displayed on screen](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2I3ZWI2MGViODFkM2I3MzU3YmRiOWIxNmYxMGNhZTY4MzFjOTM1YyZjdD1n/BtOtsrUj7qr3chxmUb/giphy.gif)


## Contributing

Pull requests are welcome for reiew. 
No major changes are allowed. 

Please reach out to support if you have any questions. 

## License

Licensing is not being offered at this time. 
For any questions, please reach out to our support team. 

## References

All images, recipe names and instructions belong to "A COUPLE COOKS"
Source URLs can be found in file: sources.txt

## Acknowledgement

Thank you to "A COUPLE COOKS" for their incredible blog from where the recipes and photographs used in this app are all from. Their contnt contributions have made this application possible. 

## Support

For any questions or support, please reach out to katzmansof@gmail.com . 


# Project Status 

Last Update: 3/18/23

Daily Work Log: 
3/15/23 - GOAL: Initialize all files(html, css, js, db)
- Created README, index.js, and index.html files. 
- Initialized basic body for html. Connected js page to HTML via script tag & tested to make sure connection is complete
- Initialized css stylesheet & connected to index.html & tested to make sure connection is complete
- Implemented temporary smaller db to begin working on functions. 
- Created fetch and succesfully accessed db data
- created drop down menus to select ingredients
- created array itteration of json server data
- filter function completed 
- filtered results are uploaded to DOM

3/16/23
- added dom clearout at new form submission
- added "try again error" that clears out after every new form submission
- finalize "like" feature - wrote code but not yet working with fetch patch **


3/17/23
- implemented remainder of database = 20 different recipies now loaded!!
- tweaked style attributes ; happy with over aesthetic 
- added event listener for cards to change colors when the mouse hovers over them

3/18/23
- added reset button 
- created and added gifs for README

PENDING GOALS: 
- clean code 

## Project Requirements 

- A README.md file ✓
- A detailed commit histort (+30 minimum) ✓
- A video walkthrough of your app < 3 mins - PENDING 
- A blog post - 85% Complete - about .map() method

- App Must : 
        - Be HTML/CSS/JS fronted that accesses data from an api or db.json file using json-server ✓
        - Should return a colection of at least 5 objects with each having at least 3 attributes ✓
        - All client / api interactions should be handled asynchronously and use json as the communication format ✓ 
        - Run on a single page - no redirects or reloads ✓
        - Use at least 3 distinct event listeners of different types that enable interactivity. Must be added through javascript and not be embedded to html elements or be css ✓ 
                1. Form Submission -> Rendering of filtered recipies ✓
                2. Hover -> Shadow on recipe card ✓
                3. Click -> Like ✓
        - Must implement at least one instance of array iteration using available array methods (map, forEach or filter)  ✓
        - Keep code dry - use functions to abstract repetitive code 
        