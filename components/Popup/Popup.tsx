import React, { useContext } from "react";
import popupContext from "../../contexts/popupContext";
import popupCloseIcon from "public/assets/icons/popupClose.svg";
import useWindowSize from "../../utils/useWindowSize";

import classes from "./Popup.module.css";
import Image from "next/image";
const Popup = ({ children, width }: any) => {
  const { setPopupData } = useContext(popupContext);
  const screenData = useWindowSize();

  return (
    <div className={classes.popupBox}>
      <div style={{ width }} className={classes.popup}>
        {children}
        <Image
          width={80}
          height={80}
          onClick={() => {
            setPopupData((prev: any) => ({
              ...prev,
              childComponent: "",
              isVisible: false,
            }));
          }}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            marginTop: screenData.width < 600 ? "2rem" : "",
            marginRight: screenData.width < 600 ? "2rem" : "-6rem",
            cursor: "pointer",
            backgroundColor: "#000",
            borderRadius: "50%",
            width: "4rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          src={popupCloseIcon.src}
          alt="close"
        />
      </div>
    </div>
  );
};

export default Popup;
