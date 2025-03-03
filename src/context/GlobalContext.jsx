import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext();

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || {
      products: [],
      totalPrice: 0,
      totalAmount: 0,
    }
  );
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, payload] };
    case "INCREMENT_AMOUNT":
      return {
        ...payload,
      };
    case "DECREMENT_AMOUNT":
      return {
        ...payload,
      };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        ...payload,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id != payload),
      };
  }
};

export function GlobalcontextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState());

  const incrementAmount = (id) => {
    const updatedProducts = state.products.map((prod) =>
      prod.id === id ? { ...prod, amount: prod.amount + 1 } : prod
    );

    dispatch({
      type: "INCREMENT_AMOUNT",
      payload: { ...state, products: updatedProducts },
    });
    calculateTotal();
  };

  const decrementAmount = (id) => {
    const updatedProducts = state.products.map((prod) =>
      prod.id === id ? { ...prod, amount: Math.max(0, prod.amount - 1) } : prod
    );

    dispatch({
      type: "DECREMENT_AMOUNT",
      payload: { ...state, products: updatedProducts },
    });
    calculateTotal();
  };

  const calculateTotal = () => {
    let allPrice = 0;
    let allAmount = 0;
    state.products.forEach((p) => {
      allPrice += p.amount * p.price;
      allAmount += p.amount;
    });

    dispatch({
      type: "CALCULATE_TOTAL",
      payload: {
        totalPrice: allPrice,
        totalAmount: allAmount,
      },
    });
  };

  useEffect(() => {
    calculateTotal();
    localStorage.setItem("products", JSON.stringify(state));
  }, [state.products]);

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, incrementAmount, decrementAmount }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
