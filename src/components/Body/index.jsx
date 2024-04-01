import RestaurantCard from "../Restaurants";
import restaurantsInfo from "../../utils/jsonData";
import { useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(restaurantsInfo);

  const filterData = () => {
    setRestaurantData(restaurantData.filter((res) => res?.info?.avgRating > 4));
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <button type="button" onClick={filterData}>
        Rating 4.0+
      </button>
      <div className="container">
        {restaurantData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
