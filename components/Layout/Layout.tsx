import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Popup from "components/Popup/Popup";
import ThankYouPopup from "components/ThankYouPopup/ThankYouPopup";
import UserPopup from "components/UserPopup/UserPopup";
import popupContext from "contexts/popupContext";
import React, { useContext, useEffect, useState } from "react";
import classes from "./Layout.module.css";
import whImage from "./../../public/assets/images/whatsapp copy.png";
import axios from "axios";
import { baseURL } from "config";

const Layout = ({ children }: any) => {
  const { popupData, setPopupData } = useContext(popupContext);
  const [link, setLink] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/links`)
      .then((response) => {
        setLink(response.data.data[0].attributes.WhatsappLink);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      {popupData.isVisible && <Popup>{popupData.childComponent}</Popup>}
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Footer />
      {link && (
        <div className={classes.whBox}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={whImage.src} alt="" className={classes.whImage} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Layout;
