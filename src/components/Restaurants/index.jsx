import CDN_URL from "./../../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  return (
    <div className="w-50 h-80 p-3 bg-slate-100 hover:bg-slate-200 rounded-lg m-3 relative ">
      <img
        className="w-48 h-40 rounded-lg"
        src={`${CDN_URL}${resInfo?.cloudinaryImageId}`}
      />
      <div className="w-45 h-32 max-w-48 overflow-y-auto ">
        <h1 className="font-medium text-xl ">{resInfo?.name}</h1>
        <h5 className="text-lg">{resInfo?.cuisines?.join(", ")}</h5>

        <p>{resInfo?.avgRating} stars </p>
        <p>{resInfo?.sla?.deliveryTime} mins</p>

        <p>{resInfo?.areaName}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;

export const NearestRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white">Nearest</label>
        <RestaurantCard {...props}/>
      </>
    );
  };
};