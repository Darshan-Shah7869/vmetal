import React from "react";

import classes from "./../Homepage1/Homepage1.module.css";
import clsx from "clsx";

const ProductsHero = () => {
  return (
    <div className={clsx(classes.root, "root")}>
      <div className={clsx(classes.container, "d-flex p-relative")}>
        <div className={clsx(classes.left, "h-100 w-40")}>&nbsp;</div>
        <div className={clsx(classes.right, "bg-dummy-grey w-60")}>&nbsp;</div>
        <div className={clsx(classes.titleBox, "p-absolute")}>
          <div className={clsx(classes.title, "mb-5 pb-4 heading-1")}>
            Lorem ipsum dolor{" "}
          </div>
          <div className={clsx(classes.text, "mb-5 pb-5")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ultrices tristique aliquam. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
