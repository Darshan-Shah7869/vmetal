import React from "react";

import classes from "./CardProduct.module.css";
import dummyImage from "public/assets/images/dummyProduct.png";
import clsx from "clsx";
import Link from "next/link";

const CardProduct = ({ name, slug, image, isBrandCard = false }: any) => {
  console.log(name);
  return (
    <div className={clsx(classes.root, "p-relative")}>
      <div
        style={{
          backgroundImage: `url('${image}')`,
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
        <div className="heading-4 text-white text-center mb-4">{name}</div>
        {!isBrandCard && (
          <>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <Link href={`/products/${slug}`} passHref>
                <button
                  style={{ fontSize: "1rem" }}
                  className="btn btn-contained mr-1"
                >
                  Know More
                </button>
              </Link>
              <button style={{ fontSize: "1rem" }} className="btn btn-outline">
                Send Inquiry
              </button>
            </div>
            <Link href={`/products/${slug}`} passHref>
              <div className="text-small text-underline text-yellow pointer align-self-end">
                More Info
              </div>
            </Link>
          </>
        )}
      </div>
      <div className={clsx(classes.back, "")}>&nbsp;</div>
    </div>
  );
};

export default CardProduct;
