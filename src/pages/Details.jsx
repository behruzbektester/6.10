import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Details() {
  const { product } = useGlobalContext();

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex justify-center flex-col items-center">
      <h2>NAME: {product.title || "No title available"}</h2>
      <h3>RATING: {product.rating || "No rating available"}</h3>
      <p>RETURNING: {product.returnPolicy || "No return policy"}</p>
      <span>REVIEW: {product.reviews?.[0] || "No reviews"}</span>
    </section>
  );
}
