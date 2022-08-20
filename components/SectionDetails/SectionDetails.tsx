import React from "react";

import classes from "./SectionDetails.module.css";

import clsx from "clsx";

const SectionDetails = ({
  material,
  thickness,
  coilOuterDiameter,
  coilInnerDiameter,
  maxCoilWeight,
  coilWidth,
  stackerCapacity,
  sheetLengthMin,
  sheetLengthMax,
  accuracy,
}: any) => {
  return (
    <div className={clsx(classes.root, "section")}>
      <div className={clsx(classes.container, "container")}>
        <div className={clsx(classes.body, "")}>
          <div className={clsx(classes.item, classes.item2, "")}>
            MATERIAL SPECIFICATION
          </div>
          <div className={clsx(classes.item, "")}>Material</div>
          <div className={clsx(classes.item, "")}>{material}</div>
          <div className={clsx(classes.item, "")}>Thickness</div>
          <div className={clsx(classes.item, "")}>{thickness}</div>
          <div className={clsx(classes.item, classes.item2, "")}>
            INPUT COIL SPECIFICATION
          </div>
          <div className={clsx(classes.item, "")}>Coil Outer Diameter</div>
          <div className={clsx(classes.item, "")}>{coilOuterDiameter}</div>
          <div className={clsx(classes.item, "")}>Coil Inner Diameter</div>
          <div className={clsx(classes.item, "")}>{coilInnerDiameter}</div>
          <div className={clsx(classes.item, "")}>Max Coil Weight</div>
          <div className={clsx(classes.item, "")}>{maxCoilWeight}</div>
          <div className={clsx(classes.item, "")}>
            Coil Width (Cut to length line)
          </div>
          <div className={clsx(classes.item, "")}>{coilWidth}</div>
          <div className={clsx(classes.item, classes.item2, "")}>
            OUTPUT SHEET SPECIFICATION
          </div>
          <div className={clsx(classes.item, "")}>Stacker Capacity</div>
          <div className={clsx(classes.item, "")}>{stackerCapacity}</div>
          <div className={clsx(classes.item, "")}>Sheet Length Min</div>
          <div className={clsx(classes.item, "")}>{sheetLengthMin}</div>
          <div className={clsx(classes.item, "")}>Sheet Length Max</div>
          <div className={clsx(classes.item, "")}>{sheetLengthMax}</div>
          <div className={clsx(classes.item, "")}>Accuracy</div>
          <div className={clsx(classes.item, "")}>{accuracy}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
