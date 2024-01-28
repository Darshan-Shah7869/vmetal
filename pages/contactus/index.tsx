import axios from "axios";
import SectionInquiryForm from "components/SectionInquiryForm/SectionInquiryForm";
import { baseURL, REVALIDATE } from "config";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const SectionContact = dynamic(
  () => import("components/SectionContact/SectionContact")
);

const ContactUsPage: NextPage = ({ productsData, linksData }: any) => {
  return (
    <div>
      <SectionInquiryForm productsData={productsData} linksData={linksData} />
      <SectionContact />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const [res1, res2] = await Promise.all([
      axios.get(`${baseURL}/api/products?populate=*`),
      axios.get(`${baseURL}/api/links`),
    ]);

    return {
      props: {
        productsData: res1.data.data,
        linksData: res2.data.data[0].attributes,
      },
      revalidate: REVALIDATE,
    };
  } catch (error) {
    return {
      props: {
        productsData: null,
        linksData: null,
      },
      revalidate: REVALIDATE,
    };
  }
}

export default ContactUsPage;
