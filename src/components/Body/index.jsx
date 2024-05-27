import { Link } from "react-router-dom";
import RestaurantCard, { NearestRestaurantCard } from "../Restaurants";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [showEmptyMsg, setShowEmptyMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filterData = () => {
    const filteredData = restaurantData.filter(
      (res) => res?.info?.avgRating >= 4
    );
    setSearchResponse(filteredData);
  };

  const WithLabelResCard = NearestRestaurantCard(RestaurantCard);

  useEffect(() => {
    getData();
    // console.log('useEffect')
  }, []);
  // console.log('body render')

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4322123&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantData(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchResponse(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setIsLoading(false);
  };

  const getSearchResult = () => {
    const response = restaurantData.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (response?.length > 0) {
      setSearchResponse(response);
      setShowEmptyMsg(false);
    } else {
      setSearchResponse([]);
      setShowEmptyMsg(true);
    }
  };

  const { name, setUserName } = useContext(UserContext);

  return !isLoading ? (
    <div className="m-3 p-3">
      {searchResponse?.length > 0 ? (
        <>
          <div className="flex flex-wrap items-center justify-between m-3 p-1">
            <div>
              <input
                type="text"
                className="px-5 py-3 m-2 border-2 border-gray-900 rounded-md"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e?.target?.value);
                }}
              />
              <button
                type="button"
                className="px-5 m-2 py-2 font-medium bg-slate-200 rounded-md cursor-pointer"
                onClick={getSearchResult}
              >
                Search
              </button>
            </div>

            <button
              type="button"
              className="px-5 m-1 py-2 font-medium bg-slate-200 rounded-md cursor-pointer"
              onClick={filterData}
            >
              Rating 4.0+
            </button>
            <input
              className="p-2"
              value={name}
              onChange={(e) => setUserName(e?.target?.value)}
            />
          </div>

          <div className="flex flex-wrap m-3 ">
            {searchResponse?.length != 0
              ? searchResponse?.map((restaurant, index) => (
                  <Link
                    to={`/restaurant/${restaurant?.info?.id}`}
                    key={restaurant?.info?.id || index}
                  >
                    {Number(restaurant?.info?.sla?.deliveryTime) < 30 ? (
                      <WithLabelResCard resInfo={restaurant?.info} />
                    ) : (
                      <RestaurantCard resInfo={restaurant?.info} />
                    )}
                  </Link>
                ))
              : showEmptyMsg && <h1>No results found</h1>}
          </div>
        </>
      ) : (
        <p>No Restaurants found</p>
      )}
    </div>
  ) : (
    <>
      <div className="loadingCards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div className="col-3" key={index}>
            <div
              className={`bg-empty loading mb16 card`}
              style={{ width: "180px", height: "300px" }}
            >
              loading
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
