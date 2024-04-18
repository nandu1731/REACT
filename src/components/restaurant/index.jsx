import React, { useEffect, useState } from "react";
import CDN_URL from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4322123&lng=78.3963095&restaurantId=${resId}`
    );
    const data = await response.json();
    setResInfo(data);
    setIsLoading(false);
  };

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const menu =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];
  return isLoading ? (
    <div className="loadingCards">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
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
  ) : (
    <div className="resMenu">
      <h1>{info?.name}</h1>
      <img src={`${CDN_URL}${info?.cloudinaryImageId}`} />
      <p>
        {info?.costForTwoMessage}
        <p>{info?.cuisines?.join(",")}</p>
        <p>{info?.areaName}</p>
        <p>{info?.sla?.slaString}</p>
        <p>{info?.avgRating} stars</p>
      </p>

      {menu?.map((item) => (
        <li key={item?.id}>
          {item?.card?.info?.name || ""}-
          {item?.card?.info?.defaultPrice / 100 ||
            item?.card?.info?.price / 100 ||
            0}
        </li>
      ))}
    </div>
  );
};

export default RestaurantInfo;
