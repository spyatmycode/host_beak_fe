import React from "react";
import { NavLink } from "react-router-dom";

const Sublist = ({ items, parentLink, activeLink , show}) => {

    

  return (
    (show && parentLink=== activeLink) && (<ul className="flex flex-col items-start gap-2 py-3">
      {items.map((items) => {
        const { item, link } = items;
        return (
          <li key={link}>
            <NavLink
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
