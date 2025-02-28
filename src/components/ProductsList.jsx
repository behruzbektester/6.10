import Product from "./Product";

function ProductsList({ products }) {
  console.log(products);
  return (
    <div className=" grid grid-rows-12 md:grid-rows-10 lg:grid-rows-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
