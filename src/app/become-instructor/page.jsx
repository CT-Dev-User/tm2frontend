"use client"
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from '../_CommonComponents/Navigation'
import FliexibleMentorship from "./components/Flexible";
import WhatDoes from "./components/WhatDoes";
import WhatInIT from "./components/WhatInIT";
import WhyMentor from "./components/WhyMentor";
import HaveQuery from "./components/HaveQuery";
import BecomeInstructor from "./components/BecomeInstructor";
import { useEffect, useState } from "react";
import axios from "axios";

const BecomeInstructorPage = () => {
  let [pageData, setPageData] = useState({});
  let navItems = [
    {
      title: "Instructor",
      url: "#instructor",
    },
    {
      title: "Mentorship Way",
      url: "#mentorshipWay",
    },
    {
      title: "What",
      url: "#what",
    },
    {
      title: "Why",
      url: "#why",
    },
    {
      title: "Queries",
      url: "#queries",
    }
  ];

  useEffect(() => {
    let fetchResponse = async () => {
      try {
        let response = await axios.get("https://tm2backend.vercel.app/get-become-instructor-data");
        const data = response.data[0];
        setPageData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResponse();
  }, []);

  return (
    <>
      {pageData.headerData && <HeroSection
        headerData={pageData.headerData}
        isFormOpen={true}
        isPointsMarquee={true}
      />}
      <Navigation navItemsData={navItems} isButton={true} buttonText={"Apply Now"}/>
      {pageData.becomeInstructorInfo && <BecomeInstructor instructorData={pageData.becomeInstructorInfo}/>}
      <FliexibleMentorship />
      {pageData.What_is_for_you && <WhatInIT cardData={pageData.What_is_for_you}/>}
      {pageData.whatDoesItTake && <WhatDoes data={pageData.whatDoesItTake}/>}
      {pageData.whyMentorWithUs && <WhyMentor mentorData={pageData.whyMentorWithUs}/>}
      <HaveQuery />
    </>
  );
};
export default BecomeInstructorPage;
