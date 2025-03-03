import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import MenuLinks from "./MenuLinks";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { FaSun } from "react-icons/fa";

export default function Header() {
  const { totalAmount, data } = useGlobalContext();
  const { changeTheme, currentTheme } = useTheme();

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
        <div className="navbar-end flex gap-3.5">
          <div className="indicator">
            <span className="indicator-item badge badge-xs badge-primary text-sm">
              {totalAmount}
            </span>
            <Link to={"/cart"}>
              <FaShoppingCart className="text-2xl" />
            </Link>
          </div>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={changeTheme}
              defaultChecked={currentTheme == "dark"}
            />
            <FaSun className="swap-on h-5 w-5 fill-current" />

            <FaMoon className="swap-off h-5 w-5 fill-current" />
          </label>
        </div>
      </nav>
    </header>
  );
}
