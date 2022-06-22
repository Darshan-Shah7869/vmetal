import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import React from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import clsx from "clsx";

const SummaryBox = () => {
  return (
    <div className={clsx(classes.rootCalculator, "")}>
      <div className={clsx(classes.title, "heading-3 text-black mb-5 pb-2")}>
        Summary
      </div>
      <div className={clsx(classes.card, "d-flex")}>
        <div className={clsx(classes.left, "")}>&nbsp;</div>
        <div className={clsx(classes.right, "")}>
          <div className={clsx(classes.title, "heading-3 text-blue")}>
            Lorem Ipsum{" "}
          </div>
          <div className={clsx(classes.price, "")}>₹1,260.00 </div>
          <div className={clsx(classes.btnBox, "d-flex align-items-center")}>
            <button className={clsx(classes.btn, "")}>+</button>
            <span className="text-small mr-1 ml-1">1</span>
            <button className={clsx(classes.btn, "")}>-</button>
          </div>
        </div>
      </div>
      <div className={clsx(classes.card, "d-flex")}>
        <div className={clsx(classes.left, "")}>&nbsp;</div>
        <div className={clsx(classes.right, "")}>
          <div className={clsx(classes.title, "heading-3 text-blue")}>
            Lorem Ipsum{" "}
          </div>
          <div className={clsx(classes.price, "")}>₹1,260.00 </div>
          <div className={clsx(classes.btnBox, "d-flex align-items-center")}>
            <button className={clsx(classes.btn, "")}>+</button>
            <span className="text-small mr-1 ml-1">1</span>
            <button className={clsx(classes.btn, "")}>-</button>
          </div>
        </div>
      </div>
      <div className={clsx(classes.priceBox, "")}>
        <div className={clsx(classes.priceItem, "")}>
          <div className={clsx(classes.priceLabel, "")}>Subtotal</div>
          <div className={clsx(classes.price, "")}>₹1665.00</div>
        </div>
        <div className={clsx(classes.priceItem, "")}>
          <div className={clsx(classes.priceLabel, "")}>Tax</div>
          <div className={clsx(classes.price, "")}>₹5.00</div>
        </div>
        <div className={clsx(classes.priceItem, "")}>
          <div className={clsx(classes.priceLabel, "")}>Discount</div>
          <div className={clsx(classes.price, "")}>₹0.00</div>
        </div>
      </div>
      <div
        className={clsx(
          classes.totalBox,
          "d-flex align-items-center justify-content-between"
        )}
      >
        <div className={clsx(classes.totalLabel, "text-blue bold")}>Total</div>
        <div className={clsx(classes.total, "text-blue bold")}>₹1670.00</div>
      </div>
    </div>
  );
};

export default SummaryBox;
