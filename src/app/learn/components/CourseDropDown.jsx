"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CourseDropDown = ({ courseName, contentData }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [topic, keyTakeaway] = contentData;


  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };

  return (
    <>
      <button
        className={`w-full overflow-hidden flex flex-col items-start justify-between py-[15px] pr-[31px] pl-0.5 box-border max-w-full gap-[20px] text-left text-xl text-gray-400 border-[1px] border-slate-300`}
        id="options-menu"
        aria-expanded={isOpen}
        // aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <div className="flex justify-between w-[100%] relative shrink-0 max-w-full ">
          <div className="m-0 w-[70%] font-medium text-black flex items-center gap-3 ps-4">
            <Image
              width={20}
              height={20}
              style={{ width: "", height: "" }}
              src="/blue-point.png"
              alt="blue-point"
              className="w-[20px] h-[20] flex items-center justify-center md:w-[12px] md:h-[12px]"
            />
            <h2 className="text-[15px]">{courseName}</h2>
          </div>
          <div className=" pt-3 px-0 pb-0 ">
            {!isOpen ? <FaAngleDown className="text-[#000000]" /> : <FaAngleUp className="text-[#000000]" />}

          </div>
        </div>
      </button>
      <div
        className={`${isOpen ? "visible" : "hidden"
          } flex justify-between  ps-8 md:w-[100%] md:px-5 md:ps-0 mx-auto border-[1px] border-slate-300`}
      >
        <div className="w1/2 text-left py-4 ps-10 text-md md:ps-5">
          <h6 className="text-[19px] font-medium md:text-[17px]">Topic</h6>
          <ul>
            {topic.map((val, index) => {
              return (
                <li key={index} className="list-disc my-2 md:text-[13px] md:w-[90%] text-[16px]">
                  {val}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/2 text-left py-4 text-md">
          <h6 className="md:text-[17px] text-[19px] font-medium">KeyTakwaway</h6>
          <ul>
            {keyTakeaway.map((kt, index) => {
              return (
                <li key={index} className="list-disc my-2 md:text-[13px] text-[16px]">
                  {kt}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseDropDown;