import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-semibold border-2 border-green-500 rounded px-5 py-3 "
              : "text-black hover:bg-green-500 hover:text-white rounded px-5 py-3 "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listedbook"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-semibold border-2 border-green-500 rounded px-5 py-3"
              : "text-black hover:bg-green-500 hover:text-white rounded px-5 py-3 "
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pagestoread"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-semibold border-2  border-green-500 rounded px-5 py-3"
              : "text-black hover:bg-green-500 hover:text-white rounded px-5 py-3"
          }
        >
          Pages To Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn text-black btn-ghost text-2xl font-extrabold"
          >
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-success text-white">Sign In</a>
          <a className="btn btn-primary text-white ml-2">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
