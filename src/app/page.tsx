import HeroSection from "@/component/HeroSection/HeroSection";
import AboutUs from "@/component/AboutUs/AboutUs";
import ExploreMore from "@/component/exploreMore/ExploreMore";
import Courses from "@/component/Courses/header-section";
import TMAdvantage from "@/app/find-jobs/components/TechmomentumAdvantageComponent";
import LearnerBenefit from "@/component/LearnerBenefit/LearnerBenefitComponent";
import StudentsReveiw from "@/app/_CommonComponents/StudentReviewComponent";
import SuccessStories from "@/component/SuccessStories/SuccessStories";
import Collaborations from "@/component/Collaborations/Collaborations";
import Partners from "@/app/_CommonComponents/Partners";
import Potential from "@/component/Potential/PotentialComponent";
import Community from "@/component/Community/Community";
import FAQ from '@/app/_CommonComponents/FaqComponent'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ExploreMore />
      <Courses tagline={undefined} />
      <LearnerBenefit />
      <TMAdvantage />
      <StudentsReveiw
        heading={"What students are saying about us"}
        isSubHeading={false}
      />
      <SuccessStories />
      <Collaborations />
      <Partners
        partnerData={[
          { companyLogo: "/Group117160.png" },
          { companyLogo: "/Group117161.png" },
          { companyLogo: "/Group117159.png" },
          { companyLogo: "/Group117156.png" },
          { companyLogo: "/Group117162.png" },
          { companyLogo: "/Group117168.png" },
          { companyLogo: "/Group117163.png" },
          { companyLogo: "/Group117157.png" },
          { companyLogo: "/Group117155.png" },
          { companyLogo: "/Group117165.png" },
          { companyLogo: "/Group117167.png" },
          { companyLogo: "/Group117165.png" },
        ]}
      />
      <Potential />
      <Community />
      <FAQ />
    </>
  );
}
