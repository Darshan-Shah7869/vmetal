import ProductsHero from "components/ProductsHero/ProductsHero";
import React from "react";
import image from "public/assets/images/aboutus1.jpg";
import dynamic from "next/dynamic";

const SectionAboutus = dynamic(
  () => import("components/SectionAboutus/SectionAboutus")
);
const SectionAboutus2 = dynamic(
  () => import("components/SectionAboutus2/SectionAboutus2")
);

const AboutusPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ProductsHero
        image={image.src}
        title="About us"
        subtitle="V Metal Solutions Inc. is committed to providing our customers with the highest quality steel products and services. We are a leading steel supplying company in Ahmedabad, Gujarat, and we are proud to serve customers throughout Gujarat, Rajasthan, and Madhya Pradesh."
      />
      <SectionAboutus
        title="Why Us ?"
        subtitle="V Metal Solutions Inc was established in 2020 and successfully caters to its customers with its products and services."
        description="We contribute to Steel manufacturing and merchanting, which highly contribute to different functions by giving their customers mild steel sheets, coils, slitted coils, and corrugated sheets as per their requirements and specifications."
      />
      <SectionAboutus2 />
    </div>
  );
};

export default AboutusPage;
