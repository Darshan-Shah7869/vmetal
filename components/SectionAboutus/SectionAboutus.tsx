import React, { useState } from "react";

import classes from "./SectionAboutus.module.css";

import clsx from "clsx";

import VisibilitySensor from "react-visibility-sensor";
import Markdown from "react-markdown";
import { useRouter } from "next/router";

const SectionAboutus = ({ title, subtitle, description, type }: any) => {
  const [visibility, setVisibility] = useState(false);
  const router = useRouter();
  return (
    <VisibilitySensor
      partialVisibility={false}
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div className={clsx(classes.root, "bg-white-2 root")}>
        <div className={clsx(classes.container, "container")}>
          <div className={clsx(classes.body, "bg-white")}>
            <div
              style={{
                animationDuration: "5s !important",
                animationDelay: "0.5s !important",
                left:
                  router.query.productID === "ms"
                    ? "-10vw"
                    : "translateY(-30vw) !important",
              }}
              className={clsx(
                router.query.productID === "ms" && classes.msTitle,
                classes.title,
                "heading-1 ",
                visibility && "animate__animated animate__fadeIn"
              )}
            >
              {title}
            </div>
            <div
              style={{
                animationDuration: "5s !important",
                animationDelay: "0.5s !important",
              }}
              className={clsx(
                classes.subtitle,
                "heading-3 mb-5 pb-5 ",
                visibility && "animate__animated animate__fadeIn"
              )}
            >
              {subtitle}
            </div>
            <div
              style={{
                animationDuration: "5s !important",
                animationDelay: "0.5s !important",
              }}
              className={clsx(
                classes.text,
                "",
                visibility && "animate__animated animate__fadeIn"
              )}
            >
              {type !== "rich" ? (
                description
              ) : (
                <Markdown>{description}</Markdown>
              )}
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default SectionAboutus;
