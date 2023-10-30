import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <ul className="text-sm lg:flex gap-4 mx-auto">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/build-form"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Form Build
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Dashboard
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="lg:w-[1280px] mx-auto my-3 px-3">
      <nav className="flex items-center justify-between flex-wrap ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <span className="hover:cursor-pointer ml-2 text-2xl font-bold my-font tracking-wide text-gray-800">
              Form Elysium
            </span>
          </Link>
        </div>
        {/* humburger  */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        {/* nav links  */}
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ps-3 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navLinks}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
