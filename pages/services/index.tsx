import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionUses from "components/SectionUses/SectionUses";
import SectionVideo from "components/SectionVideo/SectionVideo";
import { baseURL } from "config";
import React, { useEffect, useState } from "react";
import servicesImage from "public/assets/images/services.jpg";

const ServicesPage = () => {
  const [servicesData, setServicesData] = useState<any>([]);

  useEffect(() => {
    if (servicesData.length === 0) {
      axios
        .get(`${baseURL}/api/services?populate=*`)
        .then((res) => {
          setServicesData(res.data.data);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  return (
    <div>
      <ProductsHero
        image={servicesImage.src}
        title="Our Services"
        subtitle="We provide customised Mild Steel Flat Products as customers’ necessities, such as Cut-To-Length (CTL), Slitting Service, Profiling and Corrugation services and C/Z Purlin."
      />
      {/* <SectionVideo /> */}
      <SectionUses data={servicesData} />
    </div>
  );
};

export default ServicesPage;
