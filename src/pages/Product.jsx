import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  console.log(product);

  return (
    <div className="main-container flex flex-center flex-col w-3xl items-center justify-center">
      <img
        className="h-64 object-contain"
        src={product.images?.[0] || "fallback-image.jpg"}
        alt={product.title || "No title"}
      />
      <h2 className="font-bold text-center text-2xl">
        {product.title || "No title available"}
      </h2>
      <p className="text-xl text-center">
        {product.description || "No description available"}
      </p>
      <Link to={"/"}>
        <button className="btn btn-secondary">Back</button>
      </Link>
    </div>
  );
}

export default Product;
