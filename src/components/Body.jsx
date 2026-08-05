import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resObj from "../utils/mockData"
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch APIs data using browsers inBuild function fetch()
  const fetchData = async () => {
    const data = await fetch("https:/namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    console.log(json);
    setRestaurants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              const filteredRestaurants = restaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setRestaurants(filteredRestaurants);
              console.log(searchText);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4,
            );
            // console.log(filteredList);
            setRestaurants(filteredList);
          }}>
          Restaurant Filter
        </button>
      </div>

      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
