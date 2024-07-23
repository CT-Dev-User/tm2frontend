"use client";
import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import GreatRewardsPage from "./components/GreatRewardsPage";
import RewardPage from "./components/RewardsPage";
import HowToWin from "./components/HowToWinPage";
import FaqComponentPage from "../_CommonComponents/FaqComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const ReferAndEarnPage = () => {
  let [pageData, setPageData] = useState({});
  let navItems = [
    {
      title: "Refer & Earn",
      url: "#refer&earn",
    },
    {
      title: "Sign Up to Earn",
      url: "#sign-up-to-earn",
    },
    {
      title: "How Win Rewards?",
      url: "#how-win-rewards",
    },
    {
      title: "FAQ's",
      url: "#faq",
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          "https://tm2backend.vercel.app/get-refer-and-earn-data"
        );
        let data = response.data[0];
        setPageData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let { heading, subTitle, headerImg } = pageData.headerData || {};

  return (
    <>
      <HeroSection
        headerData={{
          title: <span className="text-[#78ECFC]">{heading}</span>,
          subTitle: subTitle,
          headerImage: headerImg,
        }}
        isFormOpen={true}
      />
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Start Referring"}
      />
      {pageData.headerData ? (
        <GreatRewardsPage rewardData={pageData.earnGreatReward} />
      ) : (
        "Loading..."
      )}
      <RewardPage />
      <HowToWin />
      <FaqComponentPage />
    </>
  );
};

export default ReferAndEarnPage;
