import React from "react";
import { chevronright, chevrondown } from "../../../assets/shared/shared";

const Chevron = ({ parentLink, activeLink, show }) => {
    // console.log(parentLink === activeLink);
  return( (parentLink === activeLink && show) ? (
    <img src={chevrondown} alt={parentLink} data-link={parentLink} />
  ) : (
    <img src={chevronright} alt={parentLink} data-link={parentLink} />
  ))
};

export default Chevron;
