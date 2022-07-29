import React from "react";

import classes from "./SectionAboutus2.module.css";
import clsx from "clsx";

const SectionAboutus2 = () => {
  return (
    <div className={clsx(classes.root, "bg-white-2 d-flex root")}>
      <div className={clsx(classes.left, "")}>&nbsp;</div>
      <div
        className={clsx(
          classes.body,
          "bg-white d-flex flex-column justify-content-center"
        )}
      >
        <div
          className={clsx(
            classes.subtitle,
            "heading-3 mb-5 pb-5 animate__animated animate__fadeInRight"
          )}
        >
          Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta
          sadipscing te.
        </div>
        <div
          className={clsx(
            classes.text,
            " animate__animated animate__fadeInRight"
          )}
        >
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat.
          Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam
          minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit
          mentitum.
        </div>
      </div>
    </div>
  );
};

export default SectionAboutus2;
