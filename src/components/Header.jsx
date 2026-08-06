import {Link} from "react-router-dom";
// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="images-removebg-preview.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header