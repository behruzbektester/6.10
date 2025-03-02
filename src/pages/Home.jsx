import React from "react";
import useFetch from "../hooks/useFetch";
import ProductsList from "../components/ProductsList";

function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/product");
  console.log(data);
  if (isPending)
    return (
      <span className="loader flex items-center justify-center absolute top-1/2 left-1/2"></span>
    );
  if (error)
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{error}</span>
      </div>
    );
  return (
    <section className="main-container">
      <h2 className="text-4xl font-bold mb-5">Products</h2>
      {data && <ProductsList className="bg-red" products={data.products} />}
    </section>
  );
}

export default Home;
