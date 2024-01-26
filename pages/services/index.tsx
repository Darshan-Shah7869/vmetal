import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
import { REVALIDATE, baseURL } from "config";
import React from "react";
import servicesImage from "public/assets/images/services.jpg";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const SectionUses = dynamic(() => import("components/SectionUses/SectionUses"));

const ServicesPage: NextPage = ({ servicesData }: any) => {
  return (
    <div>
      <ProductsHero
        image={servicesImage.src}
        title="Our Services"
        subtitle="We provide customised Mild Steel Flat Products as customers’ necessities, such as Cut-To-Length (CTL), Slitting Service, Profiling and Corrugation services and C/Z Purlin."
      />
      <SectionUses data={servicesData} />
    </div>
  );
};

export async function getStaticProps() {
  const res1 = await axios.get(`${baseURL}/api/services?populate=*`);
  return {
    props: {
      servicesData: res1.data.data,
    },
    revalidate: REVALIDATE,
  };
}

export default ServicesPage;
