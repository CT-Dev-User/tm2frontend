import HeaderSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import BecomeInstructor from "./components/BecomeInstructor";
import CommunityTemplate from "./components/CommunityTemplate";
import HowItWork from "./components/HowItWorks";
import OurInstrutor from "../_CommonComponents/OurInstructorTemplate";
import AccelerateWithCommunity from "./components/AccelerateWithCommunity";
import RelatedCourses from "./components/RelatedCourses";
import WhatsAppCommunity from "./components/WhatsAppCommunity";

const CommunitiesPage = () => {
  let navItems = [
    {
      title: "Community",
      url: "#community",
    },
    {
      title: "How it Works?",
      url: "#howItWorks",
    },
    {
      title: "Network",
      url: "#network",
    },
    {
      title: "WhatsApp Community",
      url: "#whatsappCommunity",
    },
  ];
  return (
    <>
      <HeaderSection
        headerData={{
          title: "Doubts solving community",
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isFormOpen={true}
        isPointsMarquee={true}
      />
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Apply Now"}
      />
      <BecomeInstructor />
      <CommunityTemplate
        title={"Learning is better with Community."}
        subTitle={
          "Explore network and grow with the community of most passionate tech folks"
        }
        image={"/iphone1.png"}
      />
      <CommunityTemplate
        title={"Level up your skills and knowledge with like minded peers"}
        subTitle={
          "Join spaces and groups as per your own interest areas and career choices. Share knowledge, participate in discussions and post questions."
        }
        image={"/iphone2.png"}
        isAlternate={true}
      />
      <HowItWork />
      <OurInstrutor
        title={"Network with fellow learners, mentors & recruiters tor"}
        subTitle={"Faculty that brings out the best in you"}
      />
      <AccelerateWithCommunity />
      <RelatedCourses />
      {/* <WhatsAppCommunity /> */}
    </>
  );
};

export default CommunitiesPage;
