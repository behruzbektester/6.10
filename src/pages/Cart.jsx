import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { dispatch, products, decrementAmount, incrementAmount, totalPrice } =
    useGlobalContext();

  if (products.length == 0) {
    return (
      <section className="flex flex-col gap-4 items-center">
        <h1 className="text-center text-3xl">Empty</h1>
        <Link className="btn btn-secondary" to={"/"}>
          Buy products
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price </th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              console.log(product);
              return (
                <tr key={product.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          Brand: {product.brand}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$ {product.price}</td>
                  <td>
                    <div className="flex gap-4 items-center">
                      <button
                        onClick={() => incrementAmount(product.id)}
                        className="btn btn-ghost"
                      >
                        +
                      </button>
                      <span> {product.amount}</span>
                      <button
                        onClick={() => {
                          if (product.amount == 1) {
                            dispatch({
                              type: "DELETE_PRODUCT",
                              payload: product.id,
                            });
                            return;
                          }
                          decrementAmount(product.id);
                        }}
                        className="btn btn-ghost"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <th className="flex gap-5">
                    <button className="btn btn-secondary btn-xs">
                      <Link to={"/details"}>Details</Link>
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "DELETE_PRODUCT",
                          payload: product.id,
                        })
                      }
                      className="btn btn-secondary btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Total price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </section>
  );
}
