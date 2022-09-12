import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import React, { useContext, useState, useEffect } from "react";

import classes from "./../SectionInquiryForm/SectionInquiryForm.module.css";
import clsx from "clsx";
import orderContext from "contexts/orderContext";
import { baseURL } from "config";

const SummaryBox = () => {
  const { orderData, setOrderData } = useContext<any>(orderContext);
  const [subTotal, setSubTotal] = useState(0);
  const [invoice, setInvoice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subt: any = 0;
    let inv: any = 0;
    let tv: any = 0;
    orderData.order.forEach((el: any) => {
      subt = el.basicValue * el.quantity + subt;
    });
    orderData.order.forEach((el: any) => {
      inv = el.invoiceValue * el.quantity + inv;
    });
    orderData.order.forEach((el: any) => {
      tv = el.totalValue * el.quantity + tv;
    });
    subt.toFixed(2);
    inv.toFixed(2);
    tv.toFixed(2);
    setSubTotal(subt);
    setInvoice(inv);
    setTotal(tv);
  }, [orderData]);

  return (
    <div className={clsx(classes.rootCalculator, "")}>
      <div className={clsx(classes.title, "heading-3 text-black mb-5 pb-2")}>
        Summary
      </div>

      {orderData.order.map((el: any, index: number) => {
        console.log(el);
        return (
          <div key={index} className={clsx(classes.card, "d-flex")}>
            <div
              style={{
                backgroundImage: `url('${el.image}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className={clsx(classes.left, "")}
            >
              &nbsp;
            </div>
            <div className={clsx(classes.right, "")}>
              <div className={clsx(classes.title, "heading-3 text-blue")}>
                {el.product}
              </div>
              <div className={clsx(classes.price, "")}>
                ₹{el.basicValue * parseFloat(el.quantity)}
              </div>
              <div
                className={clsx(classes.btnBox, "d-flex align-items-center")}
              >
                <button
                  onClick={() => {
                    const output = [...orderData.order];
                    output[index].quantity = output[index].quantity + 1;
                    setOrderData((prev: any) => ({ ...prev, order: output }));
                  }}
                  className={clsx(classes.btn, "")}
                >
                  +
                </button>
                <span className="text-small mr-1 ml-1">{el.quantity}</span>
                <button
                  onClick={() => {
                    if (el.quantity !== 1) {
                      const output = [...orderData.order];
                      output[index].quantity = output[index].quantity - 1;
                      setOrderData((prev: any) => ({ ...prev, order: output }));
                    } else {
                      const output = [...orderData.order];
                      output.splice(index, 1);
                      setOrderData((prev: any) => ({ ...prev, order: output }));
                    }
                  }}
                  className={clsx(classes.btn, "")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className={clsx(classes.priceBox, "")}>
        <div className={clsx(classes.priceItem, "")}>
          <div className={clsx(classes.priceLabel, "")}>Subtotal</div>
          <div className={clsx(classes.price, "")}>₹{subTotal.toFixed(2)}</div>
        </div>
        <div className={clsx(classes.priceItem, "")}>
          <div className={clsx(classes.priceLabel, "")}>Tax</div>
          <div className={clsx(classes.price, "")}>₹{invoice.toFixed(2)}</div>
        </div>
        {/* <div className={clsx(classes.priceItem, "")}>
          <div className={clsx(classes.priceLabel, "")}>Discount</div>
          <div className={clsx(classes.price, "")}>₹0.00</div>
        </div> */}
      </div>
      <div
        className={clsx(
          classes.totalBox,
          "d-flex align-items-center justify-content-between"
        )}
      >
        <div className={clsx(classes.totalLabel, "text-blue bold")}>Total</div>
        <div className={clsx(classes.total, "text-blue bold")}>₹{total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default SummaryBox;
