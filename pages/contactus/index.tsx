import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionContact from "components/SectionContact/SectionContact";
import SectionInquiryForm from "components/SectionInquiryForm/SectionInquiryForm";
import SectionProducts from "components/SectionProducts/SectionProducts";
import React from "react";
import img from "public/assets/images/dummyProduct.png";

const ContactUsPage = () => {
  return (
    <div>
      <SectionInquiryForm />
      <SectionContact />
    </div>
  );
};

export default ContactUsPage;
