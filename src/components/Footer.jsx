import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <Link to={"https://github.com/behruzbektester"}>Behruzbek</Link>
        </p>
      </aside>
    </footer>
  );
}
