import React from "react";

import classes from "./SectionProducts.module.css";
import clsx from "clsx";
import CardProduct from "components/CardProduct/CardProduct";

const SectionProducts = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="heading-2 pb-5 mb-5 text-center">Our Products</div>
        <div className={clsx(classes.body, "")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
