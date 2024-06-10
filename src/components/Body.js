import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Resturant, {withPromotedLabel} from "./Resturant";
import { Link } from "react-router-dom";




const Body = () => {
  const [resturantList, SetResturantList] = useState([]);
  const [searchText, setSearchText]  = useState("");
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  
  useEffect(() => {
    fetchData();
  },[]);

  const ResturantPromoted = withPromotedLabel(Resturant);
  
  const fetchData = async() => {
    const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //const response = await fetch('https://corsproxy.org/?' + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
    const json = await response.json();

    

    setFilteredResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    SetResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(resturantList)
  

  };


    return (
      <div className='body'>
        <div className='search m-4 p-4' >
          <input type="text"  className="border border-solid border-black" value = {searchText} onChange = {(e) => {setSearchText(e.target.value)}} ></input>
          <button className="px-4 m-4 w-[180] bg-green-500 rounded-lg" onClick={() => {
            const resturantList  = resturantList.info.name.includes(searchText)
          } }>Search</button>
        </div>
        
        


        <div className='flex flex-wrap px-4'>
          {
            resturantList?.map((resturant) => 
              <Link key={resturant?.info.id} to={"/restaurants/" + resturant?.info.id} >
                {
                  resturant?.info.isOpen? (<ResturantPromoted  resData={resturant?.info}/>) :(<Resturant  resData={resturant?.info}/>)
                }
                
              </Link>
              
              

             )
          };
          
        </div>
          
      </div>
    )
      
  };



  export default Body;
