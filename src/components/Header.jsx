import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import MenuLinks from "./MenuLinks";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const data = useGlobalContext();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  console.log(data);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <header className="bg-base-200 mb-5">
      <nav className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-primary hidden md:flex" to={"/"}>
            <span className="text-xl md:text-2xl">Ituzum</span>
          </Link>

          <button
            className="btn btn-primary flex md:hidden"
            popovertarget="popover-1"
            style={{ anchorName: "--anchor-1" }}
          >
            Ituzum
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={{ positionAnchor: "--anchor-1" }}
          >
            <MenuLinks />
          </ul>
        </div>
        <div className="navbar-center">
          <ul className="menu lg:menu-horizontal bg-base-200 rounded-box hidden md:flex">
            <MenuLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-1.5">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-2xl" />
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-none dark:bg-gray-800 text-black dark:text-white"
          >
            <FaMoon />
          </button>
        </div>
      </nav>
    </header>
  );
}
