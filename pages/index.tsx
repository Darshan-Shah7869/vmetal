import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import classes from "./homepage.module.css";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Homepage1 from "components/Homepage1/Homepage1";
import Homepage2 from "components/Homepage2/Homepage2";

const Home: NextPage = () => {
  return (
    <div className="root">
      <Homepage1 />
      <Homepage2 />
    </div>
  );
};

export default Home;
