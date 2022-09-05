import React, { useContext, useEffect, useState } from "react";

import classes from "./SectionOrder.module.css";

import clsx from "clsx";
import OrderDetails from "components/OrderDetails/OrderDetails";
import SectionCalculator from "components/SectionCalculator/SectionCalculator";
import BuyerDetails from "components/BuyerDetails/BuyerDetails";
import SummaryBox from "components/SummaryBox/SummaryBox";
import axios from "axios";
import { baseURL } from "config";
import orderContext from "contexts/orderContext";
import useWindowSize from "utils/useWindowSize";

const SectionOrder = () => {
  const { width } = useWindowSize();
  const [active, setActive] = useState("OrderDetails");
  const { orderData, setOrderData } = useContext<any>(orderContext);
  const [productData, setProductData] = useState<any>([]);

  const [activeProduct, setActiveProduct] = useState<any>(
    productData[0]?.attributes?.name
  );
  const [category, setCategory] = useState([]);
  const [orderDataLocal, setOrderDataLocal] = useState<any>({
    product: "",
    category: "",
    length: "",
    width: "",
    thickness: "",
    quantity: "",
    tons: "",
    sheets: "",
    basicValue: "",
    invoiceValue: "",
    totalValue: "",
    packets: "",
    image: "",
    numOfCoils: "",
  });

  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/products?populate=*`)
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setCategory([]);
    axios
      .get(
        `${baseURL}/api/products?populate=*&filters[name][$eq]=${activeProduct}`
      )
      .then((res) => {
        const arr = res.data.data[0].attributes.categories.data.map(
          (el: any) => {
            return el.attributes.name;
          }
        );
        setCategory(arr);
        setPrice(res.data.data[0].attributes.price);
        setOrderDataLocal((prev: any) => ({
          ...prev,
          image: res.data.data[0].attributes.coverImage.data.attributes.url,
        }));
      })
      .catch((err) => console.log(err));
  }, [activeProduct]);

  useEffect(() => {
    if (orderDataLocal.addToCart) {
      setOrderData((prev: any) => ({
        ...prev,
        order: [...prev.order, orderDataLocal],
      }));
      setOrderDataLocal({
        product: "",
        category: "",
        length: "",
        width: "",
        thickness: "",
        quantity: "",
        tons: "",
        sheets: "",
        basicValue: "",
        invoiceValue: "",
        totalValue: "",
        packets: "",
        image: "",
        numOfCoils: "",
      });
      console.log(orderData);
    }
  }, [orderDataLocal]);

  return (
    <div className={clsx(classes.root, "section")}>
      <div
        className={clsx(
          classes.container,
          classes.orderBodyContainer,
          "container d-flex"
        )}
      >
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
          <div
            style={{ position: "sticky", left: 0, top: "2rem" }}
            className={clsx(classes.body)}
          >
            {/**/}
            {active === "OrderDetails" ? (
              <OrderDetails
                price={price}
                orderData={orderDataLocal}
                setOrderData={setOrderDataLocal}
                activeProduct={activeProduct}
                setActiveProduct={setActiveProduct}
                category={category}
                products={productData.map((el: any) => el.attributes.name)}
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
          {active === "OrderDetails" ? (
            <>
              <SectionCalculator price={price} orderData={orderDataLocal} />
              <div style={{ marginTop: "-8rem" }}>
                <SummaryBox />
              </div>
            </>
          ) : (
            <SummaryBox />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionOrder;
