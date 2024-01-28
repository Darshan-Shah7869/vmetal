import React from "react";

import classes from "./SectionProducts.module.css";
import clsx from "clsx";
import CardProduct from "components/CardProduct/CardProduct";
import { baseURL } from "config";

const SectionProducts = ({ productData }: any) => {
  return (
    <div className="section">
      <div className="container">
        <div className="heading-2 pb-5 mb-5 text-center">Our Products</div>
        <div className={clsx(classes.body, "")}>
          {productData.map((el: any, index: number) => {
            return (
              <CardProduct
                isBrandCar={false}
                name={el.attributes.name}
                slug={el.attributes.slug}
                image={`${baseURL}${el.attributes.coverImage.data?.attributes.url}`}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
