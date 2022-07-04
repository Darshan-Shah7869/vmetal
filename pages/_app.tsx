import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";
import { useState, useEffect, useContext } from "react";
import PopupContext from "contexts/popupContext";
import "@splidejs/react-splide/css";

function MyApp({ Component, pageProps }: AppProps) {
  const [popupData, setPopupData] = useState({
    isVisible: false,
    childComponent: "",
  });

  useEffect(() => {
    if (popupData.isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [popupData.isVisible]);

  return (
    <PopupContext.Provider value={{ popupData, setPopupData }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PopupContext.Provider>
  );
}

export default MyApp;
