import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../providers/AppProvider";

const Sublist = ({ items, parentLink, activeLink , show}) => {

  const {setActiveLink}= useContext(AppContext)

    

  return (
    (show && parentLink=== activeLink) && (<ul className="flex flex-col items-start gap-2 py-3">
      {items.map((items) => {
        const { item, link } = items;
        return (
          <li key={link}>
            <NavLink
            onClick={(e)=>{console.log("Clicked the nav", parentLink); setActiveLink(parentLink)}}
              to={link}
              className={({ isActive }) =>
                isActive ? "active_link" : ""
              }
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>)
  );
};

export default Sublist;
