import Image from "next/image";
import React from "react";

const CourseCardComponents = ({ courseData }) => {
  if (!courseData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { name, position, company, profileImage, classTitle, date, time } =
    courseData;

  return (
    <div className="w-[33%] md:w-full h-[100%] bg-white rounded-md shadow-md overflow-hidden">
      <div
        className="relative w-full h-[30vh] flex justify-between items-end pb-2 "
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-3">
          <h2 className="text-lg font-bold text-black mb-2">{name}</h2>
          <p className=" text-black">
            {position}- {company}
          </p>
        </div>
        <button className="w-[100px] h-[35px] text-sm bg-gray-800 text-white bg-transparent border-2 rounded-full">
          Speaker
        </button>
      </div>
      <div className="p-4 text-black h-[30%] flex flex-col items-start gap-3">
        <div className="flex flex-col items-start">
          <h3 className="mt-6 text-2xl font-semibold text-blue-900 text-start">
            {classTitle}
          </h3>
          <p className="text-gray-700 font-semibold text-lg my-3 text-start">
            {date}
          </p>
          <p className="text-gray-700 font-semibold text-lg my-3 text-start">
            {time}
          </p>
        </div>

        <button className="p-6 bg-[transparent]  w-[50%] h-[20px] rounded-xl box-border flex text-black items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span className="">Register Now</span>
          <span className="ml-2 font-semibold text-2xl ">›</span>
        </button>
      </div>
    </div>
  );
};

export default CourseCardComponents;
