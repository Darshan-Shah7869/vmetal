import React from "react";

import classes from "./ThankYouPopup.module.css";
import clsx from "clsx";
import i1 from "public/assets/images/whatsapp.png";
import i2 from "public/assets/images/linkedIn.png";
import i3 from "public/assets/images/instagram.png";

const ThankYouPopup = () => {
  return (
    <div
      className={clsx(classes.root, "d-flex flex-column align-items-center")}
    >
      <div className={clsx(classes.icon, "")}>
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.4222 0.884521C20.3784 0.884521 0.884277 20.3786 0.884277 44.4224C0.884277 68.4662 20.3784 87.9603 44.4222 87.9603C68.466 87.9603 87.9601 68.4662 87.9601 44.4224C87.9601 20.3786 68.466 0.884521 44.4222 0.884521ZM68.7563 36.1031L41.3274 63.5319C40.6453 64.214 39.7237 64.595 38.7623 64.595C37.8008 64.595 36.8756 64.214 36.1972 63.5319L23.6691 51.0039C22.2505 49.5853 22.2505 47.2923 23.6691 45.8737C25.0877 44.4551 27.3807 44.4551 28.7993 45.8737L38.7623 55.8366L63.626 30.9728C65.0446 29.5542 67.3376 29.5542 68.7563 30.9728C70.1749 32.3915 70.1749 34.6845 68.7563 36.1031Z"
            fill="#F8BC24"
          />
        </svg>
      </div>
      <div className={clsx(classes.title, "mt-5 ")}>Thank You</div>
      <div className={clsx(classes.subtitle, "mb-4")}>for your order!</div>
      <div className={clsx(classes.text, "")}>
        Our sales team will be in touch with you after verification.{" "}
      </div>
      <div className={clsx(classes.socialBox, "")}>
        <div className={clsx(classes.socialText, "")}>Follow along</div>
        <div className={clsx(classes.socials, "d-flex align-items-center")}>
          <div className={clsx(classes.social, "")}>
            <img src={i1.src} alt="" />
          </div>
          <div className={clsx(classes.social, "ml-5 mr-5")}>
            <img src={i2.src} alt="" />
          </div>
          <div className={clsx(classes.social, "")}>
            <img src={i3.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;
