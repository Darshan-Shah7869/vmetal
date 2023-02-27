import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionAboutus2 from "components/SectionAboutus2/SectionAboutus2";
import SectionAboutus3 from "components/SectionAboutus3/SectionAboutus3";
import SectionVideo from "components/SectionVideo/SectionVideo";
import React from "react";
import image from "public/assets/images/aboutus1.jpg";

const AboutusPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ProductsHero
        image={image.src}
        title="About us"
        subtitle="V Metal Solutions Inc’s coil processing service Centre is in Ahmedabad, Gujarat stands on solid foundation of 30 years of association of mild steel."
      />
      <SectionAboutus
        title="Why Us ?"
        subtitle="V Metal Solutions Inc was established in 2020 and successfully caters to its customers with its products and services."
        description="We contribute to Steel manufacturing and merchanting, which highly contribute to different functions by giving their customers mild steel sheets, coils, slitted coils, and corrugated sheets as per their requirements and specifications."
      />
      <SectionAboutus2 />
      {/* <SectionVideo /> */}
      {/* <SectionAboutus3 /> */}
    </div>
  );
};

export default AboutusPage;
