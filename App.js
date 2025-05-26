import React from "react";  //importing react
import ReactDOM from "react-dom/client";  //importing react dom

const Title = ( ) => ( <h1 className="head" tabIndex="5">Namaste React </h1> ); //creating a react element 

//React Functional Component

const HeadingComponent = () => (
    <div id="container">  
        <Title/>          // component                                
    <h1 className="heading">Namaste Functional Component</h1> </div> //returning a react element
);

const HeadingComponent2 = () => ( <h1 className="heading">Namaste Functional Component 2</h1>
);

const Component = () => {
    return (<h1 className = "heading"> using return </h1>)
};

const Component2 = () => (
    <div>
        <h1 className = "heading"> not using return  </h1>
        <Component/>
    </div>
);

function Component3()
{
    return (
    <div>
        <Component2/>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root element
root.render(<Component3/>); //rendering the react element 




