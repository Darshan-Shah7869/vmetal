import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionUses from "components/SectionUses/SectionUses";
import SectionUses2 from "components/SectionUses2/SectionUses2";
import React from "react";
import image from "public/assets/images/uses.jpg";

const UsesPage = () => {
  return (
    <div>
      <ProductsHero
        image={image.src}
        title="Uses Page Title 1"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad amet unde corporis, at ab repellendus illum voluptate sint ipsa."
      />
      {/* <SectionUses /> */}
      <SectionUses2 />
    </div>
  );
};

export default UsesPage;
