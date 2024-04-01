import { CDN_URL } from "./../../utils/constants";
const RestaurantCard = (props) => {
  const { info } = props.resInfo;
  return (
    <div className="card">
      <img src={`${CDN_URL}${info?.cloudinaryImageId}`} />
      <div className="card-body">
        <h4>{info?.name}</h4>
        <h5>{info?.cuisines.join(", ")}</h5>
        <div className="card-pair">
          <p>{info?.avgRatingString} stars </p>
          <p>{info?.sla?.slaString}</p>
        </div>
        <div className="card-pair">
          <p>{info?.sla?.lastMileTravelString}</p>
          <p>{info?.areaName}</p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
