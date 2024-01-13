import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Resturant from "./Resturant";




const Body = () => {
  const [resturantList, SetResturantList] = useState([]);
  const [searchText, setSearchText]  = useState("");
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async() => {
    //const response = await fetch('https://proxy.cors.sh/'+"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 
    const response = await fetch('https://corsproxy.org/?' + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
    const json = await response.json();

    

    setFilteredResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    SetResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const vale = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info
    console.log(resturantList);

  };


    return (
      <div className='body'>
        <div className='Search' >
          <input type="text" value = {searchText} onChange = {(e) => {setSearchText(e.target.value)}} ></input>
          <button onClick={() => {
            const resturantList  = resturantList.info.name.includes(searchText)
          } }>Search</button>
        </div>
        
        


        <div className='resturant-container'>
          {
            resturantList?.map((resturant) => 
            <link key={resturant?.info.id}>
              <Resturant resData={resturant?.info} />

            </link> ) 
          }
          
        </div>
          
      </div>
    )
      
  };



  export default Body