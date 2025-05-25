import React from "react";  //importing react
import ReactDOM from "react-dom/client";  //importing react dom

const heading = React.createElement("h1",  {}, "hello world from react");  //creating an h1 element 
const root = ReactDOM.createRoot(document.getElementById("root"));     //creating a root element
root.render(heading);           //rendering the heading element