import React from "react";

import classes from "./SectionSlider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import clsx from "clsx";
import CardProduct from "components/CardProduct/CardProduct";

const SectionSlider = ({ title, bgColor }: any) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="root section bg-white-2"
    >
      <div className="container">
        <div
          style={{ marginBottom: "8rem" }}
          className="text-center heading-3 text-blue"
        >
          {title}
        </div>
        <div>
          <Splide
            style={{ width: "100%" }}
            options={{ width: "100%", perPage: 3, perMove: 3 }}
            aria-label="My Favorite Images"
          >
            <SplideSlide className="d-flex justify-content-center">
              <CardProduct />
            </SplideSlide>
            <SplideSlide className="d-flex justify-content-center">
              <CardProduct />
            </SplideSlide>
            <SplideSlide className="d-flex justify-content-center">
              <CardProduct />
            </SplideSlide>
            <SplideSlide className="d-flex justify-content-center">
              <CardProduct />
            </SplideSlide>
            <SplideSlide className="d-flex justify-content-center">
              <CardProduct />
            </SplideSlide>
            <SplideSlide className="d-flex justify-content-center">
              <CardProduct />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
