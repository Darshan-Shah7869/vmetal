import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Popup from "components/Popup/Popup";
import popupContext from "contexts/popupContext";
import React, { useContext } from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }: any) => {
  const { popupData, setPopupData } = useContext(popupContext);
  return (
    <div>
      {popupData.isVisible && <Popup>{popupData.childComponent}</Popup>}
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
