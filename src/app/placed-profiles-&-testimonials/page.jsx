import HeroSection from "./components/HeroSection";
import Alumini from "./components/Alumini";
import RelatedProgram from "./components/RelatedProgram";
import Testimonials from "./components/Testimonials";
import FAQ from "../_CommonComponents/FaqComponent";
import QueryComponent from "../_CommonComponents/QueryComponent";

const page = () => {
  return (
    <>
      <HeroSection
        headerData={{
          title: (
            <span className="text-[#78ECFC]">
              Placed profiles & Testimonials
            </span>
          ),
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isFormOpen={true}
      />
      <Alumini />
      <RelatedProgram />
      <Testimonials />
      <FAQ />
      <QueryComponent />
    </>
  );
};

export default page;
