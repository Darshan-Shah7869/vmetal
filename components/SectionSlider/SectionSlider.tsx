import React from "react";

import classes from "./SectionSlider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import clsx from "clsx";
import CardProduct from "components/CardProduct/CardProduct";
import { baseURL } from "config";
import useWindowSize from "utils/useWindowSize";

const SectionSlider = ({
  title,
  bgColor,
  data,
  isBrandSlider = false,
}: any) => {
  const { width } = useWindowSize();

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={clsx(classes.root, "root section bg-white-2")}
    >
      <div className={classes.container}>
        <div
          style={{ marginBottom: "8rem" }}
          className="text-center heading-3 text-blue"
        >
          {title}
        </div>
        <div>
          <Splide
            style={{ width: "100%" }}
            options={{
              width: "100%",
              perPage: width < 1000 ? (width < 600 ? 1 : 1) : 3,
              perMove: 1,
            }}
            aria-label="My Favorite Images"
          >
            {data && isBrandSlider
              ? data.map((el: any, index: number) => {
                  console.log(el);
                  return (
                    <SplideSlide
                      key={index}
                      className="d-flex justify-content-center"
                    >
                      <CardProduct
                        isBrandCard={true}
                        name={el?.attributes?.name}
                        image={`${el.attributes.image.data[0].attributes.url}`}
                      />
                    </SplideSlide>
                  );
                })
              : data.map((el: any, index: number) => {
                  return (
                    <SplideSlide
                      key={index}
                      className="d-flex justify-content-center"
                    >
                      <CardProduct
                        name={el.attributes.name}
                        slug={el.attributes.slug}
                        image={`${el.attributes.coverImage.data[0].attributes.url}`}
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

export default SectionSlider;
