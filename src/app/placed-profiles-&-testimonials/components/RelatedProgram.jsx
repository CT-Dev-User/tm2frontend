import Image from "next/image";
import Link from "next/link";
import React from "react";
const RelatedProgram = () => {
  let cardData = [
    {
      img: "/rectangle-34783@2x.png",
      title: "Grow as an AI-focused founder or tech leader",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
    {
      img: "/rectangle-34783@2x.png",
      title: "Boost your confidence",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
    {
      img: "/rectangle-34783@2x.png",
      title: "Join a thriving community",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
    {
      img: "/rectangle-34783@2x.png",
      title: "Join a thriving community",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
  ];
  return (
    <div id="whyJoin" className="w-full my-10 p-3">
      <div className="w-[80%] md:w-[90%] mx-auto flex flex-col justify-between gap-6">
        {/* Heading section */}
        <div>
          <h1 className="text-[#0466C1] uppercase font-semibold text-3xl my-4">
            Related Program
          </h1>
        </div>
        {/* Card Content section */}
        <div className="w-full flex justify-between items-center gap-3 md:flex-col md:flex-wrap md:grid md:grid-cols-2">
          {cardData.map((cd, index) => {
            return (
              <div
                key={index}
                className="w-1/4 md:w-full h-[300px] flex flex-col gap-2 rounded-lg overflow-hidden border-[1px] border-slate-300 "
              >
                <div className="w-full h-[150px] relative">
                  <Image
                    src={"/AIImage.png"}
                    width={400}
                    height={100}
                    style={{ width: "100%", height: "100%" }}
                    alt="WhyYouShouldJoinImage"
                  />
                  <div className="absolute top-0 right-0 rounded-bl-md uppercase font-semibold bg-[#FFC700]">
                    <p className="w-auto text-[10px] p-2">Best Seller</p>
                  </div>
                </div>
                <div className="pt-1 px-2  md:pt-0">
                  <h1 className="text-2xl text-[#0466C1] font-semibold md:text-[18px]">
                    Data Science bootcamp with AI
                  </h1>
                  <div className="flex flex-wrap justify-between text-[#03006D] my-4">
                    <div className="flex gap-1 w-auto">
                      <Image
                        src={"/file-blue.png"}
                        width={20}
                        height={20}
                        alt="file-blue"
                      />
                      <p className="text-[12px]">Boot camp</p>
                    </div>
                    <div className="flex gap-1">
                      <Image
                        src={"/blue-star.png"}
                        width={20}
                        height={20}
                        alt="blue-star-Img"
                      />
                      <p className="text-[12px]">Placement Assistance</p>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <Image
                        src={"/calender.png"}
                        width={20}
                        height={20}
                        alt="calenderImg"
                      />
                      <p className="text-[12px]">6 Months</p>
                    </div>
                  </div>
                  <div className="flex justify-end my-3 text-[#3493EA]">
                    <Link href={"#"}>Explore Program ⮞</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RelatedProgram;