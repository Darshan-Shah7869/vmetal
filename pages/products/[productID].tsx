import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
// import SectionVideo from "components/SectionVideo/SectionVideo";
import { baseURL } from "config";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const SectionAboutus = dynamic(
  () => import("components/SectionAboutus/SectionAboutus")
);
const SectionSlider = dynamic(
  () => import("components/SectionSlider/SectionSlider")
);

const ProductPage: NextPage = ({ productData }: any) => {
  const [brandData, setBrandsData] = useState<any>([]);

  useEffect(() => {
    productData?.brands?.data.map((el: any) => {
      axios
        .get(
          `${baseURL}/api/brands?filters[name][$eq]=${el.attributes.name}&populate=*`
        )
        .then((brandRes) => {
          console.log(brandRes);
          setBrandsData((prev: any) => [...prev, ...brandRes?.data?.data]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }, [productData?.brands]);

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
    const res: any = await axios.get(
      `${baseURL}/api/products?populate=*&filters[slug][$eq]=${id}`
    );

    return {
      props: {
        productData: res.data.data[0]?.attributes,
      },
    };
  } catch (error) {
    return {
      props: {
        productData: null,
      },
    };
  }
};

export default ProductPage;
