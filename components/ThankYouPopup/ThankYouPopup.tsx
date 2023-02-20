import React, { useEffect, useState } from "react";

import classes from "./ThankYouPopup.module.css";
import clsx from "clsx";
import i1 from "public/assets/images/whatsapp.png";
import i2 from "public/assets/images/linkedIn.png";
import i3 from "public/assets/images/instagram.png";
import axios from "axios";
import { baseURL } from "config";

const ThankYouPopup = ({ isFromType2 = false }: any) => {
  const [data, setData] = useState<any>(null);

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

  return (
    <div>
      {data && (
        <div
          className={clsx(
            classes.root,
            "d-flex flex-column align-items-center"
          )}
        >
          {isFromType2 ? (
            <>
              <div className={clsx(classes.icon, "")}>
                <svg
                  width={122}
                  height={123}
                  viewBox="0 0 122 123"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M0 122.54H122V0.539999H0V122.54Z"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0_2_840"
                        transform="scale(0.015625)"
                      />
                    </pattern>
                    <image
                      id="image0_2_840"
                      width={64}
                      height={64}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className={clsx(classes.title, "mt-5 mb-3")}>Hooray</div>
              <div className={clsx(classes.text, "")}>
                We’ll get back to you in a while.
              </div>
            </>
          ) : (
            <>
              <div className={clsx(classes.icon, "")}>
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.4222 0.884521C20.3784 0.884521 0.884277 20.3786 0.884277 44.4224C0.884277 68.4662 20.3784 87.9603 44.4222 87.9603C68.466 87.9603 87.9601 68.4662 87.9601 44.4224C87.9601 20.3786 68.466 0.884521 44.4222 0.884521ZM68.7563 36.1031L41.3274 63.5319C40.6453 64.214 39.7237 64.595 38.7623 64.595C37.8008 64.595 36.8756 64.214 36.1972 63.5319L23.6691 51.0039C22.2505 49.5853 22.2505 47.2923 23.6691 45.8737C25.0877 44.4551 27.3807 44.4551 28.7993 45.8737L38.7623 55.8366L63.626 30.9728C65.0446 29.5542 67.3376 29.5542 68.7563 30.9728C70.1749 32.3915 70.1749 34.6845 68.7563 36.1031Z"
                    fill="#F8BC24"
                  />
                </svg>
              </div>
              <div className={clsx(classes.title, "mt-5 ")}>Hooray</div>
              <div className={clsx(classes.subtitle, "mb-4")}>
                for your order!
              </div>
              <div className={clsx(classes.text, "")}>
                Our sales team will be in touch with you after verification.{" "}
              </div>
            </>
          )}
          <div className={clsx(classes.socialBox, "")}>
            <div className={clsx(classes.socialText, "")}>Follow along</div>
            <div className={clsx(classes.socials, "d-flex align-items-center")}>
              <div className={clsx(classes.social, "")}>
                <a href={data["WhatsappLink"]} target="_blank" rel="noreferrer">
                  <img src={i1.src} alt="" />
                </a>
              </div>
              <div className={clsx(classes.social, "ml-5 mr-5")}>
                <a href={data["LinkedInLink"]} target="_blank" rel="noreferrer">
                  <img src={i2.src} alt="" />
                </a>
              </div>
              <div className={clsx(classes.social, "")}>
                <a
                  href={data["InstagramLink"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={i3.src} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThankYouPopup;
