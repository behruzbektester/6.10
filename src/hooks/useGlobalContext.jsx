import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    return "useGlobalContext() must be in GlobalContextProvider()";
  }

  return context;
}
