"use client";
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import Stats from "./components/Stats";
import CompanyHire from "./components/CompaniesHires";
import Testmonial from "@/app/_CommonComponents/StudentReviewComponent";
import Training from "./components/TrainPage";
import HowItWorks from "./components/HowItWorks";
import WhyTechmomentum from "./components/WhyTechmomentum";
import PastHiringProcess from "./components/PastHiringProcess";
import { useEffect, useState } from "react";
import axios from "axios";

const HireFromUsPage = () => {
  let [pageData, setPageData] = useState({});

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          "http://localhost:8000/get-hire-from-us-data"
        );
        setPageData(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let navItems = [
    { url: "#companies", title: "Companies" },
    { url: "#rightCandidates", title: "The Right Candidates" },
    { url: "#howItWorks", title: "How it Works?" },
    { url: "#whyChooseTm", title: "Why Choose TM?" },
    { url: "", title: "Our Past Hiring Process" },
  ];

  return (
    <>
      {pageData.headerData && (
        <HeroSection headerData={pageData.headerData} isFormOpen={true} />
      )}
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Apply Now"}
      />
      <Stats />
      {pageData.companiesHireFromUs && <CompanyHire hiringData={pageData.companiesHireFromUs} />}
      <Testmonial heading={"Testimonials"} />
      <Training />
      <HowItWorks />
      <WhyTechmomentum />
      {pageData.pastHiringProcessOverview && <PastHiringProcess pastHiringData={pageData.pastHiringProcessOverview}/>}
    </>
  );
};

export default HireFromUsPage;
