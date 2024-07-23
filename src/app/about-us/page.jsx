"use client";
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import AboutusPage from "./components/AboutusPage";
import OurPeople from "./components/OurPeople";
import CoreValues from "./components/CoreValues";
import ProudExistance from "./components/ProudExistance";
import OurTeam from "./components/OurTeam";
import Partners from "../_CommonComponents/Partners";
import Gallery from "./components/Gallery";
import Program from "./components/ProvideProgram";
import StudentReview from "../_CommonComponents/StudentReviewComponent";
import Query from "../_CommonComponents/QueryComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutUsPage = () => {
  let [pageData, setPageData] = useState({});
  let navItems = [
    {
      title: "Overview",
      url: "#overview",
    },
    {
      title: "Our Core Values",
      url: "#ourCoreValues",
    },
    {
      title: "Our Journey",
      url: "#ourJourney",
    },
    {
      title: "Our Team",
      url: "#ourTeam",
    },
    {
      title: "Our Partner Ecosystem",
      url: "#ourPartnerEcosystem",
    },
    {
      title: "Gallery",
      url: "#gallery",
    },
  ];

  useEffect(() => {
    let fetchResponse = async () => {
      try {
        let response = await axios.get("https://tm2backend.vercel.app/get-aboutus");
        const data = response.data[0];
        setPageData(data);
      } catch (error) {
        console.log(error);
      }                    

    };
    fetchResponse();
  }, []);
  const { heading: title, subTitle, headerImg } = pageData.headerData || {}
  return (
    <>
      {pageData.headerData ? (
        <HeroSection
          headerData={{
            title: <span className="text-[#78ECFC]">{title}</span>,
            subTitle: subTitle,
            headerImage: headerImg,
          }}
        />
      ) : (
        "Loading..."
      )}
      <Navigation navItemsData={navItems} isButton={false} />
      {pageData.aboutUsDesc ? <AboutusPage aboutUsData={pageData.aboutUsDesc}/> : "Loading..."}
      <OurPeople />
      <CoreValues />
      <ProudExistance />
      {(pageData.ourTeam) ? <OurTeam ourTeamData={pageData.ourTeam}/> : "Loading..."}
      {(pageData.ourPartener) ? <Partners partnerData={pageData.ourPartener} /> : "Loading..."}
      { (pageData.gallery) ? <Gallery  galleryImages={pageData.gallery}/>: "Loading..."}
      { (pageData.programsWeProvide) ? <Program  programData={pageData.programsWeProvide}/>: "Loading..."}
      <StudentReview heading={"Testimonials"} />
      <Query />
    </>
  );
};

export default AboutUsPage;
