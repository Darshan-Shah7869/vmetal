import React from "react";

import clsx from "clsx";
import classes from "./Navbar.module.css";

import logo from "public/assets/images/logo.png";
import searchIcon from "public/assets/icons/search.svg";

const Navbar = () => {
  return (
    <div className={clsx(classes.root, "bg-blue")}>
      <div
        className={clsx(
          classes.container,
          "container d-flex align-items-center justify-content-between"
        )}
      >
        <div className={clsx(classes.left, "")}>
          <img className={classes.logo} src={logo.src} alt="logo" />
        </div>
        <div className={clsx(classes.center, "d-flex align-items-center")}>
          <div className={clsx(classes.item, "")}>Home</div>
          <div className={clsx(classes.item, "")}>About Us</div>
          <div className={clsx(classes.item, "")}>Products</div>
          <div className={clsx(classes.item, "")}>Services</div>
          <div className={clsx(classes.item, "")}>Uses</div>
          <div className={clsx(classes.item, "")}>Contact Us</div>
        </div>
        <div className={clsx(classes.right, "")}>
          <img
            src={searchIcon.src}
            alt="search-icon"
            className={classes.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
