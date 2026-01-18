import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
// Body component
const Body = () =>{
  const restaurantList =
  resList?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <ReataurantCard resData = {resList}/>
        <ReataurantCard resData = {resList}/>
        <ReataurantCard resData = {resList}/> */}
         {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  )
}
export default Body