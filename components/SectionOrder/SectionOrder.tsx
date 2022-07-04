import React, { useState } from "react";

import classes from "./SectionOrder.module.css";

import clsx from "clsx";
import OrderDetails from "components/OrderDetails/OrderDetails";
import SectionCalculator from "components/SectionCalculator/SectionCalculator";
import BuyerDetails from "components/BuyerDetails/BuyerDetails";
import SummaryBox from "components/SummaryBox/SummaryBox";

const SectionOrder = () => {
  const [active, setActive] = useState("OrderDetails");

  return (
    <div className={clsx(classes.root, "section")}>
      <div className={clsx(classes.container, "container d-flex")}>
        <div className={clsx(classes.left, "w-50")}>
          <div className={clsx(classes.nav, "d-flex align-items-center")}>
            <div
              className={clsx(
                classes.item,
                active === "OrderDetails" && "text-yellow",
                "heading-3 text-blue mr-5"
              )}
              onClick={() => {
                setActive("OrderDetails");
              }}
              style={{ cursor: "pointer" }}
            >
              Order Details
            </div>
            <div className={clsx(classes.item, "heading-3 text-blue")}>
              &gt;
            </div>
            <div
              className={clsx(
                classes.item,
                active === "BuyerDetails" && "text-yellow",
                "heading-3 text-blue ml-5"
              )}
              onClick={() => {
                setActive("BuyerDetails");
              }}
              style={{ cursor: "pointer" }}
            >
              Buyer Details
            </div>
          </div>
          <div className={clsx(classes.body)}>
            {/**/}
            {active === "OrderDetails" ? (
              <OrderDetails
                clicked={() => {
                  setActive("BuyerDetails");
                }}
              />
            ) : (
              <BuyerDetails />
            )}
          </div>
        </div>
        <div className={clsx(classes.right, "w-50")}>
          {/* <SectionCalculator /> */}
          {active === "OrderDetails" ? <SectionCalculator /> : <SummaryBox />}
        </div>
      </div>
    </div>
  );
};

export default SectionOrder;
