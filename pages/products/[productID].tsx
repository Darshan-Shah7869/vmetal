import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
// import SectionVideo from "components/SectionVideo/SectionVideo";
import { REVALIDATE, baseURL } from "config";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
const SectionAboutus = dynamic(
  () => import("components/SectionAboutus/SectionAboutus")
);
const SectionSlider = dynamic(
  () => import("components/SectionSlider/SectionSlider")
);

const ProductPage: NextPage = ({ productData, brandData }: any) => {
  return (
    <div>
      {productData && brandData && (
        <>
          <ProductsHero
            title={productData.title1}
            subtitle={productData.subtitle1}
            image={baseURL + productData?.image?.data[0]?.attributes?.url}
          />
          <SectionAboutus
            title={productData.title2}
            subtitle={productData.title3}
            description={productData.newDescription}
            type="rich"
          />
          {/* <SectionVideo video={productData?.video?.data[0]?.attributes?.url} /> */}
          <SectionSlider
            title="Brands Supplied"
            bgColor="#f1f1f1"
            isBrandSlider={true}
            data={brandData}
          />
        </>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const res: any = await axios.get(`${baseURL}/api/products?populate=*`);

    const paths = res.data.data.map((el: any) => {
      return {
        params: {
          productID: el.attributes.slug,
        },
      };
    });

    return { paths, fallback: false };
  } catch {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context: any) => {
  try {
    const id = context.params.productID;

    const [res1, res2] = await Promise.all([
      axios.get(`${baseURL}/api/products?populate=*&filters[slug][$eq]=${id}`),
      axios.get(`${baseURL}/api/brands?populate=*`),
    ]);

    return {
      props: {
        productData: res1.data.data[0]?.attributes,
        brandData: res2.data.data,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    return {
      props: {
        productData: null,
      },
      revalidate: REVALIDATE,
    };
  }
};

export default ProductPage;
