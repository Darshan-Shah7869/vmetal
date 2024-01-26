import React from "react";
import classes from "./SectionUses2.module.css";
import clsx from "clsx";

const SectionUses2 = ({ data }: any) => {
  return (
    <section className={clsx(classes.root, "section")}>
      <div className={clsx(classes.container, "container")}>
        <div className={clsx(classes.title, "heading-1")}>
          Applications of Mild Steel
        </div>
        <div className={clsx(classes.body, "")}>
          <ul className={clsx(classes.items, "")}>
            {data.length !== 0 &&
              data.map((el: any, index: number) => {
                return (
                  <li key={index} className={clsx(classes.item)}>
                    {el.attributes.use}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionUses2;
