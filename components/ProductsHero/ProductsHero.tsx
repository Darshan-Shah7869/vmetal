import React, { useState } from "react";

import classes from "./../Homepage1/Homepage1.module.css";
import clsx from "clsx";

import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import useWindowSize from "utils/useWindowSize";
import Image from "next/image";

const ProductsHero = ({ title, subtitle, image, isLocal }: any) => {
  const [visibility, setVisibility] = useState(false);
  const router = useRouter();
  const { width, height } = useWindowSize();

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div className={clsx(classes.root, "root")}>
        <div className={clsx(classes.container, "d-flex p-relative")}>
          <div className={clsx(classes.left, "h-100 w-40")}>&nbsp;</div>
          <div className={clsx(classes.right, "bg-dummy-grey w-60 p-relative")}>
            &nbsp;
            <Image
              loading="eager"
              src={image}
              alt="cover"
              fill={true}
              className={clsx(classes.right, "bg-dummy-grey w-60")}
              objectFit="cover"
            />
          </div>
          <div className={clsx(classes.titleBox, "p-absolute")}>
            <div
              style={{
                // @ts-ignore
                maxWidth: router.pathname === "/uses" && width > 600 && "100%",
              }}
              className={clsx(
                classes.title,
                "mb-5 pb-4 heading-1 ",
                visibility &&
                  "animate__animated .animate__animated-slow animate__fadeInLeft"
              )}
            >
              {title}
            </div>
            <div
              style={{
                // @ts-ignore
                maxWidth: router.pathname === "/uses" && width > 600 && "70%",
              }}
              className={clsx(
                classes.text,
                "mb-5 pb-5 ",
                visibility &&
                  "animate__animated .animate__animated-slow animate__fadeInLeft"
              )}
            >
              {subtitle}
            </div>
            <div className={clsx(classes.btnBox, "")}>
              {router.pathname.includes("/products/") && (
                <button
                  onClick={() => {
                    router.push("/order");
                  }}
                  className={clsx(classes.btn, "btn btn-contained mr-5")}
                >
                  Order now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default ProductsHero;
