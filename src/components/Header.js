import { Logo } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between items-center bg-yellow-400 shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={Logo} >
        </img>
      </div>
      <div className="nav-items max-sm:hidden">
        <ul className="flex gap-4">
          <li className="" >status : {status ? "online" : "offline"}</li>
          <li className=""><Link to='/'>Home</Link></li>
          <li className=""><Link to='/About'>About us</Link></li>
          <li className=""><Link to='/Contact'>Contact</Link></li>
          <li className="">Cart</li>
          <button className="px-4"
            onClick={() => btnName === "Login"
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