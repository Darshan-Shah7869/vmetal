import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import classes from "./homepage.module.css";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Homepage1 from "components/Homepage1/Homepage1";
import Homepage2 from "components/Homepage2/Homepage2";
import SectionSlider from "components/SectionSlider/SectionSlider";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "config";

const Home: NextPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    if (productsData.length === 0) {
      axios
        .get(`${baseURL}/api/products?populate=*`)
        .then((res) => {
          setProductsData(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    if (brandsData.length === 0) {
      axios
        .get(`${baseURL}/api/brands?populate=*`)
        .then((res) => {
          setBrandsData(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <div className="root">
      <Homepage1 />
      <Homepage2 />
      <SectionSlider
        data={productsData}
        title="Our Products"
        bgColor="#f1f1f1"
      />
      <SectionSlider
        isBrandSlider={true}
        data={brandsData}
        title="Our Brands"
        bgColor="#f1f1f1"
      />
    </div>
  );
};

export default Home;
