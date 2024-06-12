const Resturant = (props) => {
  const { resData } = props



  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName } = resData;

  return (
    // <div className="p-4 m-4 w-[250px] text-clip overflow-hidden bg-gray-200">
    <div className="w-[250px] h-[28.5rem] rounded-t-lg bg-gray-200 relative">
      <label className="absolute bg-slate-600 text-white rounded-lg -top-2 -left-2 p-1">Open</label>
      <img className="res-logo h-2/3 object-cover w-full rounded-t-lg" alt='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
      <div className="p-2">
        <h3 className=" font-semibold">{name}</h3>
        <h4 className="text-sm line-clamp-1 text-slate-600">{cuisines.join(",")}</h4>
        <h4>{avgRating}stars</h4>
        <h4 className="text-red-600 font-semibold">{costForTwo}</h4>
        <h4 className="text-slate-600">{areaName}</h4>
      </div>
    </div>
  )

};


export const withPromotedLabel = (Resturant) => {
  return (props) => {
    return (
      <div>

        <Resturant {...props} />
      </div>

    )
  };
};


export default Resturant;