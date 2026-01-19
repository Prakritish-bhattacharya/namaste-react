import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const resList =
      json?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setRestaurants(resList);
  };

  const handleTopRated = () => {
    const filtered = restaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setRestaurants(filtered);
  };

//  shimmer UI
if(restaurants.length === 0){
  return <Shimmer/>
}
  return (
    <div className="body">
      <button className="filter-btn" onClick={handleTopRated}>
        Top Rated Restaurants
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
