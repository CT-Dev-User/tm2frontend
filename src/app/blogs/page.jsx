import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import MostRecent from "./components/MostRecent";
import OurBlogs from "./components/OurBlogs";
import RelatedCourse from "./components/RelatedCourses";
const App = () => {
  let navItems = [
    {
      title: "Recent Blog",
      url: "#instructor",
    },
    {
      title: "Our Blogs",
      url: "#mentorshipWay",
    },
    {
      title: "Related Courses",
      url: "#what",
    },
  ];
  return (
    <>
      <HeroSection
        headerData={{
          title: "TechMomentum Blogs",
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isPointsMarquee={true}
        isFormOpen={true}
      />
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Apply Now"}
      />
      <MostRecent />
      <OurBlogs />
      <RelatedCourse />
    </>
  );
};

export default App;
