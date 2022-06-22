import React from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import styles from "./SectionCalculator.module.css";

import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";

const SectionCalculator = () => {
  return (
    <div className={clsx(classes.rootCalculator, "")}>
      <div className={clsx(classes.title, "heading-3 text-black mb-5 pb-2")}>
        Calculator
      </div>
      <div className={clsx(classes.label, "")}>Price</div>
      <div className="mb-2 w-100">
        <DropdownMenu
          label=""
          pvalue="Currency"
          dataArr={["Category1", "Category2", "Category3", "Category4"]}
        />
      </div>
      <div className="p-relative w-100 d-flex align-items-center mb-2">
        <input type="text" className={classes.input} placeholder="" />
        <span className={classes.placeholder}>Per Kg</span>
      </div>
      <div className={clsx(classes.inputBox, "")}>
        <div className={clsx(classes.label, "mt-5")}>Total Basic Value</div>
        <input type="text" className={classes.input} />
      </div>
      <div className={clsx(classes.inputBox, "")}>
        <div className={clsx(classes.label, "mt-5")}>Total Invoice Value</div>
        <input type="text" className={classes.input} />
      </div>
      <div className={clsx(classes.inputBox, "")}>
        <div className={clsx(classes.label, "mt-5")}>Total Amount Payable</div>
        <input type="text" className={classes.input} />
      </div>
    </div>
  );
};

export default SectionCalculator;
