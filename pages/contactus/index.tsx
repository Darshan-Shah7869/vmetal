import axios from "axios";
import SectionInquiryForm from "components/SectionInquiryForm/SectionInquiryForm";
import { baseURL, REVALIDATE } from "config";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const SectionContact = dynamic(
  () => import("components/SectionContact/SectionContact")
);

const ContactUsPage: NextPage = ({ productsData }: any) => {
  return (
    <div>
      <SectionInquiryForm productsData={productsData} />
      <SectionContact />
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

export default ContactUsPage;
