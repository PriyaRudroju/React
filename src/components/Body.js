import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [restList, setResList] = useState([]);

  console.log("resList: ", restList[0]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=Asian%20Roll&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=793cea7d-762a-a717-2046-8af77e27140f&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22FOOD_CATALOG%2FIMAGES%2FCMS%2F2025%2F4%2F10%2F5be498e9-ebe6-494e-8423-98bac021dba4_21a13c86-96d3-4dbe-91be-49b550cf9e8e.jpg%22%2C%22dishFamilyId%22%3A%22846516%22%2C%22dishFamilyIds%22%3A%5B%22846516%22%5D%2C%22dishPreparationStyleIds%22%3A%5B%22b482cde2-eed2-4dc9-ab0b-b98d0b7a2b66%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT"
    );

    const json = await data.json();

    //console.group("Api data: ",json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards[0].card?.card.info);

    console.group("Api data: ",json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);

    setResList(json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
  };

  if(restList.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.avgRating > 4.5
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurantContainer">
        {restList.map((restaurant) => {
          return <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
