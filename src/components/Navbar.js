import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-yellow-50 p-4 shadow-md flex justify-center space-x-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/counter"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
