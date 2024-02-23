import React, { useState } from "react";

import classes from "./SectionAboutus2.module.css";
import clsx from "clsx";
import image3 from "public/assets/images/Compress_About Us_Last image.png";

import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";

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
        <div className={clsx(classes.left, "p-relative w-100")}>
          &nbsp;
          <Image
            src={image3.src}
            alt="cover"
            fill={true}
            className={clsx(classes.left, "")}
            objectFit="cover"
          />
        </div>
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
            V Metal Solutions Inc is established and operated by a female
            entrepreneur.
          </div>
          <div
            className={clsx(
              classes.text,
              visibility && "animate__animated animate__fadeInRight"
            )}
          >
            V Metal Solutions Inc&apos;s coil processing service Centre is in
            Ahmedabad, Gujarat. We are fully geared to process and cater to your
            needs as per your specifications and requirements.
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default SectionAboutus2;
