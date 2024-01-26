import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
import { baseURL } from "config";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const SectionAboutus = dynamic(
  () => import("components/SectionAboutus/SectionAboutus")
);
const SectionDetails = dynamic(
  () => import("components/SectionDetails/SectionDetails")
);

const ServicePage: NextPage = ({ serviceData }: any) => {
  return (
    <div>
      <ProductsHero
        title={serviceData?.attributes?.title1}
        subtitle={serviceData?.attributes?.subtitle1}
        image={
          baseURL + serviceData?.attributes?.image?.data[0]?.attributes?.url
        }
      />
      <SectionAboutus
        title={serviceData?.attributes?.title3}
        subtitle={serviceData?.attributes?.title2}
        description={serviceData?.attributes?.newDescription}
        type="rich"
      />
      {/* <SectionVideo /> */}
      <SectionDetails
        material={serviceData?.attributes?.material}
        thickness={serviceData?.attributes?.thickness}
        coilOuterDiameter={serviceData?.attributes?.coilOuterDiameter}
        coilInnerDiameter={serviceData?.attributes?.coilInnerDiameter}
        maxCoilWeight={serviceData?.attributes?.maxCoilWeight}
        coilWidth={serviceData?.attributes?.coilWidth}
        stackerCapacity={serviceData?.attributes?.stackerCapacity}
        sheetLengthMin={serviceData?.attributes?.sheetLengthMin}
        sheetLengthMax={serviceData?.attributes?.sheetLengthMax}
        accuracy={serviceData?.attributes?.accuracy}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const res: any = await axios.get(`${baseURL}/api/services?populate=*`);

    const paths = res.data.data.map((el: any) => {
      return {
        params: {
          serviceID: el.attributes.slug,
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
    const id = context.params.serviceID;
    const res: any = await axios.get(
      `${baseURL}/api/services?populate=*&filters[slug][$eq]=${id}`
    );

    return {
      props: {
        serviceData: res.data.data[0],
      },
    };
  } catch (error) {
    return {
      props: {
        serviceData: null,
      },
    };
  }
};

export default ServicePage;
