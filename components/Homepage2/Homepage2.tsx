import React from "react";

import classes from "./Homepage2.module.css";

import clsx from "clsx";

const Homepage2 = () => {
  return (
    <div className={clsx(classes.root, "root d-flex")}>
      <div className={clsx(classes.left, "w-50")}>&nbsp;</div>
      <div className={clsx(classes.right, "w-50 align-self-center")}>
        <div className={clsx(classes.title, "heading-3 mb-1 pb-5")}>
          Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta
          sadipscing te.
        </div>
        <div className={clsx(classes.text, "mb-5 pb-5")}>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </div>
        <div className={clsx(classes.btnBox, "")}>
          <button className="btn btn-contained">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
