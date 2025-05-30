import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `btn btn-ghost text-sm font-semibold font-['Poppins'] rounded-4xl px-4 py-2 transition ${
      location.pathname === path
        ? "bg-white text-[#1d262d]"
        : "text-white hover:bg-white hover:text-[#1d262d]"
    }`;

  return (
    <div className="w-full flex justify-center px-4 py-4 mt-6">
      <div className="w-full max-w-md bg-[#1d262d] rounded-full px-4 py-3">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <button className={linkClass("/submit")}>Feed</button>
          <Link to="/messagebox" className={linkClass("/messagebox")}>Message</Link>
          <Link to="/donate" className={linkClass("/donate")}>
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
