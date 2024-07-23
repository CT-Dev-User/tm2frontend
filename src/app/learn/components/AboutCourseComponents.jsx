import Image from "next/image";

const AboutCourse = ({}) => {
  let navItems = [
    {
      title: "Overview",
      url: "#homepage",
    },
    {
      title: "Curriculum",
      url: "#extensive-program",
    },
    {
      title: "Project",
      url: "#crashCourse",
    },
    {
      title: "Upcoming",
      url: "#whychoose",
    },
    {
      title: "Placement",
      url: "#master-class",
    },
    {
      title: "Advantages",
      url: "#blogs",
    },
    ,
    {
      title: "FAQs",
      url: "#blogs",
    },
  ];
  const highlightsData = [
    {
      logo: "file-text",
      heading: "160+ Hours Instructor-Led Sessions",
    },
    {
      logo: "users",
      heading: "Coaching by Experienced Digital Marketing Experts",
    },
    {
      logo: "user-check",
      heading: "Mix of Classroom and Practical Sessions",
    },
    {
      logo: "video",
      heading: "Hands-on Learning With Group Exercises",
    },
    {
      logo: "grid",
      heading: "Downloadable Comprehensive Courseware",
    },
    {
      logo: "cloud",
      heading: "Master Concepts Through Case Studies and Activities",
    },
    {
      logo: "monitor",
      heading: "10+ Real-World Projects",
    },
    {
      logo: "life-buoy",
      heading: "2 Hackathons and 3 Mock Interviews",
    },
  ];

  return (
    <div
      id="overview"
      className={` w-[100%] bg-white overflow-hidden flex flex-col items-start justify-start mb-28 pb-4 box-border gap-[40px] max-w-full text-left md:mb-10 py-10`}
    >
      <div className="w-[80%] md:w-[90%] mx-auto flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="tracking-[0.03em] font-semibold inline-block max-w-full ">
          <h1 className="text-[#0466C1] uppercase  text-start font-semibold text-3xl tracking-wider md:text-2xl md:font-bold">
            About Course
          </h1>
        </div>
        <div className="self-stretch relative text-lg md:text-[16px] text-gray-900">
          Modern businesses reach more consumers through digital media than
          traditional. It is no wonder that digital marketing spends account for
          more than half of marketing spend marketing techniques to get results
          are in great demand...... Read more
        </div>
      </div>
      <div className="w-[80%] md:w-[90%] flex flex-col justify-between items-center gap-3 mx-auto rounded-lg text-left p-6 bg-[#002358] ">
        <div className="w-[90%] md:w-full mx-auto ">
          <h3 className="uppercase mt-6 text-left text-semibold text-2xl text-[#95C6FF] ">
            HighLights
          </h3>
        </div>
        <div className="w-[90%] mx-auto md:w-full">
          <div className="container mx-auto my-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:flex md:flex-col">
              {highlightsData.map((hl, index) => (
                <div
                  key={index}
                  className="text-white flex items-center space-x-4"
                >
                  <Image
                    width={50}
                    height={50}
                    src={`/${hl.logo}.png`}
                    alt={hl.heading}
                    className=" object-contain md:hidden"
                  />
                  <Image
                    width={30}
                    height={30}
                    src={`/${hl.logo}.png`}
                    alt={hl.heading}
                    className="hidden md:block object-contain "
                  />
                  <h2 className="text-lg font-semibold text-white md:text-sm">
                    {hl.heading}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;