import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionProducts from "components/SectionProducts/SectionProducts";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <ProductsHero
        title="Our Products"
        subtitle="V Metal Solutions Inc of Steel is manufacturing and merchanting highly contributes to various processes by giving their customers mild steel sheets, coils, slitted coils and corrugated sheets as per their requirements and specifications. Mainly the mild steel products (CRCA/HRPO/GP/GI/PPGI) are manufactured in various forms and are delivered to various companies."
      />
      <SectionProducts />
    </div>
  );
};

export default ProductsPage;
