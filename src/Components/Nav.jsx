import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navContainer  ">
      <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 drop-shadow-xl  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2.5 xsm:p-3 sm:p-4  ">
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="https://i.ibb.co/phpJRMB/rocket-1976107-640.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-base xsm:text-lg sm:text-xl font-semibold whitespace-nowrap dark:text-white">
              MonirImg
            </span>
          </Link>

          <div className="">
            <Link to={"/create"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded text-xs xsm:text-sm px-3 xsm:px-4 py-1.5 xsm:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 active:scale-95 "
              >
                Create
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
