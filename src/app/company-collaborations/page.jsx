import HeroSection from "../_CommonComponents/HeroSection";
import Highlights from "./components/Highlights";
import MouCollaborations from "./components/MouCollaboration";
import OurPartners from "./components/OurPartners";
import Collaborations from "./components/Collaborations";
import CompanyCollaborations from "./components/CompanyCollaborations";
import FAQ from "../_CommonComponents/FaqComponent";
import QueryComponent from "../_CommonComponents/QueryComponent";

const page = () => {
  return (
    <>
      <HeroSection
        headerData={{
          title: (
            <span className="text-[#78B6FF]">
              Company Collaborations - MOU,s
            </span>
          ),
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isFormOpen={true}
        isCompanyMarquee={true}
      />
      <Highlights />
      <MouCollaborations />
      <OurPartners />
      <Collaborations />
      <CompanyCollaborations />
      <FAQ />
      <QueryComponent />
    </>
  );
};

export default page;
