import React from "react";
import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <Sidebar />
        <div className="lg:w-[calc(100%-381px)] w-full fixed lg:left-[381px] top-[14%] bottom-0 bg-white shadow-sm rounded-tr-lg rounded-tl-lg">
          <Outlet />
        </div>
      </div>


    </>
  );
};

export default RootLayout;
