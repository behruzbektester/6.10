import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/product/${id}`
  );
  console.log(id);
  return (
    <div>
      <img className="h-64 object-contain" src={images[0]} alt={title} />
      <h2 className="text-base font-bold">{title}</h2>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default Product;
