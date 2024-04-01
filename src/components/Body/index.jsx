import RestaurantCard from "../Restaurants";
import restaurantsInfo from "../../utils/jsonData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="container">
        {restaurantsInfo?.map((restaurant) => (
          <RestaurantCard key={restaurant?.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
