import React from "react";  //importing react
import ReactDOM from "react-dom/client";  //importing react dom

const heading = ( <h1 className="head" tabIndex={"5"}>Namaste React</h1> ); //creating a react element 

//React Functional Component

const HeadingComponent = () => (
    <h1 className="heading">Namaste Functional Component</h1>//returning a react element
);

const HeadingComponent2 = () => ( <h1 className="heading">Namaste Functional Component 2</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root element
root.render(heading);