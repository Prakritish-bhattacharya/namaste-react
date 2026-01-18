import { CDN_URL } from "../utils/constant"

// ReataurantCard component
const RestaurantCard = (props)=>{
  const {resData} = props
  // const restaurant = resData?.info;

  const {name, cuisines, avgRating, cloudinaryImageId, sla} = resData
  return(
    <div className="res-card">
      <img alt ="res-logo" className="res-logo" src= { CDN_URL+  cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}
export default RestaurantCard