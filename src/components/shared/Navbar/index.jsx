import React from "react";
import Logo from "./Logo";
import { notification } from "../../../assets/shared/shared";

const index = () => {
  return (
    <header className="w-full bg-[#F9F9F9] flex fixed top-0 h-[14%] items-center justify-between">
      <div className="flex h-full items-center pl-5 cursor-pointer">
        <Logo />
      </div>

      <div className="flex items-center gap-5 pr-24 cursor-pointer font-gilroy">
        <img src={notification} alt="" />
        <div className="w-[50px] h-[50px] rounded-full block bg-[#091E46]">
          {" "}
        </div>
        <select name="profile" id="profile_image" className="bg-transparent outline-none cursor-pointer">
          <option value="Oluwanifemi">Oluwanifemi</option>
        </select>
      </div>
    </header>
  );
};

export default index;
