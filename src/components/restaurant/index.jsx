import React, { useEffect, useState } from "react";
import CDN_URL from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const menu =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];
  return (
    <div className="resMenu">
      <h1>{info?.name}</h1>
      <img src={`${CDN_URL}${info?.cloudinaryImageId}`} />
      <div>
        {info?.costForTwoMessage}
        <p>{info?.cuisines?.join(",")}</p>
        <p>{info?.areaName}</p>
        <p>{info?.sla?.slaString}</p>
        <p>{info?.avgRating} stars</p>
      </div>

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
