import React, { useState } from "react";
import CDN_URL from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategory from "../resCategory.jsx";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [currentOpenedCard, setCurrentOpenedCard] = useState('');

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const categoryInfo =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleOpen=(e,title)=>{
    setCurrentOpenedCard(title);
    debugger;
  }

  return (
    <div className="w-8/12 m-auto">
      <h1 className="text-xl font-bold text-center m-5">{info?.name}</h1>

      <img
        className=" mx-auto mb-5 w-40  rounded-lg"
        src={`${CDN_URL}${info?.cloudinaryImageId}`}
      />

      <div>
        {categoryInfo?.map((card) => {
          const { title, itemCards } = card?.card?.card;
          return (
            <RestaurantCategory
              title={title}
              itemCards={itemCards.slice(0, 3)}
              showCards={title==currentOpenedCard?true:false}
              handleOpen={handleOpen}
            />
          );
        })}
      </div>

    </div>
  );
};

export default RestaurantInfo;
