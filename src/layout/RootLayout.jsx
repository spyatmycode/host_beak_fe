import React, {useContext} from "react";
import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";


const RootLayout = () => {
  const {showSidebar, setShowSidebar} = useContext(AppContext)
  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <Sidebar />
        <div className="lg:w-[calc(100%-381px)] w-full fixed lg:left-[381px] top-[14%] bottom-0 bg-white shadow-sm rounded-tr-lg rounded-tl-lg" onClick={()=>setShowSidebar(false)}>
          <Outlet />
        </div>
      </div>


    </>
  );
};

export default RootLayout;
