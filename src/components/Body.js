import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // -------------> Resolve API <---------------
      "https://namastedev.com/api/v1/listRestaurants"   
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&page_type=DESKTOP_WEB_LISTING"    
    );
    const json = await data.json();
    console.log(json);

    const resList =
        json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];
        

    setRestaurants(resList);
    setFilteredRestaurant(resList);
  };

  const handleTopRated = () => {
    const filtered = restaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filtered);
  };

//  shimmer UI
if(restaurants.length === 0){
  return <Shimmer/>
}
  return (
    <div className="body">
      <div className="search">
        <input 
            type="text"
            className="search-box" 
            value = {searchText} 
            onChange = {(e)=>{
              setSearchText(e.target.value);
            }}
            placeholder="Search for restaurants..."
        />
        <button className="search-btn" onClick={()=>{
              // Filter the Restaurant cards and update the UI
              // searchText
              const filtered = restaurants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
        }}>Search</button>
        <button className="filter-btn" onClick={handleTopRated}>
        Top Rated Restaurants
      </button>
      </div>
      

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
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
