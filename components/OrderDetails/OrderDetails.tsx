import React, { useState, useEffect, useContext } from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import axios from "axios";
import { baseURL } from "config";
import orderContext from "contexts/orderContext";

const OrderDetails = ({
  clicked,
  products,
  activeProduct,
  setActiveProduct,
  category,
  setOrderData,
  orderData,
  price,
}: any) => {
  return (
    <div
      style={{ backgroundColor: "transparent" }}
      className={clsx(classes.root, "")}
    >
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Products</div>
        <DropdownMenu
          changeHandler={(v: any) => {
            setActiveProduct(v);
            setOrderData((prev: any) => ({ ...prev, product: v }));
          }}
          label=""
          pvalue={activeProduct}
          dataArr={[...products]}
        />
      </div>
      <div className={clsx(classes.inputBox, "mb-5")}>
        <div className={clsx(classes.label, "")}>Category</div>
        <div className="mb-2 w-100">
          <DropdownMenu
            changeHandler={(v: any) => {
              setActiveProduct(v);
              setOrderData((prev: any) => ({ ...prev, category: v }));
            }}
            label=""
            pvalue={category[0]}
            dataArr={[...category]}
          />
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input
            value={orderData.length}
            onChange={(e) => {
              setOrderData((prev: any) => ({
                ...prev,
                length: e.target.value,
              }));
            }}
            type="text"
            className={classes.input}
            placeholder="Length"
          />
          <span className={classes.placeholder}>MM</span>
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input
            value={orderData.width}
            onChange={(e) => {
              setOrderData((prev: any) => ({
                ...prev,
                width: e.target.value,
              }));
            }}
            type="text"
            className={classes.input}
            placeholder="Width"
          />
          <span className={classes.placeholder}>MM</span>
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input
            value={orderData.thickness}
            onChange={(e) => {
              setOrderData((prev: any) => ({
                ...prev,
                thickness: e.target.value,
              }));
            }}
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
          <input
            value={orderData.tons}
            onChange={(e) => {
              setOrderData((prev: any) => ({
                ...prev,
                tons: e.target.value,
                sheets: (
                  (1000000000 * parseFloat(e.target.value)) /
                  (prev.width * prev.thickness * prev.length * 7.85)
                ).toFixed(2),
              }));
            }}
            type="text"
            className={classes.input}
            placeholder=""
          />
          <span className={classes.placeholder}>Tons</span>
        </div>
        <div className="p-relative w-100 d-flex align-items-center mb-2">
          <input
            value={orderData.sheets}
            onChange={(e) => {
              setOrderData((prev: any) => ({
                ...prev,
                sheets: e.target.value,
                tons: (
                  ((prev.width *
                    prev.thickness *
                    prev.length *
                    parseFloat(e.target.value)) /
                    1000000000) *
                  7.85
                ).toFixed(2),
              }));
            }}
            type="text"
            className={classes.input}
            placeholder=""
          />
          <span className={classes.placeholder}>No. of sheets</span>
        </div>
        <div
          onClick={() => {
            setOrderData((prev: any) => ({
              ...prev,
              packets: parseFloat(prev.tons) * 3,
              basicValue: parseFloat(prev.tons) * price * 1000,
              invoiceValue: parseFloat(prev.tons) * price * 1000 * 0.18,
              totalValue:
                parseFloat(prev.tons) * price * 1000 +
                parseFloat(prev.tons) * price * 1000 * 0.18,
              quantity: 1,
              addToCart: true,
            }));
          }}
          className={classes.addBox}
        >
          <div className={`${classes.addText} text-black`}>+Add</div>
          <div className={classes.lorem}>Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <button
        onClick={() => {
          clicked();
        }}
        className="btn btn-contained mt-5 w-100"
      >
        Continue Buyer’s Details
      </button>
    </div>
  );
};

export default OrderDetails;
