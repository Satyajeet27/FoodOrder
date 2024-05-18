import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const {resId} = useParams();
    console.log(resId)

    useEffect(() => {
        fetchData();
    },[]);

    const [resInfo,setResInfo] = useState(null);

    //const url1 = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=464509&catalog_qa=undefined&submitAction=ENTER";
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId;
    const fetchData = async() => {
        const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(url))
        const result = await response.json();
        console.log(result.data?.cards[2]?.groupedCard)
        setResInfo(result.data)
        
        //const data = result.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    };
    

    
    if (resInfo === null) return (
        console.log("no dta")
    ) 
       

    const {name,city}  = resInfo?.cards[0]?.card?.card?.info;
    

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    //console.log(itemCards[0]?.card?.info)
   



    
    return (

       
        <div className="Menu">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <ul> 
                {itemCards?.map((e) =>
                    <li key={e.card?.info?.id}>{e.card?.info?.name}</li>
                )}
            </ul>
        </div>
    )

};

export default RestaurantMenu;