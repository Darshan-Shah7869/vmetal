import React, { useState } from "react";

import classes from "./../SectionAboutus/SectionAboutus.module.css";
import clsx from "clsx";
import styles from "./SectionAboutus3.module.css";
import image3 from "public/assets/images/Compress_About Us_Last image.png";

import VisibilitySensor from "react-visibility-sensor";

const SectionAboutus3 = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div className={clsx(classes.root, "bg-white-2 root")}>
        <div className={classes.left}>
          <div
            className={clsx(
              classes.title,
              "heading-1",
              visibility && "animate__animated animate__fadeIn"
            )}
            style={{ animationDuration: "5s" }}
          >
            Lorem ipsum dolor{" "}
          </div>
        </div>

        <div className={clsx(styles.body, "bg-white")}>
          <div
            className={clsx(
              classes.subtitle,
              "heading-3 mb-5 pb-5",
              visibility && "animate__animated animate__fadeIn"
            )}
            style={{ animationDuration: "5s" }}
          >
            The steel industry is often considered an indicator of economic
            progress, because of the critical role played by steel in
            infrastructural and overall economic development.
          </div>
          <div
            className={clsx(
              classes.text,
              visibility && "animate__animated animate__fadeIn"
            )}
            style={{
              animationDuration: "5s",
              width: "80%",
              textAlign: "justify",
            }}
          >
            V Metal Solutions Inc of Steel is manufacturing and merchanting
            highly contributes to various processes by giving their customers
            mild steel sheets, coils, slitted coils and corrugated sheets as per
            their requirements and specifications. Mainly the mild steel
            products (CR/CRCA, HR/HRPO, GP/GI, PPGI/PPGL, PMP, Z/C Purlin) are
            manufactured in various forms and are delivered to various
            companies.
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default SectionAboutus3;
