import React from "react";

import classes from "./ComingSoon.module.css";
import logo from "public/assets/images/logo.png";

const ComingSoon = () => {
  return (
    <div className={`${classes.root} w-100 h-100-vh bg-blue`}>
      <div
        className={`${classes.container} container d-flex align-items-center bg-blue justify-content-center`}
      >
        <div className="w-50 d-flex align-items-center justify-content-center">
          <img src={logo.src} className={`${classes.logo}`} alt="logo-img" />
        </div>
        <div className={`w-50 ${classes.right}`}>
          <div className={`${classes.title} heading-1 text-white-2`}>
            Coming Soon
          </div>
          <div className={`${classes.text} w-75 text-white-2 mt-3`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            obcaecati enim labore officia! Nisi iusto hic repudiandae beatae
            quia vel.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
