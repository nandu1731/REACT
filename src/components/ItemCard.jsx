import React from "react";
import CDN_URL from "./../utils/constants";

const ItemCard = ({ item }) => {
  return (
    <div className="my-2 mx-5 flex justify-between border-b-2 border-slate-300 py-2">
      <div className="w-9/12">
        <h3 className="font-medium">{item?.name}</h3>
        <p>{item?.description}</p>
      </div>

      <div className="w-3/12">
        <img src={`${CDN_URL}${item?.imageId}`} className="w-40" />
      </div>
      <hr />
    </div>
  );
};

export default ItemCard;
