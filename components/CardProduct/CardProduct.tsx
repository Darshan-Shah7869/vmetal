import React from "react";

import classes from "./CardProduct.module.css";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const CardProduct = ({
  name,
  slug,
  image,
  isBrandCard = false,
  toService = false,
}: any) => {
  console.log(name);
  return (
    <div className={clsx(classes.root, "p-relative")}>
      <div className={clsx(classes.front, "p-absolute")}>
        <Image
          src={image}
          alt="card-cover"
          fill={true}
          className={clsx(classes.front, "p-absolute")}
          objectFit="cover"
        />
      </div>
      <div
        className={clsx(
          classes.titleBox,
          "d-flex flex-column align-items-center"
        )}
      >
        <div
          style={{ lineHeight: "120%" }}
          className="heading-4 text-white text-center mb-4"
        >
          {name}
        </div>
        {!isBrandCard && (
          <>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <Link
                href={`/${toService ? "services" : "products"}/${slug}`}
                passHref
              >
                <button
                  style={{ fontSize: "1rem" }}
                  className="btn btn-contained mr-1"
                >
                  Know More
                </button>
              </Link>
              <Link href="/contactus">
                <button
                  style={{ fontSize: "1rem" }}
                  className="btn btn-outline"
                >
                  Send Inquiry
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={clsx(classes.back, "")}>&nbsp;</div>
    </div>
  );
};

export default CardProduct;
