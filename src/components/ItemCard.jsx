import React from "react";
import CDN_URL from "./../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, emptyCart, removeItem } from "../slices/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(item));
    // dispatch(emptyCart())
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="my-2 mx-5 flex justify-between border-b-2 border-slate-300 py-2">
      <div className="w-9/12">
        <h3 className="font-medium">{item?.name}</h3>
        <p>{item?.description}</p>
        <button
          type="button"
          className="m-2 p-3 bg-black text-white rounded-lg"
          onClick={handleAddItem}
        >
          Add +
        </button>
        <button
          className="m-2 p-3 bg-black text-white rounded-lg"
          type="button"
          onClick={handleRemoveItem}
        >
          Remove -
        </button>
      </div>

      <div className="w-3/12">
        <img src={`${CDN_URL}${item?.imageId}`} className="w-40" />
      </div>
      <hr />
    </div>
  );
};

export default ItemCard;
