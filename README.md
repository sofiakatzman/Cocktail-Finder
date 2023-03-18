# phase-1-project-cocktail-recipe-finder

Cocktail Recipe Finder App for Phase 1 Project Assignment


# Description:  

Cocktail Finder is a cocktail recipe finder app that will match you with a cocktail recipe based on your choice of base spirit and mixer. 

Offered Feature: Users can "like" cocktails. Likes are stored in server. 

Pending Feature: Hovering over a cocktail will change it's shadow's appearance


## Installation

Cocktail Finder requires a server conection to it's db.json file in order for the application to work. 
NPM built a full fake rest API JSON Server for backend prototyping and details can be found here: https://www.npmjs.com/package/json-server?activeTab=readme
Please follow the below instructions to install and connec to this server. 

#1. Installing NPM JSON SERVER
To install the JSON Server, please run the below command in your terminal: 

        npm install -g json-server

#2. Start your JSON Server 
In your terminal, initialize the server connection by entering the below code in your local environment: 

        json-server --watch db.json

Once the below screen is seen, you can open the index.html file on your preferred browser to use this app.


## Visuals


// GIF OF APP WALKTHROUGH PENDING

## Usage

// Usage Features PENDING


## Contributing

Pull requests are welcome for reiew. 
No major changes are allowed. 

Please reach out to support if you have any questions. 


## License

Licensing is not being offered at this time. 
For any questions, please reach our support team. 

## References

All images, recipe names and instructions belong to //URL-HERE//
Source URLs can be found in //FILE NAME HERE TBD//

## Acknowledgement

Thank you to "A COUPLE COOKS" for their incredible blog from where the recipes and photographs used in this app are from. Their contnt contributions have made this application possible. 


## Support

For any questions or support, please reach out to katzmansof@gmail.com . 


# Project Status 

Still getting all files and directory set up. 
This is my initial README template to be updated closer to project completion. 

Last Update: 3/15/23

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

PENDING GOALS: 
- add one more event listener -- either no added sugar or non pure css hover (change css class event listener)


