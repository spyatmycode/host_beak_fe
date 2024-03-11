import React, { useContext } from "react";
import Logo from "./Logo";
import { notification } from "../../../assets/shared/shared";
import { AppContext } from "../../../providers/AppProvider";

const index = () => {

  const {showSidebar, setShowSidebar} = useContext(AppContext)
  return (
    <header className="w-full bg-[#F9F9F9] flex fixed top-0 h-[14%] items-center justify-between cursor-pointer">
      <div className="flex h-full items-center pl-5 cursor-pointer border-none" onClick={()=>setShowSidebar(!showSidebar)}>
        <Logo />
      </div>

      <div className="flex items-center gap-5 pr-24 cursor-pointer font-gilroy">
        <img src={notification} alt="" className="hidden lg:flex" />
        <div className="lg:w-[50px] w-[0px] h-[30px] lg:h-[50px] rounded-full bg-[#091E46]  hidden lg:flex">
          {" "}
        </div>
        <select name="profile" id="profile_image" className="bg-transparent outline-none cursor-pointer hidden lg:flex">
          <option value="Oluwanifemi">Oluwanifemi</option>
        </select>
      </div>
    </header>
  );
};

export default index;
