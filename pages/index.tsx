import type { NextPage } from "next";

import Homepage1 from "components/Homepage1/Homepage1";
import Homepage2 from "components/Homepage2/Homepage2";
import axios from "axios";
import { REVALIDATE, baseURL } from "config";
import dynamic from "next/dynamic";

const SectionSlider = dynamic(
  () => import("components/SectionSlider/SectionSlider")
);
const SectionReview = dynamic(
  () => import("components/SectionReview/SectionReview")
);

const Home: NextPage = ({ productsData, brandsData }: any) => {
  return (
    <div className="root">
      <Homepage1 />
      <Homepage2 />
      <SectionSlider
        data={productsData}
        title="Our Products"
        bgColor="#f1f1f1"
      />
      <SectionReview />
      <SectionSlider
        isBrandSlider={true}
        data={brandsData}
        title="Our Brands"
        bgColor="#f1f1f1"
      />
    </div>
  );
};

export async function getStaticProps() {
  const res1 = await axios.get(`${baseURL}/api/products?populate=*`);
  const res2 = await axios.get(`${baseURL}/api/brands?populate=*`);

  return {
    props: {
      productsData: res1.data.data,
      brandsData: res2.data.data,
    },
    revalidate: REVALIDATE,
  };
}

export default Home;
