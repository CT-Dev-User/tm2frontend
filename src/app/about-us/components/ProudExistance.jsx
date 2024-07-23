import Image from "next/image";
import React from "react";
import "../contact.css";

const ProudExistance = () => {
  const mobileViewGraphData = [
    {
      step: "Step 1",
      year: "2020",
      desc: "Conscientious Technology",
      color: "#0083CD",
    },

    {
      step: "Step 2",
      year: "2021",
      desc: "In Corporated as a Company having more than 20 People Team ",
    },

    {
      step: "Step 3",
      year: "2022",
      desc: "In Corporated as a Company having more than 20 People Team ",
    },

    {
      step: "Step 4",
      year: "2023",
      desc: "In Corporated as a Company having more than 20 People Team ",
    },

    {
      step: "Step 5",
      year: "2024",
      desc: "In Corporated as a Company having more than 20 People Team ",
    },
  ];

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <div
      id="ourJourney"
      className="w-[100vw] md:p-3 md:my-6 my-8 p-3 box-border"
    >
      <div className="w-[80%] md:w-full flex flex-col mx-auto">
        <div>
          <h1 className="uppercase text-[#0466C1] text-3xl md:text-[20px] font-semibold my-3 md:my-0">
            5+ years of Proud Existence
          </h1>
          <p className="text-start my-5">
            TechMomentum is your gateway to professional growth and success in
            the digital age. Our comprehensive courses cover the latest trends
            in technology, digital marketing, and business innovation, providing
            you with the expertise to stay ahead of the curve. Join us and
            embark
          </p>
        </div>
        <div className="my-10">
          <Image
            width={500}
            height={400}
            style={imgStyling}
            src="/graph.png"
            alt="graph"
            sizes="(min-width: 375px) 100%"
            className="md:hidden"
          />
        </div>
        <div className="hidden md:block ">
          <div className="w-[100%] h-[auto] flex justify-center ">
            <div className="w-[85%] flex justify-between grow ">
              <div className="w-[50%] flex flex-col justify-start items-start ">
                {mobileViewGraphData.map((step, index) => {
                  if (index % 2 != 0) {
                    return (
                      <div
                        key={index}
                        className="w-[100%] h-[180px]  px-[10px] box-border mt-[163px] text-end"
                      >
                        <h4 className="text-[22px] font-semibold text-[#D16400]">
                          {step.year}
                        </h4>
                        <h5 className="text-[13px] font-semibold ">
                          {step.desc}
                        </h5>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
              <ul className="w-[2px] bg-[#FFC635] flex flex-col items-center gap-[155px] ">
                {mobileViewGraphData.map((items, i) => {
                  const isLastChild = i === mobileViewGraphData.length - 1;

                  return (
                    <li
                      key={i}
                      className={`w-[15px] h-[15px] bg-[#FFC635] rounded-full ${
                        isLastChild ? "last-child-marker" : ""
                      }`}
                    ></li>
                  );
                })}
              </ul>
              <div className="w-[50%] flex flex-col gap-[157px]">
                {mobileViewGraphData.map((step, index) => {
                  const isLastText = index === mobileViewGraphData.length - 1;
                  if (index % 2 == 0) {
                    return (
                      <div
                        key={index}
                        className={`w-[100%] h-[180px] px-3 box-border ${
                          isLastText ? "last-child-text" : ""
                        }`}
                      >
                        <h4
                          className={`text-[22px] font-semibold text-[#D16400]`}
                        >
                          {step.year}
                        </h4>
                        <h5
                          className={`text-[13px]  font-semibold`}
                          style={{ color: step.color ? step.color : "inherit" }}
                        >
                          {step.desc}
                        </h5>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudExistance;
