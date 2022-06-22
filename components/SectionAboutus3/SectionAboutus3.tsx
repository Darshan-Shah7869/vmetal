import React from "react";

import classes from "./../SectionAboutus/SectionAboutus.module.css";
import clsx from "clsx";
import styles from "./SectionAboutus3.module.css";

const SectionAboutus3 = () => {
  return (
    <div className={clsx(classes.root, "bg-white-2 root")}>
      <div className={classes.left}>
        <div className={clsx(classes.title, "heading-1")}>
          Lorem ipsum dolor{" "}
        </div>
      </div>

      <div className={clsx(styles.body, "bg-white")}>
        <div className={clsx(classes.subtitle, "heading-3 mb-5 pb-5")}>
          Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta
          sadipscing te.
        </div>
        <div className={clsx(classes.text, "")}>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat.
          Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam
          minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit
          mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam
          ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
          animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr
          intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit
          quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          Ex duo eripuit mentitum.
        </div>
      </div>
    </div>
  );
};

export default SectionAboutus3;
