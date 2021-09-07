# MikeyReactPortfolio
Deployed Site: https://mikeyhauser.github.io/MikeyReactPortfolio/
## This deployed portfolio is created with React has the following features:
* fundamental information about me as a coding professional
* contact info: email, phone, geographical location
* portfolio: cards of projects completed in 2021. Each Card contains a link to its Github repo and a demonstration of the site (either the deployed site or a link to me performing a live demo of the site.) the card flips with additional information when hovered over.
* resume
* links to Github and linkedIn at the bottom footer

## Special features
* imported graphics from npm. example: fade, moving graphics, text fonts.
* personally crafted graphics using photoshop and gimp
* flipping cards and vertical oriented text
* links to project deployed sites, demonstrations, and README files.

## File Structure: 
* The majority of React coding occurs in App.js, src/Components, public/CSS, public/images, projectsData.json, and package.json.
* React requires that we run $ npx create react app. This constructs the basics of what is expected in the React structure. The primary JSX (hybrid of Javascript and HTML) assembly happens in App.js in the src folder. This file collects various components and pages from the src/Components folder.
* Images and styling are gathered from the public folder. Here you will find CSS files and all the custom images I loaded into the structure.
* projectsData.json is a json file that contains list style {object oriented} information that also gets collected by the App.js and its many components. The components look in the projectsData.json to see if there is relevant data. 
* If those data values are not "null", then the Components begin to create the elements on the page using what is provided in projectsData.json. The advantage here is I can go back and add/edit data and the webpage will dynamically create new elements or edit existing ones exactly in a recurring fashion.