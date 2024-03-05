import React from "react";
import { chevronright, chevrondown } from "../../../assets/shared/shared";

const Chevron = ({ parentLink, activeLink, show }) => {
    console.log(parentLink === activeLink);
  return( (parentLink === activeLink && show) ? (
    <img src={chevrondown} alt={parentLink} />
  ) : (
    <img src={chevronright} alt={parentLink} />
  ))
};

export default Chevron;
