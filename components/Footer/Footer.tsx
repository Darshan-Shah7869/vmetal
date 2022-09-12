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
              <div className={clsx(classes.data, classes.dataEmail, "")}>
                vinal@vmetalsolutions.com
              </div>
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
                Plot No. 523, Road No.14, Kathwada GIDC, Odhav Industrial
                Estate, Odhav, Ahmedabad, Gujarat 382415, India
              </div>
            </div>
          </div>
          <div className={clsx(classes.right, "d-flex")}>
            <div className={clsx(classes.left1, "")}>
              <div onClick={() => { router.push('/') }} className={clsx(classes.page, "text-pink")}>Home</div>
              <div onClick={() => { router.push('/aboutus') }} className={clsx(classes.page, "text-pink")}>About Us</div>
              <div onClick={() => { router.push('/services') }} className={clsx(classes.page, "text-pink")}>Services</div>
              <div onClick={() => { router.push('/uses') }} className={clsx(classes.page, "text-pink")}>Uses</div>
            </div>
            <div className={clsx(classes.center1, "")}>
              <div onClick={() => { router.push('/products') }} className={clsx(classes.page, "text-pink")}>Products</div>
              <div onClick={() => { router.push('/products/hr-hrpo') }} className={clsx(classes.page, "")}>HR/HRPO</div>
              <div onClick={() => { router.push('/products/cr-crca') }} className={clsx(classes.page, "")}>CR/CRCA</div>
              <div onClick={() => { router.push('/products/gi') }} className={clsx(classes.page, "")}>GI</div>
              <div onClick={() => { router.push('/products/ppgi') }} className={clsx(classes.page, "")}>PPGI</div>
            </div>
            <div className={clsx(classes.right1, "text-pink")}>
              {/* <div className={clsx(classes.page, "")}>Help</div> */}
              {/* <div className={clsx(classes.page, "")}>FAQs</div> */}
              <div onClick={() => { router.push('/contactus') }} className={clsx(classes.page, "")}>Contact Us</div>
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
                <img
                  src={facebook.src}
                  alt="facebook"
                  className={clsx(classes.socialIcon, "")}
                />
              </a>

            </div>
            <div className={clsx(classes.social, "")}>
              <a href={data["LinkedInLink"]} target="_blank" rel="noreferrer">
                <img
                  src={twitter.src}
                  alt="twitter"
                  className={clsx(classes.socialIcon, "")}
                />
              </a>

            </div>
            <div className={clsx(classes.social, "")}>
              <a
                href={data["InstagramLink"]}
                target="_blank"
                rel="noreferrer"
              >
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
