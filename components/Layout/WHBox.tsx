import axios from "axios";
import clsx from "clsx";
import { baseURL } from "config";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./Layout.module.css";
import whImage from "./../../public/assets/images/whatsapp copy.png";

const WHBox = () => {
  const [link, setLink] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/links`)
      .then((response) => {
        setLink(response.data.data[0].attributes.WhatsappLink);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div>
      {link && (
        <div className={clsx(classes.whBox)}>
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              className={classes.whImage}
              src={whImage.src}
              alt=""
              width={50}
              height={50}
              objectFit="cover"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default WHBox;
