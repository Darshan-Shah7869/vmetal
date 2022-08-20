import React from "react";

import clsx from "clsx";
import classes from "./Navbar.module.css";

import logo from "public/assets/images/logo.png";
import searchIcon from "public/assets/icons/search.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={clsx(classes.root, "bg-blue")}>
      <div
        className={clsx(
          classes.container,
          "container d-flex align-items-center justify-content-between"
        )}
      >
        <div className={clsx(classes.left, "")}>
          <Link href="/" passHref={true}>
            <img
              style={{ cursor: "pointer" }}
              className={classes.logo}
              src={logo.src}
              alt="logo"
            />
          </Link>
        </div>
        <div className={clsx(classes.center, "d-flex")}>
          <Link href="/" passHref>
            <div className="d-flex align-items-center flex-column">
              <div
                className={clsx(
                  classes.item,
                  router.pathname === "/" && "text-yellow"
                )}
              >
                Home
              </div>
              {router.pathname === "/" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "50%",
                    marginLeft: "-5rem",
                  }}
                >
                  &nbsp;
                </div>
              )}
            </div>
          </Link>
          <Link href="/aboutus" passHref>
            <div className="d-flex align-items-center flex-column">
              <div
                className={clsx(
                  classes.item,
                  router.pathname === "/aboutus" && "text-yellow"
                )}
              >
                About Us
              </div>
              {router.pathname === "/aboutus" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "50%",
                    marginLeft: "-5rem",
                  }}
                >
                  &nbsp;
                </div>
              )}
            </div>
          </Link>
          <Link href="/products" passHref>
            <div className="d-flex align-items-center flex-column">
              <div
                className={clsx(
                  classes.item,
                  router.pathname === "/products" && "text-yellow"
                )}
              >
                Products
              </div>
              {router.pathname === "/products" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "50%",
                    marginLeft: "-5rem",
                  }}
                >
                  &nbsp;
                </div>
              )}
            </div>
          </Link>
          <Link href="/services" passHref>
            <div className="d-flex align-items-center flex-column">
              <div
                className={clsx(
                  classes.item,
                  router.pathname === "/services" && "text-yellow"
                )}
              >
                Services
              </div>
              {router.pathname === "/services" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "50%",
                    marginLeft: "-5rem",
                  }}
                >
                  &nbsp;
                </div>
              )}
            </div>
          </Link>
          <Link href="/uses" passHref>
            <div className="d-flex align-items-center flex-column">
              <div
                className={clsx(
                  classes.item,
                  router.pathname === "/uses" && "text-yellow"
                )}
              >
                Uses
              </div>
              {router.pathname === "/uses" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "50%",
                    marginLeft: "-5rem",
                  }}
                >
                  &nbsp;
                </div>
              )}
            </div>
          </Link>
          <Link href="/contactus" passHref>
            <div className="d-flex align-items-center flex-column">
              <div
                className={clsx(
                  classes.item,
                  router.pathname === "/contactus" && "text-yellow"
                )}
              >
                Contact Us
              </div>
              {router.pathname === "/contactus" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "50%",
                    marginLeft: "-5rem",
                  }}
                >
                  &nbsp;
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className={clsx(classes.right, "")}>
          {/* <img
            src={searchIcon.src}
            alt="search-icon"
            className={classes.icon}
          /> */}
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Navbar;
