import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { SlBag } from "react-icons/sl";

function Product({ product }) {
  const { id, title, description, price, images } = product;
  const discountedPrice = price - (price * product.discountPercentage) / 100;
  return (
    <Link
      className="flex flex-col gap-2 mx-2.5 my-2.5 border p-4 rounded-lg shadow-md hover:shadow-2xl transition main-container"
      to={`/product/${id}`}
    >
      <div className="flex justify-end">
        <Link className="flex justify-end">
          <FaRegHeart className="focus:fill-red-600" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <img className="h-64 object-contain" src={images[0]} alt={title} />
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm line-through opacity-60">{price}</p>
          <p className="text-xl font-bold">{discountedPrice.toFixed(2)}</p>
        </div>
        <Link to={"/cart"}>
          <SlBag className="text-2xl" />
        </Link>
      </div>
    </Link>
  );
}

export default Product;
