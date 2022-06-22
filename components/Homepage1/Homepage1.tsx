import React from "react";

import classes from "./Homepage1.module.css";
import clsx from "clsx";

const Homepage1 = () => {
  return (
    <div className={clsx(classes.root, "")}>
      <div className={clsx(classes.container, "d-flex p-relative")}>
        <div className={clsx(classes.left, "h-100 w-30")}>&nbsp;</div>
        <div className={clsx(classes.right, "w-70 bg-dummy-grey")}>&nbsp;</div>
        <div className={clsx(classes.titleBox, "p-absolute")}>
          <div className={clsx(classes.title, "mb-5 pb-4 heading-1")}>
            Lorem ipsum dolor{" "}
          </div>
          <div className={clsx(classes.text, "mb-5 pb-5")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ultrices tristique aliquam. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </div>
          <div className={clsx(classes.btnBox, "")}>
            <button className={clsx(classes.btn, "btn btn-contained mr-5")}>
              Know more
            </button>
            <button className={clsx(classes.btn, "btn btn-outline")}>
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage1;
