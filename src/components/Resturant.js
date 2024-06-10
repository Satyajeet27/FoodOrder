const Resturant = (props) => {
    const {resData} = props
    
    

    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,areaName} = resData;
  
    return (
      <div className="p-4 m-4 w-[250px] text-clip overflow-hidden bg-gray-300">
        <img className="res-logo" alt='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
      </div>
    )
      
  };


  export const withPromotedLabel  = (Resturant) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white rounded-lg">Open</label>
          <Resturant {...props} />
        </div>
        
      )
    };    
  };


  export default Resturant;