import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionDetails from "components/SectionDetails/SectionDetails";
import SectionVideo from "components/SectionVideo/SectionVideo";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <ProductsHero />
      <SectionAboutus />
      <SectionDetails />
      <SectionVideo />
    </div>
  );
};

export default ProductPage;
