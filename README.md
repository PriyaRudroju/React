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
- Wrap the code inside () braces to let babel understand

#React Components - All UI Elements
- 1/ Class Based Components - Old 
- 2/ Functional components - New

#React Functional components 
- simple js code that return react elements 
