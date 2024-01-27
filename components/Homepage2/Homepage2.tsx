import React, { useState } from "react";

import classes from "./Homepage2.module.css";

import clsx from "clsx";
import { useRouter } from "next/router";
import VisibilitySensor from "react-visibility-sensor";
import image from "../../public/assets/images/services.jpg";
import Image from "next/image";
const Homepage2 = () => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div className={clsx(classes.root, "root d-flex")}>
        <div className={clsx(classes.left, "w-50 p-relative")}>
          &nbsp;
          <Image
            src={image.src}
            alt="cover"
            className={clsx(classes.left, "w-50")}
            fill={true}
            objectFit="cover"
          />
        </div>
        <div
          className={clsx(
            classes.right,
            "w-50 align-self-center",
            visibility &&
              "animate__animated .animate__animated-slow animate__fadeInRight"
          )}
        >
          <div className={clsx(classes.title, "heading-3 mb-1 pb-5")}>
            V Metal Solutions Inc was established in 2020 and successfully
            caters to its customers with its products and services.
          </div>
          <div className={clsx(classes.text, "mb-5 pb-5")}>
            We contribute to Steel manufacturing and merchanting, which highly
            contribute to different functions by giving their customers mild
            steel sheets, coils, slitted coils, and corrugated sheets as per
            their requirements and specifications.
          </div>
          <div className={clsx(classes.btnBox, "")}>
            <button
              onClick={() => {
                router.push("/aboutus");
              }}
              className="btn btn-contained"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Homepage2;
