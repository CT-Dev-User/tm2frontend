import React from "react";
import Image from "next/image";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="w-[100vw] h-auto py-[30px] md:py-[15px] box-border ">
      <div className="w-[85%] md:w-[90%] h-auto mx-auto flex flex-wrap bg-white py-[30px]">
        <div className="w-[50%] md:w-full  box-border pr-[20px] flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[24px] text-[#0466C1] font-bold uppercase">
              About us
            </h2>
            <p className="text-[16px] md:w-full">
              TechMomentum is your gateway to professional growth and success in
              the digital age. Our comprehensive courses cover the latest trends
              in technology, digital marketing, and business innovation,
              providing you with the expertise to stay ahead of the curve. Join
              us and embark on a journey of continuous learning and achievement.
            </p>
          </div>
          <div className="md:w-[90%] flex flex-col gap-[20px] mt-6 md:mt-2 ">
            <h2 className="text-[24px] md:mb-2 text-[#0466C1] font-bold uppercase">
              Our mission
            </h2>
            <p className="text-[16px] md:w-full ">
            Domain knowledge, proven methodologies, and the technology expertise of 450+ skilled.
            </p>
            <button className="bg-white w-[160px] max-h-10 mt-8 md:mt-3 p-3 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Explore More</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>
        </div>
        <div className="w-[50%] md:hidden flex justify-end items-center">
          <Image
            src="/aboutUsImg.png"
            alt="About us"
            width={500} // Specify the width of the image
            height={500} // Specify the height of the image
            className="w-[90%] h-auto "
          />
        </div>
      </div>
      <div className="relative mt-10 md:my-[30px] w-[100%] md:w-[90%] md:mx-auto h-[30vh] md:h-auto md:no-before flex flex-wrap justify-center gap-[40px] md:gap-0 half-bg">
        <div className="w-[15%] md:w-[47%] h-auto md:h-[23vh] mt-10 md:mt-0 bg-white box-border p-[10px] flex flex-col gap-[8px] md:py-[5px] rounded-sm">
          <h2 className="font-bold text-[#0466C1] text-[20px]">601K+</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            OUR EMPLOYEES
          </h4>
          <p className="font-normal text-[#000000] text-[12px] w-[80%]">
            Workforce globally distributed highly localized
          </p>
        </div>
        <div className="w-[15%] md:w-[47%] h-auto md:h-[23vh] mt-10 md:mt-0 bg-white box-border p-[10px] flex flex-col gap-[8px] rounded-sm md:py-[5px]">
          <h2 className="font-bold text-[#0466C1] text-[20px]">152</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            NATIONALITIES
          </h4>
          <p className="font-normal text-[#000000] text-[12px] w-[80%]">
            Nationalities represented from across the globe
          </p>
        </div>
        <div className="w-[15%] md:w-[47%] h-auto md:h-[23vh] mt-10 md:mt-0 bg-white box-border p-[10px] flex flex-col gap-[8px]  rounded-sm md:py-[5px]">
          <h2 className="font-bold text-[#0466C1] text-[20px]">35.6%</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            DIVERSITY
          </h4>
          <p className="font-normal text-[#000000] text-[12px] w-[80%]">
            High demand competencies acquired. 51M hrs of learning hours in FY24
          </p>
        </div>
        <div className="w-[15%] md:w-[47%] h-auto md:h-[23vh] mt-10 md:mt-0 bg-white box-border p-[10px] flex flex-col gap-[8px]  rounded-sm md:py-[5px]">
          <h2 className="font-bold text-[#0466C1] text-[20px]">296K</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            DEVELOPMENT
          </h4>
          <p className="font-normal text-[#000000] text-[12px] w-[80%]">
            Workforce globally distributed highly localized
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
