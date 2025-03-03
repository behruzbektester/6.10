import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";

function Product() {
  const { id } = useParams();
  const { dispatch, products, incrementAmount, decrementAmount } =
    useGlobalContext();

  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  const addProduct = (product) => {
    const item = products.find((p) => p.id == product.id);

    if (item) {
      toast.warn("Already added");
      return;
    }
    toast.success("Product added");

    dispatch({
      type: "ADD_PRODUCT",
      payload: { ...product, amount: 1 },
    });
  };

  if (isPending)
    return <span className="loader absolute top-1/2 left-1/2"></span>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <>
      {data && (
        <div className="main-container flex flex-center flex-col gap-5 w-2xs items-center justify-center md:w-xl lg:w-4xl">
          <img
            className="h-64 object-contain "
            src={product.images?.[0] || "fallback-image.jpg"}
            alt={product.title || "No title"}
          />
          <h2 className="font-bold text-center text-xl md:text-xl lg:text-2xl">
            {product.title || "No title available"}
          </h2>
          <p className="text-xs text-center md:text-base lg:text-xl">
            {product.description || "No description available"}
          </p>

          <button onClick={() => addProduct(data)} className="btn btn-primary">
            Add
          </button>
          <button className="btn btn-secondary">Remove</button>

          <Link to={"/"}>
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Product;
