import axios from "axios";
import ProductsHero from "components/ProductsHero/ProductsHero";
import SectionAboutus from "components/SectionAboutus/SectionAboutus";
import SectionDetails from "components/SectionDetails/SectionDetails";
import SectionVideo from "components/SectionVideo/SectionVideo";
import { baseURL } from "config";
import { useRouter } from "next/router";
import AboutusPage from "pages/aboutus";
import React, { useEffect, useState } from "react";

const ServicePage = () => {
  const [serviceData, setServiceData] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get(
        `${baseURL}/api/services?populate=*&filters[slug][$eq]=${router.query.serviceID}`
      )
      .then((res) => {
        console.log(res.data);
        setServiceData(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [router.asPath]);

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
        description={serviceData?.attributes?.description}
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

export default ServicePage;
