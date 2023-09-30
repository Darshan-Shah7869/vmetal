import React, { useEffect, useState } from "react";

import classes from "./Footer.module.css";
import clsx from "clsx";

import call from "public/assets/icons/call.svg";
import email from "public/assets/icons/email.svg";
import facebook from "public/assets/icons/facebook.svg";
import instagram from "public/assets/icons/instagram.svg";
import twitter from "public/assets/icons/twitter.svg";
import location from "public/assets/icons/location.svg";

import logo from "public/assets/images/logo.png";
import { useRouter } from "next/router";
import { baseURL } from "config";
import axios from "axios";

const Footer = () => {
  const [data, setData] = useState<any>({
    WhatsAppLink: "",
    InstagramLink: "",
    LinkedInLink: "",
  });

  useEffect(() => {
    axios
      .get(`${baseURL}/api/links`)
      .then((response) => {
        setData(response.data.data[0].attributes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const router = useRouter();
  return (
    <div className={clsx("bg-blue", classes.root)}>
      <div className="container">
        <div className={clsx(classes.top, "d-flex justify-content-between")}>
          <div className={clsx(classes.left, "")}>
            <div className={clsx(classes.logoBox, "")}>
              <img src={logo.src} alt="logo" className={classes.logo} />
            </div>
            <div className={clsx(classes.item, "d-flex align-items-center")}>
              <img
                src={call.src}
                alt="call"
                className={clsx(classes.icon, "")}
              />
              <div className={clsx(classes.data, "")}>+91 95102 15623</div>
            </div>
            <div className={clsx(classes.item, "d-flex align-items-center")}>
              <div className={clsx(classes.icon, "")}>
                <img
                  src={email.src}
                  alt="email"
                  className={clsx(classes.icon, "")}
                />
              </div>
              <a
                href="mailto:info@vmetalsolutions.com"
                className={clsx(classes.data, classes.dataEmail, "")}
              >
                info@vmetalsolutions.com
              </a>
              <a
                style={{ paddingLeft: "20px", borderLeft: "2px solid #fff" }}
                href="mailto:sales@vmetalsolutions.com"
                className={clsx(
                  classes.data,
                  classes.dataEmail,
                  classes.dataEmail2,
                  "ml-5"
                )}
              >
                sales@vmetalsolutions.com
              </a>
            </div>
            <div className={clsx(classes.item, "d-flex align-items-center")}>
              <div className={clsx(classes.icon, "")}>
                <img
                  src={location.src}
                  alt="location"
                  className={clsx(classes.icon, "")}
                />
              </div>
              <div className={clsx(classes.data, classes.dataEmail, "")}>
                523, First Floor, Road No. 14, Kathwada G.I.D.C., Kathwada,
                Ahmedabad- 382430
              </div>
            </div>
          </div>
          <div className={clsx(classes.right, "d-flex")}>
            <div className={clsx(classes.left1, "")}>
              <div
                onClick={() => {
                  router.push("/");
                }}
                className={clsx(classes.page, "text-pink")}
              >
                Home
              </div>
              <div
                onClick={() => {
                  router.push("/aboutus");
                }}
                className={clsx(classes.page, "text-pink")}
              >
                About Us
              </div>
              <div
                onClick={() => {
                  router.push("/services");
                }}
                className={clsx(classes.page, "text-pink")}
              >
                Services
              </div>
              <div
                onClick={() => {
                  router.push("/uses");
                }}
                className={clsx(classes.page, "text-pink")}
              >
                Uses
              </div>
            </div>
            <div className={clsx(classes.center1, "")}>
              <div
                onClick={() => {
                  router.push("/products");
                }}
                className={clsx(classes.page, "text-pink")}
              >
                Products
              </div>
              <div
                onClick={() => {
                  router.push("/products/hr-hrpo");
                }}
                className={clsx(classes.page, "")}
              >
                HR/HRPO
              </div>
              <div
                onClick={() => {
                  router.push("/products/cr-crca");
                }}
                className={clsx(classes.page, "")}
              >
                CR/CRCA
              </div>
              <div
                onClick={() => {
                  router.push("/products/gi");
                }}
                className={clsx(classes.page, "")}
              >
                GI
              </div>
              <div
                onClick={() => {
                  router.push("/products/ppgi");
                }}
                className={clsx(classes.page, "")}
              >
                PPGI
              </div>
              <div
                onClick={() => {
                  router.push("/products/pmp");
                }}
                className={clsx(classes.page, "")}
              >
                PMP Plates
              </div>
              <div
                onClick={() => {
                  router.push("/products/ms");
                }}
                className={clsx(classes.page, "")}
              >
                M.S. Structure
              </div>
            </div>
            <div className={clsx(classes.right1, "text-pink")}>
              {/* <div className={clsx(classes.page, "")}>Help</div> */}
              {/* <div className={clsx(classes.page, "")}>FAQs</div> */}
              <div
                onClick={() => {
                  router.push("/contactus");
                }}
                className={clsx(classes.page, "")}
              >
                Contact Us
              </div>
              <div
                onClick={() => {
                  router.push("/order");
                }}
                className={clsx(classes.page, "")}
              >
                Order
              </div>
              {/* <div className={clsx(classes.page, "")}>Get A Quote</div> */}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            classes.bottom,
            "d-flex align-items-center justify-content-between"
          )}
        >
          {/* <div className={clsx(classes.left, "d-flex")}>
            <div className={clsx(classes.page, "mr-5 pr-3")}>
              Terms & Conditions
            </div>
            <div className={clsx(classes.page, "")}>Privacy Policy</div>
          </div> */}
          <div className={clsx(classes.right, "d-flex align-items-center")}>
            <div className={clsx(classes.social, "")}>
              <a href={data["WhatsappLink"]} target="_blank" rel="noreferrer">
                {/* <img
                  src={facebook.src}
                  alt="facebook"
                /> */}
                <svg
                  className={clsx(classes.socialIcon, "")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.97004 9.862 9.84604 9.961 9.64704C10.061 9.44904 10.011 9.27604 9.936 9.12704C9.862 8.97804 9.268 7.51504 9.02 6.92004C8.779 6.34104 8.534 6.42004 8.352 6.41004C8.178 6.40204 7.98 6.40004 7.782 6.40004C7.584 6.40004 7.262 6.47404 6.99 6.77204C6.717 7.06904 5.95 7.78804 5.95 9.25104C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7854 8.48037 21.3094 6.957 20.407L6.597 20.193L2.855 21.175L3.854 17.527L3.619 17.153C2.62914 15.5774 2.10529 13.7538 2.108 11.893C2.11 6.44304 6.544 2.00904 11.997 2.00904C14.637 2.00904 17.119 3.03904 18.985 4.90704C19.9054 5.82362 20.6349 6.91361 21.1313 8.11394C21.6277 9.31427 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785V21.785ZM20.405 3.48804C19.3032 2.37896 17.9922 1.49958 16.5481 0.900841C15.1039 0.302105 13.5553 -0.00407625 11.992 4.09775e-05C5.438 4.09775e-05 0.102 5.33504 0.1 11.892C0.096963 13.9788 0.644374 16.0294 1.687 17.837L0 24L6.304 22.346C8.04787 23.2962 10.0021 23.794 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5848 8.79014 22.9874 7.34607C22.3901 5.90201 21.5124 4.59071 20.405 3.48804"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className={clsx(classes.social, "")}>
              <a href={data["LinkedInLink"]} target="_blank" rel="noreferrer">
                {/* <img
                  src={twitter.src}
                  alt="twitter"
                  className={clsx(classes.socialIcon, "")}
                /> */}
                <svg
                  className={clsx(classes.socialIcon, "")}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.7206e-07 1.838C2.7206e-07 1.35053 0.193646 0.883032 0.538338 0.53834C0.88303 0.193648 1.35053 2.45031e-06 1.838 2.45031e-06H20.16C20.4016 -0.000392101 20.6409 0.0468654 20.8641 0.139069C21.0874 0.231273 21.2903 0.366612 21.4612 0.537339C21.6322 0.708065 21.7677 0.910826 21.8602 1.13401C21.9526 1.3572 22.0001 1.59643 22 1.838V20.16C22.0003 20.4016 21.9529 20.6409 21.8606 20.8642C21.7683 21.0875 21.6328 21.2904 21.462 21.4613C21.2912 21.6322 21.0884 21.7678 20.8651 21.8602C20.6419 21.9526 20.4026 22.0001 20.161 22H1.838C1.59655 22 1.35746 21.9524 1.1344 21.86C0.911335 21.7676 0.708671 21.6321 0.537984 21.4613C0.367297 21.2905 0.231932 21.0878 0.139623 20.8647C0.0473133 20.6416 -0.000131096 20.4025 2.7206e-07 20.161V1.838ZM8.708 8.388H11.687V9.884C12.117 9.024 13.217 8.25 14.87 8.25C18.039 8.25 18.79 9.963 18.79 13.106V18.928H15.583V13.822C15.583 12.032 15.153 11.022 14.061 11.022C12.546 11.022 11.916 12.111 11.916 13.822V18.928H8.708V8.388ZM3.208 18.791H6.416V8.25H3.208V18.79V18.791ZM6.875 4.812C6.88105 5.08667 6.83217 5.35979 6.73124 5.61532C6.63031 5.87084 6.47935 6.10364 6.28723 6.30003C6.09511 6.49643 5.8657 6.65248 5.61246 6.75901C5.35921 6.86554 5.08724 6.92042 4.8125 6.92042C4.53776 6.92042 4.26579 6.86554 4.01255 6.75901C3.7593 6.65248 3.52989 6.49643 3.33777 6.30003C3.14565 6.10364 2.99469 5.87084 2.89376 5.61532C2.79283 5.35979 2.74395 5.08667 2.75 4.812C2.76187 4.27286 2.98439 3.75979 3.36989 3.38269C3.75539 3.00558 4.27322 2.79442 4.8125 2.79442C5.35178 2.79442 5.86961 3.00558 6.25512 3.38269C6.64062 3.75979 6.86313 4.27286 6.875 4.812V4.812Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className={clsx(classes.social, "")}>
              <a href={data["InstagramLink"]} target="_blank" rel="noreferrer">
                <img
                  src={instagram.src}
                  alt="instagram"
                  className={clsx(classes.socialIcon, "")}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
