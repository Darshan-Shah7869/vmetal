import axios from "axios";
import SectionOrder from "components/SectionOrder/SectionOrder";
import { baseURL, REVALIDATE } from "config";
import { NextPage } from "next";
import React from "react";

const OrderDetailsPage: NextPage = ({
  productData,
  brandsData,
  linksData,
}: any) => {
  return (
    <div>
      <SectionOrder
        productData={productData}
        brandsData={brandsData}
        linksData={linksData}
      />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const [res1, res2, res3] = await Promise.all([
      axios.get(`${baseURL}/api/products?populate=*`),
      axios.get(`${baseURL}/api/brands`),
      axios.get(`${baseURL}/api/links`),
    ]);

    return {
      props: {
        productData: res1.data.data,
        brandsData: res2.data.data,
        linksData: res3.data.data[0].attributes,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    return {
      props: {
        productData: null,
        brandsData: null,
      },
      revalidate: REVALIDATE,
    };
  }
}

export default OrderDetailsPage;
