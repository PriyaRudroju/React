import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
}; 

export default Header;