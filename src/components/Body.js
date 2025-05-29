import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body =() => {

    const [restList, setResList] = useState(restaurantList);

    return (
        <div className = "body">
            <div className = "filter">
                <button className = "filter-btn" onClick={() => {
                     const filteredList = restaurantList.filter(
                        (restaurant) => restaurant.avgRating > 4.5
                    );
                    setResList(filteredList);
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className = "RestaurantContainer">
                {
                    restList.map((restaurant) => {
                        return <RestaurantCard key ={restaurant.id} resData={restaurant} />
                    })
                }

            </div>
        </div>
    );
}

export default Body;