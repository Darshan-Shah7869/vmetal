import React, { useState } from "react";

import classes from "./../Homepage1/Homepage1.module.css";
import clsx from "clsx";

import VisibilitySensor from "react-visibility-sensor";
import { baseURL } from "config";
import { useRouter } from "next/router";

const ProductsHero = ({ title, subtitle, image, isLocal }: any) => {
  const [visibility, setVisibility] = useState(false);
  const router = useRouter();

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
          <div
            style={{
              backgroundImage: isLocal ? `url('${image}')` : `url(${image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={clsx(classes.right, "bg-dummy-grey w-60")}
          >
            &nbsp;
          </div>
          <div className={clsx(classes.titleBox, "p-absolute")}>
            <div
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
                    router.push("/orderDetails");
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
