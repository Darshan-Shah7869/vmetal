import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
