import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      <Nav />

      <div className="mainContainer bg-blue-100 pt-[3.7rem] xsm:pt-[4.2rem] sm:pt-[4.7rem] md:pt-[5.3rem] ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
