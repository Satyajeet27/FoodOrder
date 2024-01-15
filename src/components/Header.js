import { Logo } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
           <img src = {Logo} >
           </img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About us</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li>Cart</li>
            <button className="login" 
                  onClick = {() => btnName === "Login" 
                  ? setBtnName("Logout")
                  : setBtnName("Login")}
                >
                  {btnName}
            </button>
          </ul>
        </div> 
      </div>
    );
  };


  export default Header