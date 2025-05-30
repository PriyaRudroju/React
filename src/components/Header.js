import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {


    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "abcd" 
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxyFWF1PL4_YrBvurAYo1TZsqVvGnobk1Pw&s"
                />
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                    className="login" 
                    onClick  = {() => {
                        btnNameReact == "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }
                }
                >
                {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
}; 

export default Header;



