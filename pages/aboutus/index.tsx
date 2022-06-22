import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionAboutus2 from "components/SectionAboutus2/SectionAboutus2";
import SectionAboutus3 from "components/SectionAboutus3/SectionAboutus3";
import SectionVideo from "components/SectionVideo/SectionVideo";
import React from "react";

const AboutusPage = () => {
  return (
    <div>
      <ProductsHero />
      <SectionAboutus />
      <SectionAboutus2 />
      <SectionAboutus3 />
      <SectionVideo />
      <SectionAboutus2 />
    </div>
  );
};

export default AboutusPage;
