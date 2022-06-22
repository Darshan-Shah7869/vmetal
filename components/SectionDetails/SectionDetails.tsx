import React from "react";

import classes from "./SectionDetails.module.css";

import clsx from "clsx";

const SectionDetails = () => {
  return (
    <div className={clsx(classes.root, "section")}>
      <div className={clsx(classes.container, "container")}>
        <div className={clsx(classes.body, "")}>
          <div className={clsx(classes.item, classes.item2, "")}>
            MATERIAL SPECIFICATION
          </div>
          <div className={clsx(classes.item, "")}>Material</div>
          <div className={clsx(classes.item, "")}>CRCA/GP/HR/HRPO</div>
          <div className={clsx(classes.item, "")}>Thickness</div>
          <div className={clsx(classes.item, "")}>0.30 To 3.00 mm</div>
          <div className={clsx(classes.item, classes.item2, "")}>
            INPUT COIL SPECIFICATION
          </div>
          <div className={clsx(classes.item, "")}>Coil Outer Diameter</div>
          <div className={clsx(classes.item, "")}>1800 To 2000 mm</div>
          <div className={clsx(classes.item, "")}>Coil Inner Diameter</div>
          <div className={clsx(classes.item, "")}>450 to 500 mm</div>
          <div className={clsx(classes.item, "")}>Max Coil Weight</div>
          <div className={clsx(classes.item, "")}>30 Tons</div>
          <div className={clsx(classes.item, "")}>
            Coil Width (Cut to length line)
          </div>
          <div className={clsx(classes.item, "")}>300 mm to 2000 mm</div>
          <div className={clsx(classes.item, classes.item2, "")}>
            OUTPUT SHEET SPECIFICATION
          </div>
          <div className={clsx(classes.item, "")}>Stacker Capacity</div>
          <div className={clsx(classes.item, "")}>5 to 7 Tones</div>
          <div className={clsx(classes.item, "")}>Sheet Length Min</div>
          <div className={clsx(classes.item, "")}>600 mm</div>
          <div className={clsx(classes.item, "")}>Sheet Length Max</div>
          <div className={clsx(classes.item, "")}>6000 mm</div>
          <div className={clsx(classes.item, "")}>Accuracy</div>
          <div className={clsx(classes.item, "")}>
            mm on diagonal / mm on length
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
