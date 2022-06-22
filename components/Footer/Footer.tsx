import React from "react";

import classes from "./Footer.module.css";
import clsx from "clsx";

import call from "public/assets/icons/call.svg";
import email from "public/assets/icons/email.svg";
import facebook from "public/assets/icons/facebook.svg";
import instagram from "public/assets/icons/instagram.svg";
import twitter from "public/assets/icons/twitter.svg";
import location from "public/assets/icons/location.svg";

import logo from "public/assets/images/logo.png";

const Footer = () => {
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
              <div className={clsx(classes.data, "")}>+91 9999 9999 11</div>
            </div>
            <div className={clsx(classes.item, "d-flex align-items-center")}>
              <div className={clsx(classes.icon, "")}>
                <img
                  src={email.src}
                  alt="email"
                  className={clsx(classes.icon, "")}
                />
              </div>
              <div className={clsx(classes.data, "")}>xyz@gmail.com</div>
            </div>
            <div className={clsx(classes.item, "d-flex align-items-center")}>
              <div className={clsx(classes.icon, "")}>
                <img
                  src={location.src}
                  alt="location"
                  className={clsx(classes.icon, "")}
                />
              </div>
              <div className={clsx(classes.data, "")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </div>
          </div>
          <div className={clsx(classes.right, "d-flex")}>
            <div className={clsx(classes.left1, "")}>
              <div className={clsx(classes.page, "text-pink")}>Home</div>
              <div className={clsx(classes.page, "text-pink")}>About Us</div>
              <div className={clsx(classes.page, "text-pink")}>Services</div>
              <div className={clsx(classes.page, "text-pink")}>Uses</div>
            </div>
            <div className={clsx(classes.center1, "")}>
              <div className={clsx(classes.page, "text-pink")}>Products</div>
              <div className={clsx(classes.page, "")}>HR/HRPO</div>
              <div className={clsx(classes.page, "")}>CR/CRCA</div>
              <div className={clsx(classes.page, "")}>GP/GI</div>
              <div className={clsx(classes.page, "")}>PPGI/PPGL</div>
              <div className={clsx(classes.page, "")}>C/Z Purlin</div>
              <div className={clsx(classes.page, "")}>Accessories</div>
            </div>
            <div className={clsx(classes.right1, "text-pink")}>
              <div className={clsx(classes.page, "")}>Help</div>
              <div className={clsx(classes.page, "")}>FAQs</div>
              <div className={clsx(classes.page, "")}>Contact Us</div>
              <div className={clsx(classes.page, "")}>Get A Quote</div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            classes.bottom,
            "d-flex align-items-center justify-content-between"
          )}
        >
          <div className={clsx(classes.left, "d-flex")}>
            <div className={clsx(classes.page, "mr-5 pr-3")}>
              Terms & Conditions
            </div>
            <div className={clsx(classes.page, "")}>Privacy Policy</div>
          </div>
          <div className={clsx(classes.right, "d-flex align-items-center")}>
            <div className={clsx(classes.social, "")}>
              <img
                src={facebook.src}
                alt="facebook"
                className={clsx(classes.socialIcon, "")}
              />
            </div>
            <div className={clsx(classes.social, "")}>
              <img
                src={twitter.src}
                alt="twitter"
                className={clsx(classes.socialIcon, "")}
              />
            </div>
            <div className={clsx(classes.social, "")}>
              <img
                src={instagram.src}
                alt="instagram"
                className={clsx(classes.socialIcon, "")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
