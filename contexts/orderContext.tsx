import React from "react";

const orderContext = React.createContext({
  orderData: {
    order: [],
    fullName: "",
    contactNumber: "",
    email: "",
    companyName: "",
    line1: "",
    line2: "",
    pinCode: "",
    state: "",
    country: "",
    GSTNumber: "",
    total: 0,
    subtota: 0,
    tax: 0,
  },
  setOrderData: (item: any) => {},
});

export default orderContext;
