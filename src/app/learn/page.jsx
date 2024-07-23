"use client"
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "@/app/_CommonComponents/Navigation";
import AboutCourse from "./components/AboutCourseComponents";
import Curriculum from "./components/CourseCurriculumComponent";
// import Modal from './components/Modal'
import Skills from "./components/SkillsComponent";
import RelevantProjects from "./components/IndustryProjectComponent";
import UpcomingBatches from "./components/UpcomingBatchComponent";
import TutionFees from "./components/TutionFeeComponent";
import EarnCertificate from "./components/EarnCertificateComponent";
import PlacementPlus from "./components/PlacementPlusComponent";
import ApplyJobRoles from "./components/ApplyJobsComponent";
import TMAdvantage from "./components/AdvantageComponent";
import OurInstructor from "../_CommonComponents/OurInstructorTemplate";
import StudentReview from "@/app/_CommonComponents/StudentReviewComponent";
import FAQ from "../_CommonComponents/FaqComponent";
import Blogs from "../_CommonComponents/BlogPageComponent";
import Queries from "../_CommonComponents/QueryComponent";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const LearnPage = () => {
  // const searchParams = useSearchParams();
  // let [category, setCategory] = useState("")
  // let [learnData, setLearnData] = useState([])

  // useEffect(()=>{
  //   const courseCategory = searchParams.get("category") || "";
  // }, [searchParams])

  let navItems = [
    {
      title: "Overview",
      url: "#overview",
    },
    {
      title: "Curriculum",
      url: "#curriculum",
    },
    {
      title: "Project",
      url: "#project",
    },
    {
      title: "Upcoming",
      url: "#upcoming",
    },
    {
      title: "placement",
      url: "#placement",
    },
    {
      title: "Advantage",
      url: "#advantage",
    },
    {
      title: "FAQs",
      url: "#faq",
    },
  ];
  return (
    <>
      <HeroSection
        headerData={{
          title: (
            <>
              Learn <span className="text-[#78ECFC]">Data Science</span>,
              Wrangle Massive <span className="text-[#78ECFC]">Data Sets</span>,
              And Get Hired As A{" "}
              <span className="text-[#78ECFC]">Data Scientist</span>
            </>
          ),
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/background@3x.png",
        }}
        isFormOpen={true}
      />
      <Navigation navItemsData={navItems} isButton={false} />
      <AboutCourse />
      <Curriculum />
      {/* <Modal /> */}
      <Skills />
      <RelevantProjects />
      <UpcomingBatches />
      <TutionFees />
      <EarnCertificate />
      <PlacementPlus />
      <ApplyJobRoles />
      <TMAdvantage />
      <OurInstructor
        title={"Our Instructor"}
        subTitle={"Faculty that brings out the best in you"}
      />
      <StudentReview heading={"Testimonials"} />
      <FAQ />
      <Blogs isAlternate={true} />
    </>
  );
};

export default LearnPage;
