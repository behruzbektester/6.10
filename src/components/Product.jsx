import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
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
        {/* <Link className="flex justify-end"> */}
        <FaRegHeart className="hover:fill-red-600" />
        {/* </Link> */}
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
        {/* <Link to={"/cart"}> */}
        <SlBag className="text-2xl" />
        {/* </Link> */}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_PRODUCT", payload: product });
        }}
        className="btn btn-secondary btn-sm"
      >
        Add
      </button>
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
