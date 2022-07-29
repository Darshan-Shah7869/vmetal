import React, { useState } from "react";

import classes from "./SectionAboutus.module.css";

import clsx from "clsx";

import VisibilitySensor from "react-visibility-sensor";

const SectionAboutus = ({ title, subtitle, description }: any) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{ top: 60 }}
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div className={clsx(classes.root, "bg-white-2 root")}>
        <div className={clsx(classes.container, "container")}>
          <div
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
            className={clsx(
              classes.title,
              "heading-1 ",
              visibility && "animate__animated animate__fadeIn"
            )}
          >
            {title}
          </div>

          <div className={clsx(classes.body, "bg-white")}>
            <div
              style={{ animationDuration: "2s", animationDelay: "0.5s" }}
              className={clsx(
                classes.subtitle,
                "heading-3 mb-5 pb-5 ",
                visibility && "animate__animated animate__fadeIn"
              )}
            >
              {subtitle}
            </div>
            <div
              style={{ animationDuration: "2s", animationDelay: "0.5s" }}
              className={clsx(
                classes.text,
                "",
                visibility && "animate__animated animate__fadeIn"
              )}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default SectionAboutus;
