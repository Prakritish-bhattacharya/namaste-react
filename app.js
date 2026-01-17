
import  React from "react"
import {createRoot} from "react-dom/client"

//  Header component
const Header = ()=>{
  return(
    <div className="header">
      <div>
        <img className="logo" src="black-pic.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
// ReataurantCard component
const ReataurantCard = ({resName,cuisine,rating})=>{
  return(
    <div className="res-card">
      <img alt ="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kcew9m5qdv7vfuurvxyx"></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>38 minutes</h4>
    </div>
  )
}
// Body component
const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ReataurantCard
          resName = "Meghana Foods"
          cuisine = "Biriyani, North Indian, Asian"
          rating = "4.4 stars"
        />
        <ReataurantCard 
          resName = "KFC"
          cuisine = "Burger, Fast Food"
          rating = "4.5 stars"
        />
        <ReataurantCard
          resName = "Food Caffee"
          cuisine = "Burger, Fast Food"
          rating = "4.1 stars"
        />
        {/* <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/>
        <ReataurantCard/> */}
      </div>
    </div>
  )
}
const AppLayout = ()=>{
  return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<AppLayout/>) 