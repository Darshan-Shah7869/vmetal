import React from "react";

import classes from "./CardProduct.module.css";

import clsx from "clsx";

const CardProduct = () => {
  return (
    <div className={clsx(classes.root, "p-relative")}>
      <div className={clsx(classes.front, "p-absolute")}>&nbsp;</div>
      <div className={clsx(classes.back, "")}>&nbsp;</div>
    </div>
  );
};

export default CardProduct;
