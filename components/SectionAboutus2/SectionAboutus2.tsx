import React, { useState } from "react";

import classes from "./SectionAboutus2.module.css";
import clsx from "clsx";

import VisibilitySensor from "react-visibility-sensor";

const SectionAboutus2 = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{ top: 60 }}
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div className={clsx(classes.root, "bg-white-2 d-flex root")}>
        <div className={clsx(classes.left, "")}>&nbsp;</div>
        <div
          className={clsx(
            classes.body,
            "bg-white d-flex flex-column justify-content-center"
          )}
        >
          <div
            className={clsx(
              classes.subtitle,
              "heading-3 mb-5 pb-5",
              visibility && "animate__animated animate__fadeInRight"
            )}
          >
            Our company believes in Quality with Excellency. V Metal Solutions
            Inc is the sister company of Ackroll Group.
          </div>
          <div
            className={clsx(
              classes.text,
              visibility && "animate__animated animate__fadeInRight"
            )}
          >
            V Metal Solutions Inc’s coil processing service Centre is in
            Ahmedabad, Gujarat stands on solid foundation of 30 years of
            association of mild steel. Ackroll Steel Group is fully geared to
            process 6,000 tones on its Cut-To-Length line, Corrugation line and
            Slitting line to the minimum.
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default SectionAboutus2;
