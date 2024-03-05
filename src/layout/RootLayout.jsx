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
        <div className="w-[74.5%] fixed left-[25.5%] top-[14%] bottom-0 bg-white shadow-sm rounded-tr-lg rounded-tl-lg">
          <Outlet />
        </div>
      </div>


    </>
  );
};

export default RootLayout;
