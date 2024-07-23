"use client"
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import HelpSection from "./components/HelpSection";
import SocialMedia from "./components/SocialMedia";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactPage = () => {
  let [pageData, setPageData] = useState({});
  let navItems = [
    {
      title: "Help you",
      url: "#helpYou",
    },
    {
      title: "Social Media",
      url: "#socialMedia",
    },
    {
      title: "Locate Us",
      url: "#locateUs",
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          "https://tm2backend.vercel.app/get-contact-us-data"
        );
        let data = response.data[0];
        setPageData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let {title, subTitle, headerImage} = pageData.headerData || {}

  return (
    <>
      <HeroSection
        headerData={{
          title: <span className="text-[#78ECFC]">{title}</span>,
          subTitle:
            subTitle,
          headerImage: headerImage,
        }}
      />
      <Navigation navItemsData={navItems} isButton={false} />
      {pageData.address ? <HelpSection address={pageData.address} contactDetails={pageData.CompanyContactData} buildingImg={pageData.buildingImg}/> : "Loading..."}
      <SocialMedia />
      <Map />
    </>
  );
};

export default ContactPage;
