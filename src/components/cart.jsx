import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { emptyCart } from "../slices/cartSlice";
import { Router } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="w-9/12 m-auto">
      <h1 className="text-center text-xl p-5 font-bold">Cart</h1>
      <button
        type="button"
        className="p-3 text-white bg-slate-500 rounded-xl"
        onClick={cartItems?.length > 0 ? handleCart : {}}
      >
        {cartItems?.length > 0 ? "Clear cart" : "Please add items to cart"}
      </button>
      {cartItems?.length > 0 &&
        cartItems.map((item) => <ItemCard key={item?.id} item={item} />)}
    </div>
  );
};

export default Cart;
