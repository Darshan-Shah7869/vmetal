import React, { useEffect, useState } from "react";

import classes from "./Homepage1.module.css";
import clsx from "clsx";

import img1 from "public/assets/images/Home1.jpg";
import img2 from "public/assets/images/cuttingEdge.jpg";
import img3 from "public/assets/images/onTime.jpg";
import { useRouter } from "next/router";
import Image from "next/image";

const Homepage1 = () => {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev: any) => prev + 1);
    }, 10000);
    return () => {
      return clearInterval(interval);
    };
  }, []);

  return (
    <div className={clsx(classes.root, "bg")}>
      <div className={clsx(classes.container, "d-flex p-relative")}>
        <div
          style={{
            width: "120vw",
            marginLeft: "100vw",
            animationName: "slideInOut",
            animationDuration: "10s",
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            zIndex: 200,
          }}
          className={clsx(classes.left, "h-100 w-50")}
        >
          &nbsp;
        </div>
        <div className={clsx(classes.right, "w-60 bg-dummy-grey p-relative")}>
          &nbsp;
          <Image
            loading="eager"
            // unoptimized={true}
            src={
              activeSlide % 2 === 0
                ? img2.src
                : activeSlide % 3 === 0
                ? img3.src
                : img1.src
            }
            fill={true}
            alt="slider-cover"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            animationDelay: "1s",
            animationName: "slideInOut2",
            animationDuration: "10s",
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            opacity: "0",
          }}
          className={clsx(classes.titleBox, "p-absolute")}
        >
          <div className={clsx(classes.title, "mb-5 pb-4 heading-1")}>
            {activeSlide % 2 === 0
              ? "CUTTING-EDGE TECHNOLOGY"
              : activeSlide % 3 === 0
              ? "DELIVERY ON-TIME"
              : "RELIABILITY: GUARANTEED"}
          </div>
          <div className={clsx(classes.text, "mb-5 pb-5")}>
            {activeSlide % 2 === 0
              ? "Cutting-edge technology at V Metal Solutions Inc forms the basis of all its services. Whether cutting to length, profiling, corrugation, slitting, or roll development at V Metal Solutions Inc, we ensure the highest standards are adhered to at every level."
              : activeSlide % 3 === 0
              ? "We deliver to our customers as per the commitment which helps them to grow with us."
              : "We respond to any production need with great speed. At V Metal Solutions Inc, just-in-time delivery is integral to our philosophy."}
          </div>
          <div className={clsx(classes.btnBox, "")}>
            <button
              onClick={() => {
                router.push("/aboutus");
              }}
              className={clsx(classes.btn, "btn btn-contained mr-5")}
            >
              Know more
            </button>
            <button
              onClick={() => {
                router.push("/contactus");
              }}
              className={clsx(classes.btn, "btn btn-outline")}
            >
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage1;
