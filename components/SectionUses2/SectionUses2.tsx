import React, { useEffect, useState } from "react";

import classes from "./SectionUses2.module.css";

import clsx from "clsx";
import axios from "axios";
import { baseURL } from "config";
import { error } from "console";

const SectionUses2 = () => {
  const [usesData, setUsesData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/api/uses?populate=*`)
      .then((res) => {
        console.log(res.data);
        setUsesData(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className={clsx(classes.root, "section")}>
      <div className={clsx(classes.container, "container")}>
        <div className={clsx(classes.title, "heading-1")}>
          Lorem ipsum dolor
        </div>
        <div className={clsx(classes.body, "")}>
          <ul className={clsx(classes.items, "")}>
            {usesData.length !== 0 &&
              usesData.map((el: any, index: number) => {
                return (
                  <li key={index} className={clsx(classes.item)}>
                    {el.attributes.use}
                  </li>
                );
              })}
            {/* <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionUses2;
