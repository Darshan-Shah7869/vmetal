import React, { useState, useEffect } from "react";

import classes from "./DropdownMenu.module.css";

const DropdownMenu = ({
  label,
  pvalue,
  dataArr,
  changeHandler = () => {},
  disable = false,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (pvalue) {
      setValue(pvalue);
    }
  }, [pvalue]);

  useEffect(() => {
    changeHandler(value);
  }, [value]);

  return (
    <div className={`${classes.root}`}>
      <div
        className={`${classes.dropdown} d-flex align-items-center justify-content-between`}
      >
        <div className={`${classes.left}`}>
          <div
            // style={{ color: "#b9b3b3" }}
            className={`${classes.value} text-black`}
          >
            {/* {value.length === 0 ? "N / A" : value} */}
            {value}
          </div>
        </div>
        {!disable && (
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={`${classes.right}`}
          >
            <svg
              style={{ transform: isOpen ? "rotate(-180deg)" : "" }}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70981 6.8297L10.9498 2.5897C11.0435 2.49674 11.1179 2.38613 11.1687 2.26428C11.2195 2.14242 11.2456 2.01171 11.2456 1.8797C11.2456 1.74769 11.2195 1.61698 11.1687 1.49512C11.1179 1.37326 11.0435 1.26266 10.9498 1.1697C10.7624 0.983448 10.509 0.878906 10.2448 0.878906C9.98062 0.878906 9.72717 0.983448 9.53981 1.1697L5.99981 4.7097L2.45981 1.1697C2.27244 0.983448 2.01899 0.878906 1.75481 0.878906C1.49062 0.878906 1.23717 0.983448 1.04981 1.1697C0.957126 1.26314 0.883801 1.37395 0.834036 1.49579C0.784271 1.61763 0.759047 1.74809 0.759808 1.8797C0.759047 2.01131 0.784271 2.14177 0.834036 2.26361C0.883801 2.38544 0.957126 2.49626 1.04981 2.5897L5.28981 6.8297C5.38277 6.92343 5.49337 6.99782 5.61523 7.04859C5.73709 7.09936 5.8678 7.1255 5.99981 7.1255C6.13182 7.1255 6.26253 7.09936 6.38438 7.04859C6.50624 6.99782 6.61684 6.92343 6.70981 6.8297Z"
                fill="black"
              />
            </svg>
          </div>
        )}
      </div>
      {isOpen && !disable && (
        <div className={`${classes.menu}`}>
          {dataArr.map((el: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setValue(el);
                  setIsOpen(false);
                }}
                className={`${classes.menuItem}`}
              >
                {el}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
