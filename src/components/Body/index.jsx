import { Link } from "react-router-dom";
import { RestaurantCard } from "../Restaurants";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [showEmptyMsg, setShowEmptyMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [page, setPage] = useState(0);
  // const [hasMore, setHasMore] = useState(true);

  const filterData = () => {
    const filteredData = restaurantData.filter(
      (res) => res?.info?.avgRating >= 4
    );
    setRestaurantData(filteredData);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   fetchMoreData();
  // }, [page]);

  // const fetchMoreData = async () => {
  //   const data = {
  //     lat: "17.37240",
  //     lng: "78.43780",
  //     nextOffset: "COVCELQ4KICIv5al+4HrPzCnEzgC",
  //     widgetOffset: {
  //       NewListingView_category_bar_chicletranking_TwoRows: "",
  //       NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //       Restaurant_Group_WebView_SEO_PB_Theme: "",
  //       collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "25",
  //       inlineFacetFilter: "",
  //       restaurantCountWidget: "",
  //     },
  //     filters: {},
  //     seoParams: {
  //       seoUrl: "https://www.swiggy.com/",
  //       pageType: "FOOD_HOMEPAGE",
  //       apiName: "FoodHomePage",
  //     },
  //     page_type: "DESKTOP_WEB_LISTING",
  //     _csrf: "2z15rEgXBSn6-8Jji5TE-qRR7vGsJc1_NI-ANrYo",
  //   };
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "post",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const updatedData = await response.json();
  //   const newRestaurants =
  //     updatedData.data?.data?.cards?.[1]?.card?.card?.gridElements
  //       ?.infoWithStyle?.restaurants;
  //   if (newRestaurants.length === 0) {
  //     setHasMore(false);
  //   } else {
  //     setHasMore(true);
  //   }
  //   console.log(updatedData);
  // };

  // const handleScroll = () => {
  //   const windowHeight =
  //     "innerHeight" in window
  //       ? window?.innerHeight
  //       : document.documentElement?.offsetHeight;
  //   const body = document?.body;
  //   const documentHeight = Math.max(
  //     body?.scrollHeight,
  //     body?.offsetHeight,
  //     windowHeight
  //   );
  //   const windowBottom = windowHeight + window?.scrollY;

  //   if (windowBottom >= documentHeight && hasMore) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantData(
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchResponse(
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
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

  return !isLoading ? (
    <div className="body">
      {searchResponse?.length > 0 ? (
        <>
          <div className="search">
            <input
              type="text"
              className="inputVal"
              value={searchText}
              onChange={(e) => {
                setSearchText(e?.target?.value);
              }}
            />
            <button
              type="button"
              className="searchBtn"
              onClick={getSearchResult}
            >
              Search
            </button>
          </div>
          <button type="button" style={{ margin: "16px" }} onClick={filterData}>
            Rating 4.0+
          </button>
          <div className="container">
            {searchResponse?.length != 0
              ? searchResponse?.map((restaurant, index) => (
                  <Link
                    to={`/restaurant/${restaurant?.info?.id}`}
                    key={restaurant?.info?.id || index}
                  >
                    <RestaurantCard resInfo={restaurant?.info} />
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
        {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
          <div className="col-3">
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
