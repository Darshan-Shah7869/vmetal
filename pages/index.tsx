import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import classes from "./homepage.module.css";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Homepage1 from "components/Homepage1/Homepage1";
import Homepage2 from "components/Homepage2/Homepage2";
import SectionSlider from "components/SectionSlider/SectionSlider";

const Home: NextPage = () => {
  return (
    <div className="root">
      <Homepage1 />
      <Homepage2 />
      <SectionSlider title="Our Products" bgColor="#f1f1f1" />
      <SectionSlider title="Our Brands" bgColor="#f1f1f1" />
    </div>
  );
};

export default Home;
