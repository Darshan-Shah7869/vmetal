import React from "react";

import classes from "./Homepage2.module.css";

import clsx from "clsx";

const Homepage2 = () => {
  return (
    <div className={clsx(classes.root, "root d-flex")}>
      <div className={clsx(classes.left, "w-50")}>&nbsp;</div>
      <div className={clsx(classes.right, "w-50 align-self-center")}>
        <div className={clsx(classes.title, "heading-3 mb-1 pb-5")}>
          V Metal Solutions Inc was established in 2020 and successfully caters
          to its customers with its products and services.
        </div>
        <div className={clsx(classes.text, "mb-5 pb-5")}>
        We contribute to Steel manufacturing and merchanting, which highly contribute to different functions by giving their customers mild steel sheets, coils, slitted coils, and corrugated sheets as per their requirements and specifications.
        </div>
        <div className={clsx(classes.btnBox, "")}>
          <button className="btn btn-contained">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
