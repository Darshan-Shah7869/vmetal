import ProductsHero from "components/ProductsHero/ProductsHero";
import React from "react";
import image from "public/assets/images/uses.jpg";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import axios from "axios";
import { baseURL, REVALIDATE } from "config";
// import SectionUses from "components/SectionUses/SectionUses";
const SectionUses2 = dynamic(
  () => import("components/SectionUses2/SectionUses2")
);

const UsesPage: NextPage = ({ usesData }: any) => {
  return (
    <main>
      <ProductsHero
        image={image.src}
        title="Uses of Mild Steel"
        subtitle="The major application of mild steel is in the following industries."
      />
      {/* <SectionUses /> */}
      <SectionUses2 data={usesData} />
    </main>
  );
};

export async function getStaticProps() {
  try {
    const res1 = await axios.get(`${baseURL}/api/uses?populate=*`);

    return {
      props: {
        usesData: res1.data.data,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    return {
      props: {
        usesData: null,
      },
      revalidate: REVALIDATE,
    };
  }
}

export default UsesPage;
