import React, { useContext, useState } from "react";

import classes from "./../ThankYouPopup/ThankYouPopup.module.css";
// @ts-ignore
import MuiPhoneNumber from "material-ui-phone-number";

import clsx from "clsx";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { baseURL } from "config";
import popupContext from "contexts/popupContext";

const UserPopup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
  });

  const { popupData, setPopupData } = useContext(popupContext);

  const handleOnChange = (value: any, country: any) => {
    setData((prev: any) => ({ ...prev, phone: value, country: country.name }));
  };

  return (
    <div className={clsx(classes.root, "d-flex flex-column")}>
      <div className={clsx(classes.imageBox, "heading-2 text-center")}>👋</div>
      <div className={clsx(classes.title, "text-center mt-5 mb-5")}>
        Lorem ipsum
      </div>

      <div className="mb-2">
        <TextField
          id="outlined-basic"
          label="Name"
          className="w-100"
          variant="outlined"
          onChange={(e) => {
            setData((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
      </div>
      <div className="mb-2">
        <TextField
          id="outlined-basic"
          className="w-100"
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setData((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
      </div>
      <div className="mb-2">
        <MuiPhoneNumber
          defaultCountry={"in"}
          inputClass={clsx(classes.phoneInput, "w-100")}
          // @ts-ignore
          onChange={(value: any, country: any) => {
            handleOnChange(value, country);
          }}
        />
      </div>
      <button
        style={{
          backgroundColor: "#2D6ADB",
          color: "#fff",
          borderRadius: "6px",
        }}
        className={clsx(classes.button, "btn w-100 btn-contained")}
        onClick={() => {
          console.log(data);
          axios
            .post(`${baseURL}/api/webusers`, {
              data: {
                Name: data.name,
                Email: data.email,
                Phone: data.phone,
                Country: data.country,
              },
            })
            .then((response) => {
              console.log(response.data);
              setPopupData((prev: any) => ({ ...prev, isVisible: false }));
            })
            .catch((error) => {
              console.log(error.message);
            });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default UserPopup;
