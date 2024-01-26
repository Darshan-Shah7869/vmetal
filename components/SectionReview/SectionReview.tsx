import clsx from "clsx";
import React, { useState } from "react";

import classes from "./SectionReview.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseURL } from "config";
import CardReview from "components/CardReview/CardReview";
import useWindowSize from "utils/useWindowSize";

const SectionReview = ({ data }: any) => {
  const reviews = data;
  const { width } = useWindowSize();

  return (
    <div className={clsx(classes.root, "section")}>
      <div className="container">
        <div
          style={{ marginBottom: "8rem" }}
          className="text-center heading-3 text-blue"
        >
          What our clients say about us
        </div>
        <div>
          <Splide
            style={{ width: "100%" }}
            options={{
              width: "100%",
              perPage: width <= 950 ? (width <= 767 ? 1 : 2) : 3,
              perMove: 1,
            }}
            aria-label="My Favorite Images"
          >
            {reviews.length !== 0 &&
              reviews.map((el: any, index: number) => {
                return (
                  <SplideSlide
                    key={index}
                    className="d-flex justify-content-center"
                  >
                    <CardReview
                      image={baseURL + el.attributes.image.data.attributes.url}
                      name={el.attributes.name}
                      role={el.attributes.role}
                      description={el.attributes.description}
                      type={(index + 1) % 3}
                    />
                  </SplideSlide>
                );
              })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default SectionReview;
