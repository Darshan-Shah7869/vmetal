import React from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import styles from "./SectionCalculator.module.css";

import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";

const SectionCalculator = ({ price, orderData }: any) => {
  return (
    <div className={clsx(classes.rootCalculator, "")}>
      <div className={clsx(classes.title, "heading-3 text-black mb-5 pb-2")}>
        Calculator
      </div>
      <div className={clsx(classes.label, "")}>Price</div>
      {/* <div className="mb-2 w-100">
        <DropdownMenu
          label=""
          pvalue="Currency"
          dataArr={["Category1", "Category2", "Category3", "Category4"]}
        />
      </div> */}
      <div className="p-relative w-100 d-flex align-items-center mb-2">
        <input
          readOnly
          value={`₹${price}`}
          type="text"
          className={classes.input}
          placeholder=""
        />
        <span className={classes.placeholder}>Per Kg</span>
      </div>
      <div className={clsx(classes.inputBox, "")}>
        <div className={clsx(classes.label, "mt-5")}>Total Basic Value </div>
        <input
          readOnly
          value={`₹${(orderData.tons * price * 1000).toFixed(2)}`}
          type="text"
          className={classes.input}
        />
        {/* <span className={classes.placeholder}>₹</span> */}
      </div>
      <div className={clsx(classes.inputBox, "")}>
        <div className={clsx(classes.label, "mt-5")}>Total Invoice Value </div>
        <input
          readOnly
          value={`₹${(orderData.tons * price * 1000 * 0.18).toFixed(2)}`}
          type="text"
          className={classes.input}
        />
        {/* <span className={classes.placeholder}>₹</span> */}
      </div>
      <div className={clsx(classes.inputBox, "")}>
        <div className={clsx(classes.label, "mt-5")}>Total Amount Payable </div>
        <input
          readOnly
          value={`₹${(
            orderData.tons * price * 1000 +
            orderData.tons * price * 1000 * 0.18
          ).toFixed(2)}`}
          type="text"
          className={classes.input}
        />
        {/* <span className={classes.placeholder}>₹</span> */}
      </div>
    </div>
  );
};

export default SectionCalculator;
