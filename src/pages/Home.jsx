import React from "react";
import useFetch from "../hooks/useFetch";
import ProductsList from "../components/ProductsList";

function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/product");
  console.log(data);
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="main-container">
      <h2 className="text-4xl font-bold mb-5">Products</h2>
      {data && <ProductsList className="bg-red" products={data.products} />}
    </section>
  );
}

export default Home;
