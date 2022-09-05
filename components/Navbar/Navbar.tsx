import React, { useEffect, useState } from "react";

import clsx from "clsx";
import classes from "./Navbar.module.css";

import logo from "public/assets/images/logo.png";
import searchIcon from "public/assets/icons/search.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from "config";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [routes, setRoutes] = useState("");
  const [productData, setProductData] = useState<any>([]);
  const [serviceData, setServiceData] = useState<any>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/products?populate=*`)
      .then((res) => {
        const productsName = res.data.data.map((el: any) => {
          return el.attributes.name;
        });
        const routesName = res.data.data.map((el: any) => {
          return el.attributes.slug;
        });
        setProductData(productsName);
        setRoutes(routesName);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(`${baseURL}/api/services?populate=*`)
      .then((res) => {
        const servicesName = res.data.data.map((el: any) => {
          return el.attributes.name;
        });
        setServiceData(servicesName);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
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
                      width: "1rem",
                      height: "1rem",
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
                      width: "1rem",
                      height: "1rem",
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
                      width: "1rem",
                      height: "1rem",
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
                      width: "1rem",
                      height: "1rem",
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
                      width: "1rem",
                      height: "1rem",
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
                      width: "1rem",
                      height: "1rem",
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
            <div className={classes.inputBox}>
              <input
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                style={{ maxWidth: "20rem", fontSize: "1.4rem" }}
                className={clsx("mr-5", classes.input)}
              />
              <img
                onClick={() => {
                  if (search.length !== 0 && productData.includes(search)) {
                    router.push(
                      `/products/${routes[productData.indexOf(search)]}`
                    );
                  }

                  if (search.length !== 0 && serviceData.includes(search)) {
                    router.push(
                      `/services/${routes[productData.indexOf(search)]}`
                    );
                  }
                }}
                style={{ cursor: "pointer" }}
                src={searchIcon.src}
                alt="search-icon"
                className={classes.icon}
              />
              <svg
                onClick={() => {
                  setIsMenuOpen(true);
                }}
                className={clsx(classes.menuIcon, "ml-4")}
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.05 5H0.95C0.42533 5 0 5.42533 0 5.95V6.05C0 6.57467 0.42533 7 0.95 7H17.05C17.5747 7 18 6.57467 18 6.05V5.95C18 5.42533 17.5747 5 17.05 5Z"
                  fill="white"
                />
                <path
                  d="M17.05 10H0.95C0.42533 10 0 10.4253 0 10.95V11.05C0 11.5747 0.42533 12 0.95 12H17.05C17.5747 12 18 11.5747 18 11.05V10.95C18 10.4253 17.5747 10 17.05 10Z"
                  fill="white"
                />
                <path
                  d="M17.05 0H0.95C0.42533 0 0 0.425329 0 0.95V1.05C0 1.57467 0.42533 2 0.95 2H17.05C17.5747 2 18 1.57467 18 1.05V0.95C18 0.425329 17.5747 0 17.05 0Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={clsx(classes.menu)}>
          <svg
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={clsx(classes.closeIcon)}
            width={24}
            height={124}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.11611 6.00001L0.558105 10.558L1.44211 11.442L6.00011 6.88401L10.5581 11.442L11.4421 10.558L6.88411 6.00001L11.4421 1.44201L10.5581 0.558014L6.00011 5.11601L1.44211 0.558014L0.558105 1.44201L5.11611 6.00001Z"
              fill="white"
            />
          </svg>

          <div
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
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
                    className={classes.dot}
                    style={{
                      width: "1rem",
                      height: "1rem",
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
          <div
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
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
                    className={classes.dot}
                    style={{
                      width: "1rem",
                      height: "1rem",
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
          <div  onClick={() => {
                setIsMenuOpen(false);
              }}>
            <Link
             
              href="/products"
              passHref
            >
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
                    className={classes.dot}
                    style={{
                      width: "1rem",
                      height: "1rem",
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
          <div  onClick={() => {
              setIsMenuOpen(false);
            }}>
          <Link
           
            href="/services"
            passHref
          >
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
                  className={classes.dot}
                  style={{
                    width: "1rem",
                    height: "1rem",
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
         <div onClick={() => {
              setIsMenuOpen(false);
            }}>
         <Link
            
            href="/uses"
            passHref
          >
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
                  className={classes.dot}
                  style={{
                    width: "1rem",
                    height: "1rem",
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

         <div onClick={() => {
              setIsMenuOpen(false);
            }}>
         <Link
            
            href="/contactus"
            passHref
          >
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
                  className={classes.dot}
                  style={{
                    width: "1rem",
                    height: "1rem",
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
        </div>
      )}
    </>
  );
};

export default Navbar;
