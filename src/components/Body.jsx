import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(
    resObj.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = restaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4,
          );
          console.log(filteredList);
          setRestaurants(filteredList);
        }}>
        Restaurant Filter
      </button>

      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard 
            key={restaurant.info.id} 
            resData={restaurant.info} 
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
