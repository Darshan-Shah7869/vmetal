import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";
import { useState, useEffect, useContext } from "react";
import PopupContext from "contexts/popupContext";
import OrderContext from "contexts/orderContext";
import "animate.css";
import "@splidejs/react-splide/css";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../styles/globals.css";
import UserPopup from "components/UserPopup/UserPopup";

function MyApp({ Component, pageProps }: AppProps) {
  const [popupData, setPopupData] = useState({
    isVisible: false,
    childComponent: "",
  });

  const [orderData, setOrderData] = useState<any>({
    order: [],
    fullName: "",
    contactNumber: "",
    email: "",
    companyName: "",
    line1: "",
    line2: "",
    pinCode: "",
    state: "",
    country: "",
    GSTNumber: "",
    total: 0,
    subtota: 0,
    tax: 0,
  });

  useEffect(() => {
    if (popupData.isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [popupData.isVisible]);

  useEffect(() => {
    setTimeout(() => {
      setPopupData((prev: any) => ({
        isVisible: true,
        childComponent: <UserPopup />,
      }));
    }, 10000);
  }, []);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      <PopupContext.Provider value={{ popupData, setPopupData }}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PopupContext.Provider>
    </OrderContext.Provider>
  );
}

export default MyApp;
