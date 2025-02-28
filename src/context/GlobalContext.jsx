import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalcontextProvider({ children }) {
  return (
    <GlobalContext.Provider value={"hello"}>{children}</GlobalContext.Provider>
  );
}
