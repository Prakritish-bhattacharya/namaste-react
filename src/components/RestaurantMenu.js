import Shimmer from "./Shimmer"
import { useState , useEffect } from "react"

const RestaurantMenu = ()=>{
    // get the restaurant details from API and store it in state variable then display it on the UI
    const [resInfo , setResInfo] = useState(null)

    // Fetch the menu data based on the restaurant id
    useEffect(()=>{
        //fetch menu data
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{

        //API call to fetch menu data
        const data = await fetch(
            "https://namastedev.com/api/v1/listRestaurantMenu/123456"
        )
        // convert data to JSON
        const json = await data.json()
        console.log(json)
        // set the data to resInfo state variable
        setResInfo(json.data)
    }

    // Destructure the resInfo object to get the required details 🔹 Restaurant Info
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
    // 🔹 Menu Categories
    const menuCategories =
            resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards?.filter(
                (c) =>
                    c?.card?.card?.["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            ) || [];
    
    // use ternary operator to show Shimmer UI
    return (resInfo === null) ? (
    <Shimmer/>
    ) : (
        <div className="menu">
            {/* Restaurant Details */}
            <h1>{restaurantInfo?.name}</h1>
            <p>
                {restaurantInfo?.cuisines?.join(", ")} • ⭐{" "}
                {restaurantInfo?.avgRating}
            </p>
            <p>{restaurantInfo?.costForTwoMessage}</p>
            {/* Menu */}
            <h2>Menu</h2>
            {menuCategories.map((category) => (
                <div key={category?.card?.card?.title}>
                    <h3>{category?.card?.card?.title}</h3>
                    <ul>
                        {category?.card?.card?.itemCards?.map((item) => (
                            <li key={item?.card?.info?.id}>
                                <strong>{item?.card?.info?.name}</strong> - ₹
                                {(item?.card?.info?.price ||
                                    item?.card?.info?.defaultPrice) / 100}
                            </li>
                               ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default RestaurantMenu