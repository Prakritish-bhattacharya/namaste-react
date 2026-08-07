import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Restaurant Data
  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    setRestaurants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">

      {/* Search & Filter Section */}
      <div className="mb-10 flex flex-wrap items-center gap-4">

        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="h-12 w-80 rounded-xl border border-gray-300 px-4 text-base
                     outline-none transition
                     focus:border-orange-500
                     focus:ring-2
                     focus:ring-orange-200"
        />

        <button
          onClick={() => {
            const filteredRestaurants = restaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setRestaurants(filteredRestaurants);
          }}
          className="h-12 rounded-xl bg-orange-500 px-6
                     font-semibold text-white shadow-md
                     transition-all duration-300
                     hover:-translate-y-1
                     hover:bg-orange-600
                     hover:shadow-xl"
        >
          Search
        </button>

        <button
          onClick={() => {
            const filteredList = restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );

            setRestaurants(filteredList);
          }}
          className="h-12 rounded-xl bg-slate-900 px-6
                     font-semibold text-white shadow-md
                     transition-all duration-300
                     hover:-translate-y-1
                     hover:bg-black
                     hover:shadow-xl"
        >
          Top Rated
        </button>

      </div>

      {/* Restaurant Cards */}
      <div
        className="
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
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