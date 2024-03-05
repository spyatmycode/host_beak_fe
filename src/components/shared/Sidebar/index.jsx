import React, { useContext, useState } from "react";
import {
  bank,
  accounting,
  dashboard,
  wallet,
  invoice,
  purchase,
  report,
  rocket,
  card,
  logout,
  settings,
  people,
  chevrondown,
  chevronright,
} from "../../../assets/shared/shared";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Sublist from "./Sublist";
import Chevron from "./Chevron";
import LinkIcon from "./LinkIcon";
import { AppContext } from "../../../providers/AppProvider";

const links = {
  purchases: {
    items: [
      {
        link: "/purchases/bills",
        item: "Bills",
      },
      {
        link: "*",
        item: "Vendors",
      },
      {
        link: "*",
        item: "Product and Services",
      },
    ],
  },

  analytics: {
    items: [
      {
        link: "/analytics/view",
        item: "View Report",
      },
      {
        link: "/",
        item: "To-Do",
      },
      {
        link: "/",
        item: "Upload Docs",
      },
      {
        link: "/",
        item: "Chat",
      },
      {
        link: "/",
        item: "Schedule",
      },
      {
        link: "/",
        item: "Message Board",
      },
      {
        link: "/",
        item: "Make Payments",
      },
      {
        link: "/",
        item: "Billing",
      },
    ],
  },
};

