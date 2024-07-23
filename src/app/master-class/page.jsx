"use client";
import { useState } from "react";
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import Testimonials from './components/Testimonials'
import FAQ from '../_CommonComponents/FaqComponent'
import CategoriesSection from "./components/CategoriesSection";

const App = () => {
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
      title: "Placement",
      url: "#placement",
    },
    {
      title: "Advantages",
      url: "#advantages",
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
          title: "Master Class",
          subTitle: "subTitle",
          headerImage: "/background@3x.png",
        }}
        isFormOpen={true}
        isPointsMarquee={true}
      />
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Apply Now"}
      />
      <CategoriesSection />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default App;
