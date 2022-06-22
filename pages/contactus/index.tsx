import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionContact from "components/SectionContact/SectionContact";
import SectionInquiryForm from "components/SectionInquiryForm/SectionInquiryForm";
import SectionProducts from "components/SectionProducts/SectionProducts";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <ProductsHero />
      <SectionInquiryForm />
      <SectionContact />
    </div>
  );
};

export default ContactUsPage;
