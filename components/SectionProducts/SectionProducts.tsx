import React, { useEffect, useState } from "react";

import classes from "./SectionProducts.module.css";
import clsx from "clsx";
import CardProduct from "components/CardProduct/CardProduct";
import axios from "axios";
import { baseURL } from "config";

const SectionProducts = () => {
  const [productData, setProductData] = useState<any>([]);
  useEffect(() => {
    if (productData.length === 0) {
      axios
        .get(`${baseURL}/api/products?populate=*`)
        .then((res) => {
          console.log(res.data.data);
          setProductData(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="heading-2 pb-5 mb-5 text-center">Our Products</div>
        <div className={clsx(classes.body, "")}>
          {productData.map((el: any, index: number) => {
            console.log(el.attributes.coverImage.data.attributes.url);
            return (
              <CardProduct
                isBrandCar={false}
                name={el.attributes.name}
                slug={el.attributes.slug}
                image={`${baseURL}${el.attributes.coverImage.data.attributes.url}`}
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
