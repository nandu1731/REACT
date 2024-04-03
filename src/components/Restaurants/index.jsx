import CDN_URL from "./../../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  return (
    <div className="card">
      <img src={`${CDN_URL}${resInfo?.cloudinaryImageId}`} />
      <div className="card-body">
        <h4>{resInfo?.name}</h4>
        <h5>{resInfo?.cuisines?.join(", ")}</h5>
        <div className="card-pair">
          <p>{resInfo?.avgRating} stars </p>
          <p>{resInfo?.sla?.deliveryTime} mins</p>
        </div>
        <div className="card-pair">
          <p>{resInfo?.areaName}</p>
        </div>
      </div>
    </div>
  );
};
export { RestaurantCard };
