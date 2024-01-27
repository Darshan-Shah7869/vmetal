import axios from "axios";
import SectionOrder from "components/SectionOrder/SectionOrder";
import { baseURL, REVALIDATE } from "config";
import { NextPage } from "next";
import React from "react";

const OrderDetailsPage: NextPage = ({ productData }: any) => {
  return (
    <div>
      <SectionOrder productData={productData} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res1 = await axios.get(`${baseURL}/api/products?populate=*`);

    return {
      props: {
        productData: res1.data.data,
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
}

export default OrderDetailsPage;
