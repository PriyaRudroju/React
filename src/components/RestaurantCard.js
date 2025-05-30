import { CDN_URL } from "../utils/constants";   


const RestaurantCard = (props) => {

    const { resData } = props; //destructuring props to get resname and cuisine

    console.log(resData.card.card.info);

    const {cloudinaryImageId, name, avgRating, cuisines} = resData.card.card.info; //destructuring resData to get cloudinaryImageId, name, avgRating, cuisines and deliveryTime  

    return (
        <div className = "restaurant-card" style ={{ backgroundColor: "#f0f0f0"}}>
           
            <img className = "res-logo" alt = "res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} />
             <h3 style={{fontStyle: "italic"}}>{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{cuisines}</h4> 
            </div>
    );
};

export default RestaurantCard;