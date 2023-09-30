import React from "react";

import classes from "./SectionContact.module.css";
import clsx from "clsx";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";

const SectionContact = () => {
  return (
    <div className={clsx(classes.root, "section bg-blue")}>
      <div
        className={clsx(
          classes.container,
          "container d-flex align-items-center "
        )}
      >
        <div className={clsx(classes.left, "w-50")}>
          <div className={clsx(classes.label, "heading-3 text-black mb-5")}>
            Address
          </div>
          <div className={clsx(classes.leftBody, "w-100")}>
            <div className={clsx(classes.input, classes.fullRow, "")}>
              523, First Floor, Road No. 14, Kathwada G.I.D.C., Kathwada,
              Ahmedabad- 382430
            </div>
            <input
              type="text"
              className={clsx(classes.input, "")}
              placeholder="Ahmedabad"
              readOnly
            />

            <input
              type="text"
              className={clsx(classes.input, "")}
              placeholder="Gujarat"
              readOnly
            />
            <input
              type="text"
              className={clsx(classes.input, "")}
              placeholder="380005"
              readOnly
            />
            <input
              type="text"
              className={clsx(classes.input, "")}
              placeholder="95102 15623"
              readOnly
            />
          </div>

          {/* <button className={clsx("btn btn-contained w-100 mt-5", classes.btn)}>
            Continue Shipping
          </button> */}
        </div>
        <div className={clsx(classes.right, "w-50")}>
          <iframe
            className={clsx(classes.map, "w-100")}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.8569940799066!2d72.68170661744385!3d23.0290224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a00b2a756d%3A0xe4ce4109276aaa2c!2s523%2C%20Rd%20Number%2014%2C%20Kathwada%20GIDC%2C%20Odhav%20Industrial%20Estate%2C%20Odhav%2C%20Ahmedabad%2C%20Gujarat%20382430!5e0!3m2!1sen!2sin!4v1655869389520!5m2!1sen!2sin"
            width="600"
            height="450"
            // style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
