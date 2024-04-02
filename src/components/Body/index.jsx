import RestaurantCard from "../Restaurants";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const filterData = () => {
    const filteredData = restaurantData.filter(
      (res) => res?.info?.avgRating >= 4
    );
    setRestaurantData(filteredData);
  };

  useEffect(() => {
    console.log("called");
    getData();
  }, []);

  getData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantData(
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <button type="button" onClick={filterData}>
        Rating 4.0+
      </button>
      <div className="container">
        {restaurantData?.length != 0
          ? restaurantData?.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant?.info?.id || index}
                resInfo={restaurant?.info}
              />
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div className="fake-card"></div>
            ))}
      </div>
    </div>
  );
};

export default Body;
