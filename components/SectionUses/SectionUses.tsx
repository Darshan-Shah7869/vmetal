import CardProduct from "components/CardProduct/CardProduct";
import React from "react";

import classes from "./../SectionProducts/SectionProducts.module.css";
import classes2 from "./SectionUses.module.css";
import clsx from "clsx";
import { useRouter } from "next/router";

const SectionUses = () => {
  const router = useRouter();
  return (
    <div style={{ backgroundColor: "#f1f1f1" }} className="section">
      <div className="container">
        {router.pathname === "/services" && (
          <div className="heading-2 pb-5 mb-5">Our Services</div>
        )}
        <div className={clsx(classes2.body, "")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default SectionUses;
