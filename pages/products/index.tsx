import ProductsHero from "components/ProductsHero/ProductsHero";
import React from "react";
import image from "public/assets/images/ourProducts.jpg";
import dynamic from "next/dynamic";
import axios from "axios";
import { baseURL, REVALIDATE } from "config";
import { NextPage } from "next";

const SectionProducts = dynamic(
  () => import("components/SectionProducts/SectionProducts")
);

const ProductsPage: NextPage = ({ productsData }: any) => {
  return (
    <div>
      <ProductsHero
        image={image.src}
        title="Our Products"
        subtitle="V Metal Solutions Inc of Steel is manufacturing and merchanting highly contributes to various processes by giving their customers mild steel sheets, coils, slitted coils and corrugated sheets as per their requirements and specifications. Mainly the mild steel products (CR/CRCA, HR/HRPO, GP/GI, PPGI/PPGL, PMP, Z/C Purlin) are manufactured in various forms and are delivered to various companies."
      />
      <SectionProducts productData={productsData} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res1 = await axios.get(`${baseURL}/api/products?populate=*`);

    return {
      props: {
        productsData: res1.data.data,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    return {
      props: {
        productsData: null,
      },
      revalidate: REVALIDATE,
    };
  }
}

export default ProductsPage;
