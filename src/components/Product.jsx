import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { SlBag } from "react-icons/sl";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  const { dispatch } = useGlobalContext();
  return (
    <Link
      className="flex flex-col gap-2 mx-2.5 my-2.5 border p-4 rounded-lg shadow-md hover:shadow-2xl transition main-container"
      to={`/product/${product.id}`}
    >
      <div className="flex justify-end">
        <button
          className="w-5"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FaHeart className="hover:fill-red-500 hover:stroke-0 cursor-pointer fill-white stroke-black stroke-30 w-full" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <img
          className="h-64 object-contain"
          src={product.images[0]}
          alt={product.title}
        />
        <h2 className="text-base font-bold">{product.title}</h2>
        <p className="text-xs">{product.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm line-through opacity-60">{product.price}</p>
          <p className="text-xl font-bold">{discountedPrice.toFixed(2)}</p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "ADD_PRODUCT", payload: product });
          }}
          className="btn border-0 bg-inherit"
        >
          <SlBag className="text-2xl" />
        </button>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "DELETE_PRODUCT", payload: product.id });
        }}
        className="btn btn-secondary btn-sm"
      >
        Delete
      </button>
    </Link>
  );
}

export default Product;
