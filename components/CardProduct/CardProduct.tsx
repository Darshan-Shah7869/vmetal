import React from "react";

import classes from "./CardProduct.module.css";
import dummyImage from "public/assets/images/dummyProduct.png";
import clsx from "clsx";

const CardProduct = () => {
  return (
    <div className={clsx(classes.root, "p-relative")}>
      <div
        style={{
          backgroundImage: `url('${dummyImage.src}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={clsx(classes.front, "p-absolute")}
      >
        &nbsp;
      </div>
      <div
        className={clsx(
          classes.titleBox,
          "d-flex flex-column align-items-center"
        )}
      >
        <div className="heading-4 text-white text-center mb-4">CRCA</div>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <button
            style={{ fontSize: "1rem" }}
            className="btn btn-contained mr-1"
          >
            Know More
          </button>
          <button style={{ fontSize: "1rem" }} className="btn btn-outline">
            Send Inquiry
          </button>
        </div>
        <div className="text-small text-underline text-yellow pointer align-self-end">
          More Info
        </div>
      </div>
      <div className={clsx(classes.back, "")}>&nbsp;</div>
    </div>
  );
};

export default CardProduct;
