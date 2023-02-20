import CardProduct from "components/CardProduct/CardProduct";
import React, { useState } from "react";

import classes from "./../SectionProducts/SectionProducts.module.css";
import classes2 from "./SectionUses.module.css";
import clsx from "clsx";
import { useRouter } from "next/router";
import { baseURL } from "config";

const SectionUses = ({ data, isUse }: any) => {
  const router = useRouter();
  return (
    <div style={{ backgroundColor: "#f1f1f1" }} className="section">
      <div className="container">
        {router.pathname === "/services" && (
          <div className="heading-2 pb-5 mb-5 mx-auto text-center">
            Our Services
          </div>
        )}
        <div className={clsx(classes2.body, "")}>
          {data.length !== 0 &&
            data.map((el: any, index: number) => {
              console.log(el?.attributes?.coverImage?.data[0]?.attributes?.url);
              return (
                <CardProduct
                  isBrandCard={isUse}
                  name={el.attributes.name}
                  slug={el.attributes.slug}
                  toService={true}
                  image={`${baseURL}${el?.attributes?.coverImage?.data[0]?.attributes?.url}`}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SectionUses;
