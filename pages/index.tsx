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

const Home: NextPage = ({ productsData, brandsData, reviewsData }: any) => {
  return (
    <div className="root">
      <Homepage1 />
      <Homepage2 />
      <SectionSlider
        data={productsData}
        title="Our Products"
        bgColor="#f1f1f1"
      />
      <SectionReview data={reviewsData} />
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
  try {
    const [res1, res2, res3] = await Promise.all([
      axios.get(`${baseURL}/api/products?populate=*`),
      axios.get(`${baseURL}/api/brands?populate=*`),
      axios.get(`${baseURL}/api/reviews?populate=*`),
    ]);

    return {
      props: {
        productsData: res1.data.data,
        brandsData: res2.data.data,
        reviewsData: res3.data.data,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    return {
      props: {
        productsData: null,
        brandsData: null,
        reviewsData: null,
      },
      revalidate: REVALIDATE,
    };
  }
}

export default Home;
