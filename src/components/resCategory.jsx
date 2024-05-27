import React, { useState } from "react";
import ItemCard from "./ItemCard.jsx";

const RestaurantCategory = ({ title, itemCards, showCards, handleOpen }) => {
  return (
    <div key={title} className="my-3">
      <div
        className="flex justify-between bg-slate-200 p-2"
        onClick={(e) => handleOpen(e, title)}
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <p>⬇</p>
      </div>
      {showCards &&
        itemCards?.map((item) => (
          <ItemCard item={item?.card?.info} key={item?.card?.info?.id} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
