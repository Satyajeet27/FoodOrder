import { Logo } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="flex justify-between bg-yellow-400 shadow-lg">
        <div className="logo-container">
           <img className="w-56" src = {Logo} >
           </img>
        </div>
        <div className="nav-items">
          <ul className="flex justify-between px-4 py-4 m-4">
            <li className="px-4" >status : {status?"online":"offline"}</li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/About'>About us</Link></li>
            <li className="px-4"><Link to='/Contact'>Contact</Link></li>
            <li className="px-4">Cart</li>
            <button className="px-4"
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