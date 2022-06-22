import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionVideo from "components/SectionVideo/SectionVideo";
import AboutusPage from "pages/aboutus";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <ProductsHero />
      <SectionAboutus />
      <SectionVideo />
    </div>
  );
};

export default ServicePage;
