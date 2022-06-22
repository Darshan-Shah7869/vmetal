import React from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";

const OrderDetails = () => {
  return (
    <div
      style={{ backgroundColor: "transparent" }}
      className={clsx(classes.root, "")}
    >
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Products</div>
        <DropdownMenu
          label=""
          pvalue="Product1"
          dataArr={["Product1", "Product2", "Product3", "Product4"]}
        />
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Category</div>
        <div className="mb-2 w-100">
          <DropdownMenu
            label=""
            pvalue="Category1"
            dataArr={["Category1", "Category2", "Category3", "Category4"]}
          />
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input type="text" className={classes.input} placeholder="Length" />
          <span className={classes.placeholder}>MM</span>
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input type="text" className={classes.input} placeholder="Width" />
          <span className={classes.placeholder}>MM</span>
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input
            type="text"
            className={classes.input}
            placeholder="Thickness"
          />
          <span className={classes.placeholder}>MM</span>
        </div>
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Quantity</div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input type="text" className={classes.input} placeholder="" />
          <span className={classes.placeholder}>Tons</span>
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input type="text" className={classes.input} placeholder="Width" />
          <span className={classes.placeholder}>No. of sheets</span>
        </div>
        <div className={classes.addBox}>
          <div className={`${classes.addText} text-black`}>+Add</div>
          <div className={classes.lorem}>Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <button className="btn btn-contained mt-5 w-100">
        Continue Buyer’s Details
      </button>
    </div>
  );
};

export default OrderDetails;
