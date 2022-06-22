import React from "react";

import classes from "./SectionUses2.module.css";

import clsx from "clsx";

const SectionUses2 = () => {
  return (
    <div className={clsx(classes.root, "section")}>
      <div className={clsx(classes.container, "container")}>
        <div className={clsx(classes.title, "heading-1")}>
          Lorem ipsum dolor
        </div>
        <div className={clsx(classes.body, "")}>
          <ul className={clsx(classes.items, "")}>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
          </ul>
          <ul className={clsx(classes.items, "")}>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
            <li className={clsx(classes.item, "heading-3")}>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionUses2;
