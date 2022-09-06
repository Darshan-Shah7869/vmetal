import React, { useEffect, useState } from "react";

import classes from "./SectionVideo.module.css";

import VisibilitySensor from "react-visibility-sensor";

import clsx from "clsx";
import { baseURL } from "config";

const SectionVideo = ({
  video = "https://res.cloudinary.com/domdsbthb/video/upload/v1662455312/big_buck_bunny_720p_1mb_5fc6f55e89.mp4",
}: any) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      onChange={(value: boolean) => {
        setVisibility(value);
      }}
    >
      <div
        style={{ width: visibility ? "100%" : "60%", margin: "0 auto" }}
        className={classes.root}
      >
        <video
          className={classes.video}
          autoPlay
          loop
          muted
          // controls
          // style={{ PointerEvent: 'none' }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </VisibilitySensor>
  );
};

export default SectionVideo;
