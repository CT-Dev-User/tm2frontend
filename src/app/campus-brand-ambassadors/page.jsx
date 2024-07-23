import Herosection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import BecomeAmbassador from "./components/BecomeAmbassador";
import WhyYouShouldJoin from "./components/WhyYouShouldJoin";
import ApplicationProcess from "./components/ApplicationProcess";
import PerksPage from "./components/PerksPage";
import Testimonials from "../_CommonComponents/StudentReviewComponent";
import FAQ from "../_CommonComponents/FaqComponent";

const page = () => {
  let navItems = [
    {
      title: "Ambassadors",
      url: "#ambassadors",
    },
    {
      title: "Why join",
      url: "#whyJoin",
    },
    {
      title: "Application Process",
      url: "#applicationProcess",
    },
    {
      title: "Perks & Incentives",
      url: "#perks&Incentives",
    },
    {
      title: "Testimonial",
      url: "#testimonial",
    },
    {
      title: "FAQs",
      url: "#faq",
    },
  ];

  return (
    <div>
      <Herosection
        headerData={{
          title: "Campus Brand Ambassadors program",
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isFormOpen={true}
        isPointsMarquee={true}
      />
      <Navigation navItemsData={navItems} isButton={false} />
      <BecomeAmbassador />
      <WhyYouShouldJoin />
      <ApplicationProcess />
      <PerksPage />
      <Testimonials heading={"Testimonials"} isSubHeading={true} />
      <FAQ />
    </div>
  );
};

export default page;
