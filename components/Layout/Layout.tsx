import Navbar from "components/Navbar/Navbar";
import Popup from "components/Popup/Popup";
import popupContext from "contexts/popupContext";
import React, { useContext } from "react";
import classes from "./Layout.module.css";
import dynamic from "next/dynamic";

const WHBox = dynamic(() => import("./WHBox"));
const Footer = dynamic(() => import("components/Footer/Footer"));

const Layout = ({ children }: any) => {
  const { popupData } = useContext(popupContext);

  return (
    <div>
      {popupData.isVisible && <Popup>{popupData.childComponent}</Popup>}
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Footer />
      <WHBox />
    </div>
  );
};

export default Layout;
