---
#React 

#Parcel
- Parcel also uses some of the other packages as dependencies 
- Dev Build
- Local Sever
- HMR - Hot Module Replacement 
- Faster Builds (because it is also caching) 
- Parcel also does image optimization 
- when you make production build in parcel it will do minification
- compress the file (small - it will remove all the spaces to optimize) 
- File matching algorithm (package lock json file)
- Uses consistent hashing
- code splitting
- Differential bundling (support older browsers) - can give you ability to run on diff types of browsers and versions 
- Diagnostics ( beautiful error display )
- Error Handling
- Can be also hosted on https 
- Tree shaking - parcel will remove unused code, if there is extra or random parcel will remove those. 
 ( Documentation  https://parceljs.org/)


- Dist - execute npx - put all dev files in dist folder - contain all dev files 

- All Production ready code will be in .js file, .css file and .html file 
- parcel.cache and dist can be regenerated
- dev build (npx parcel index.html) - local machine
- prod build (npx parcel build index.html) - client machine

- Local - git(package.json) - deployed on to server (has its own dist) - (local does not directly connect to server - we will push it to git and fetch to server then serve to end user )

- to make it compatible to older versions of browsers we use browsers list ( which is nom package need some configuration)

#npm scripts
- Json file - will show you how to start and build the application 
- npm run start - to run in dev mode - calling package parcel index.html
- npm run build - builds parcel.html

# Fundamentals 

#React Elements 
- when we render DOM it will convert to an html element

#React element using JSX 
- Javascript syntax to create react elements in simple way 
- Merge html and js together 
- JSX is not a valid JS 
- JSX transpiled before it reaches the JS - builds parcel - babel(JS compiler) will convert the code that machine can understand ( take JSX and converts so that the react will understand)
- When you give JSX code it transpile to React.createElement - then converts to js object and render HTMLElement.

#JSX Attributes 
- JSX attributes are represented in camelcase --> tabIndex
- Similar to html attributes
- Wrap the code inside <> braces to let babel understand

#React Components - All UI Elements
- 1/ Class Based Components - Old 
- 2/ Functional components - New

#React Functional components 
- simple js code that return react elements 
- Component inside a component is called composition

- Any JS expression can be written inside {}  
- React element inside a react element 
- JSX takes cares of injection attacks 
- Any type of data that is wrapped inside the {} the browser will checks 

- <props> - used to pass data dynamically
- props are normal arguments to function
- passing a prop is like passing an argument to a function

#Config driven UI
- website is driven by config(data)
- controlling UI 

#Keys
- It uniquely identify the elements
- It re-render everything in the container
- React does not take "index" as a key

#Food App
- Header
- *-Logo
- *-NavItem

- Body
- *Search 
- *-RestaurantContainer
- **-RestaurantCard
- *-Img
- *-NameofRestaurant, Rating, Cuisine, Delivery Time
 
-  Footer
- *-Copyright
- *-Links
- *-Address
- *-Contact
 
- If want to export more than 2 , we use name exports


- Default export/import
- export default Component;
- Import Component from "path";


- Named Export/Import
- export const Components;
- import {Component} from "path";

# React Hooks
- Normal JS utility Functions 
- 1. Use state() - Use to generate super powerful() state variables in react - maintain state of a variable 
- 2. UseEffect() - it take 2 arguments - 

- this useeffect call back effect is called after your component renders.

- whenever the state variable react will re-render the component


- React uses Reconciliation algorithm : also known as react fiber
- Virtual DOM(JS Object): is representation of an actual DOM

- Diff Algorith: find out diff between 2 virtual DOM (updated virtual dom & old) then calculate the diff and update the dom in every render cycle.

# Monolithic Application:
- 

# Microservice Architecture: (It follows single responsible principle)
- 
- To call an api directly we use third party called - https://corsproxy.io/ before the api url 

# Shimmer
- resembles the page's actual UI , so users will understand how quickly the web/mobile app will load even before the content has shown up.