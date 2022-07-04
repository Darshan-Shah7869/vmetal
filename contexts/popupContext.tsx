import React from "react";

const popupContext = React.createContext({
  popupData: {
    isVisible: false,
    childComponent: "",
  },
  setPopupData: (item: any) => {},
});

export default popupContext;
