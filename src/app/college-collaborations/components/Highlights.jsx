import Image from "next/image";

const Highlights = () => {
  const highlightsData = [
    {
      heading: "160+ Hours Instructor-Led Sessions",
    },
    {
      heading: "Mix of Classroom and Practical Sessions",
    },
    {
      heading: "Downloadable Comprehensive Courseware",
    },
    {
      heading: "10+ Real-World Projects",
    },
    {
      heading: "Coaching by Experienced Digital Marketing Experts",
    },
  ];
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="w-full my-10 md:my-3 p-3">
      <div className="w-[80%] md:w-[100%] mx-auto md:mx-0 ">
        <h1 className="text-3xl text-[#0466C1] font-semibold uppercase my-6 md:my-3 md:mb-10">
          Highlights
        </h1>
        <div className="flex justify-between w-full">
          <div className="w-[45%] md:w-full bg-[#002358] text-white flex flex-col items-start md:items-center rounded-lg md:rounded-none p-3 ">
            {highlightsData.map((hl, index) => {
              return (
                <div key={index} className="my-4 md:w-full">
                  <p className="text-xl font-semibold md:text-lg" key={index}>
                    {hl.heading}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[45%] h-[350px] md:hidden">
            <Image
              width={300}
              height={200}
              style={imgStyling}
              src="/college-img.png"
              alt="college-img"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;