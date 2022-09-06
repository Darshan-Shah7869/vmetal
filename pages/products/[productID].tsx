import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionDetails from "components/SectionDetails/SectionDetails";
import SectionSlider from "components/SectionSlider/SectionSlider";
import SectionVideo from "components/SectionVideo/SectionVideo";
import { baseURL } from "config";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const router = useRouter();
  const [productData, setProductData] = useState<any>(null);
  const [brandData, setBrandsData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `${baseURL}/api/products?filters[slug][$eq]=${router.query.productID}&populate=*`
      )
      .then((res) => {
        console.log(res);
        setProductData(res?.data?.data[0]?.attributes);
        console.log(productData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [router.query.productID, router.asPath, router.pathname]);

  useEffect(() => {
    productData?.brands?.data.map((el: any) => {
      axios
        .get(
          `${baseURL}/api/brands?filters[name][$eq]=${el.attributes.name}&populate=*`
        )
        .then((brandRes) => {
          console.log(brandData);
          setBrandsData((prev: any) => [...prev, ...brandRes?.data?.data]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }, [productData?.brands]);

  console.log(productData?.image?.data[0]?.attributes?.url);

  return (
    <div>
      {productData && brandData && (
        <>
          <ProductsHero
            title={productData.title1}
            subtitle={productData.subtitle1}
            image={productData?.Image?.data[0]?.attributes?.url}
          />
          <SectionAboutus
            title={productData.title2}
            subtitle={productData.title3}
            description={productData.description}
          />
          <SectionVideo video={productData?.video?.data[0]?.attributes?.url} />
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

export default ProductPage;