const Sidebar = () => {
  const purple = "#081494";

  const {show, setShow, activeLink, setActiveLink} = useContext(AppContext)

  const location = useLocation();

  const navigate = useNavigate()

  console.log(location);

  const handleClick = (e) => {
    
    if(e.target.parentNode.dataset.link === activeLink){
      setShow(!show)
    }

    setShow(true);

    setActiveLink(e.target.dataset.link);
  };

  console.log(activeLink);

  return (
    <ul
      id="sidebar"
      className="bg-[#F9F9F9] pl-16 pr-5 flex flex-col items-start gap-7 fixed left-0 top-[14%] bottom-0 font-normal py-10 overflow-y-auto cursor-pointer  w-[26%] font-gilroy 
      
      "
    >
      <li name="welcome">
        <div className="flex items-center gap-10 text-[#C4C4C4] leading-[24.26px]">
          <img src={rocket} alt="" className="w-[34px] h-[34px]" />
          <p className="text-[20px]">Welcome</p>
        </div>
      </li>
      <li name="dashboard">
        <div className="flex items-center gap-10 text-[#C4C4C4] leading-[24.26px]">
          <img src={dashboard} alt="" className="w-[34px] h-[34px]" />
          <p className="text-[20px]">Dashboard</p>
        </div>
      </li>
      <li
        className="w-full relative z-50"
        data-link={"/"}
        onClick={handleClick}
      >
        <div
          data-link={"sales"}
          className="flex items-center gap-10 text-[#C4C4C4] leading-[24.26px] w-full"
        >
          <img
            data-link={"sales"}
            src={wallet}
            alt=""
            className="w-[34px] h-[34px]"
          />
          <span
            data-link={"sales"}
            className="flex items-center justify-between w-full"
          >
            <p data-link={"sales"} className="text-[20px]">
              Sales
            </p>
            <img data-link={"sales"} src={chevronright} alt="" />
          </span>
        </div>
      </li>
      <li data-link={"purchases"} className="w-full" onClick={handleClick}>
        <div
          data-link={"purchases"}
          className="flex items-start gap-10 text-[#C4C4C4]  leading-[24.26px]"
        >
           <LinkIcon activeLink={activeLink} icon={purchase} show={show} parentLink={"purchases"}/>
          <span
            data-link={"purchases"}
            className="flex items-center justify-between w-full"
          >
            <p
              data-link={"purchases"}
              className="text-[20px] w-full transition duration-300 ease-in-out"
            >
              <main
                data-link={"purchases"}
                className="w-full flex justify-between items-center"
              >
                <p data-link={"purchases"}>Purchases</p>
                <Chevron
                  show={show}
                  activeLink={activeLink}
                  parentLink={"purchases"}
                />
              </main>
              <Sublist
                show={show}
                items={links.purchases.items}
                activeLink={activeLink}
                parentLink={"purchases"}
              />
            </p>
          </span>
        </div>
      </li>
      <li className="w-full">
        <div className="flex items-center gap-10 text-[#C4C4C4]  leading-[24.26px]">
          <img src={accounting} alt="" className="w-[34px] h-[34px]" />
          <span className="flex items-center justify-between w-full">
            <p className="text-[20px]  transition duration-300 ease-in-out">
              Accounting
            </p>
            <img src={chevronright} alt="" />
          </span>
        </div>
      </li>
      <li className="w-full">
        <div className="flex items-center gap-10 text-[#C4C4C4]  leading-[24.26px]">
          <img src={bank} alt="" className="w-[34px] h-[34px]" />
          <span className="flex items-center justify-between w-full">
            <p className="text-[20px]  transition duration-300 ease-in-out">
              Banking
            </p>
            <img src={chevronright} alt="" />
          </span>
        </div>
      </li>
      <li className="w-full">
        <div className="flex items-center gap-10 text-[#C4C4C4]  leading-[24.26px]">
          <img src={invoice} alt="" className="w-[34px] h-[34px]" />
          <span className="flex items-center justify-between w-full">
            <p className="text-[20px]  transition duration-300 ease-in-out">
              Payroll
            </p>
            <img src={chevronright} alt="" />
          </span>
        </div>
      </li>
      <li className="w-full">
        <div className="flex items-center gap-10 text-[#C4C4C4]  leading-[24.26px]">
          <img src={report} alt="" className="w-[34px] h-[34px]" />
          <span className="flex items-center justify-between w-full">
            <p className="text-[20px]  transition duration-300 ease-in-out">
              Reports
            </p>
            <img src={chevronright} alt="" />
          </span>
        </div>
      </li>
      <li data-link={"analytics"} className="w-full" onClick={handleClick}>
        <div
          data-link={"analytics"}
          className="flex items-start gap-10 text-[#C4C4C4]  leading-[24.26px]"
        >
          <LinkIcon activeLink={activeLink} show={show} icon={accounting} parentLink={"analytics"}/>
          <span
            data-link={"analytics"}
            className="flex items-center justify-between w-full"
          >
            <p
              data-link={"analytics"}
              className="text-[20px] w-full transition duration-300 ease-in-out"
            >
              <main
                data-link={"analytics"}
                className="w-full flex justify-between items-center"

              >
                <p data-link={"analytics"}>Analytics</p>
                <Chevron
                  show={show}
                  activeLink={activeLink}
                  parentLink={"analytics"}
                />
              </main>
              <Sublist
                show={show}
                items={links.analytics.items}
                activeLink={activeLink}
                parentLink={"analytics"}
              />
            </p>
          </span>
        </div>
      </li>
      <li className="w-full">
        <div className="flex items-center gap-10 text-[#C4C4C4]  leading-[24.26px]">
          <img src={settings} alt="" className="w-[34px] h-[34px]" />
          <span className="flex items-center justify-between w-full">
            <p className="text-[20px]  transition duration-300 ease-in-out">
              Settings
            </p>
          </span>
        </div>
      </li>

      <li className="my-12"  onClick={()=>navigate("/signup")}>
        <div className="flex items-center gap-10 text-[#C4C4C4] leading-[24.26px]">
          <img src={logout} alt="" className="w-[34px] h-[34px]" />
          <p className="text-[20px]">Logout</p>
        </div>
      </li>
      <li>
        <button className="flex items-center gap-5 text-white px-5 py-5 leading-[24.26px] bg-[#081494] rounded-md">
          <img
            src={card}
            alt=""
            className={"w-[34px] h-[34px] rounded-md bg-[#081494]"}
          />
          <p className="text-[25px]">Accept Payments</p>
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
