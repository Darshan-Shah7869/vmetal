import clsx from "clsx";
import React from "react";

import classes from "./CardReview.module.css";
import bg1 from "public/assets/images/card1.png";
import bg2 from "public/assets/images/card2.png";
import bg3 from "public/assets/images/card3.png";
import Image from "next/image";
const CardReview = ({ type, name, role, description, image }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url('${
          type === 1 ? bg1.src : type === 2 ? bg2.src : bg3.src
        }')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className={classes.root}
    >
      <div
        className={clsx(
          type === 1
            ? classes.imgBox1
            : type === 2
            ? classes.imgBox2
            : classes.imgBox3
        )}
      >
        <Image
          width={80}
          height={80}
          className={clsx(
            type === 1 ? classes.img1 : type === 2 ? classes.img2 : classes.img3
          )}
          alt="review-profile"
          src={image}
          style={{ borderRadius: "80px" }}
          objectFit="cover"
        />
      </div>
      <div
        className={clsx(
          type === 1
            ? classes.details1
            : type === 2
            ? classes.details2
            : classes.details3,
          "mt-4"
        )}
      >
        <div className={clsx(classes.name, "bold text-white text-center")}>
          {name}
        </div>
        {/* <div
          className={clsx(
            classes.role,
            "mt-1 mb-1 text-white text-small text-center"
          )}
        >
          {role}
          &nbsp;
        </div> */}
        <div
          style={{ width: "60%" }}
          className={clsx(
            classes.designer,
            "text-small text-white text-center w-75 mx-auto"
          )}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardReview;
