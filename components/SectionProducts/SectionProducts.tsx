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
            return (
              <CardProduct
                isBrandCar={false}
                name={el.attributes.name}
                slug={el.attributes.slug}
                image={`${el.attributes.coverImage.data[0].attributes.url}`}
                key={index}
              />
            );
          })}
          <CardProduct
            isBrandCar={false}
            name={"PMP Plates"}
            slug={""}
            image={`https://res.cloudinary.com/domdsbthb/image/upload/v1662455309/dummy_Image2_1_44fb0ecf61.jpg`}
          />
          <CardProduct
            slug={""}
            isBrandCar={false}
            name={"M.S. Structure"}
            image={`https://res.cloudinary.com/domdsbthb/image/upload/v1662455309/dummy_Image2_1_44fb0ecf61.jpg`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
