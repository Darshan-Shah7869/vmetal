import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionAboutus2 from "components/SectionAboutus2/SectionAboutus2";
import SectionAboutus3 from "components/SectionAboutus3/SectionAboutus3";
import SectionVideo from "components/SectionVideo/SectionVideo";
import React from "react";

const AboutusPage = () => {
  return (
    <div>
      <ProductsHero
        title="About us"
        subtitle=" Metal Solutions Inc’s coil processing service Centre is in Ahmedabad, Gujarat stands on solid foundation of 30 years of association of mild steel."
      />
      <SectionAboutus
        title="Lorem ipsum dolor sit"
        subtitle="V Metal Solutions Inc was established in 2020 and successfully caters to its customers with its products and services."
        description="We contribute to Steel manufacturing and merchanting, which highly contribute to different functions by giving their customers mild steel sheets, coils, slitted coils, and corrugated sheets as per their requirements and specifications."
      />
      <SectionAboutus2 />
      <SectionVideo />
      <SectionAboutus3 />
    </div>
  );
};

export default AboutusPage;
