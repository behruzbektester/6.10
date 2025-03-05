import { useEffect, useReducer } from "react";

const getThemeFromLocal = () => {
  return localStorage.getItem("theme") || "light";
};

const themeReducer = (state) => {
  return state === "dark" ? "light" : "dark";
};

export function useTheme() {
  const [currentTheme, dispatch] = useReducer(
    themeReducer,
    getThemeFromLocal()
  );

  const changeTheme = () => {
    dispatch();
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return { currentTheme, changeTheme };
}
