import Image from "next/image";
import React from "react";

const TutionFeeCard = ({
  title,
  discount,
  content,
  CrossGBP,
  GBP,
  lowPrice,
  no,
}) => {
  return (
    <div className="w-full border-2  flex bg-white flex-col justify-between gap-2 rounded-md">
      {/* Heading section */}
      <div className="flex items-start justify-start w-full ">
        <div className="w-full flex px-3 pt-3 gap-3 font-semibold">
          <span className="w-[30px] h-[30px] flex items-center justify-center p-3 font-semibold rounded-full bg-slate-400">
            {no}
          </span>
          {title}
        </div>
        <div className="rounded-tl-none rounded-tr-md rounded-br-none rounded-bl-md [background:linear-gradient(225.25deg,_#b1ff9e,_#37ac00)] font-semibold overflow-hidden flex items-start justify-start  text-white py-2 px-3 whitespace-nowrap">
          {discount} % OFF
        </div>
      </div>

      {/* Content section */}
      <div className=" p-3">
        <p className="my-3">{content}</p>
        <div className="flex justify-between items-start">
          <div className="flex flex-col w-[25%]">
            <p className="text-xsm line-through flex text-slate-500">
              GBP {CrossGBP}
            </p>
            <p className="text-md font-medium">GBP {GBP}</p>
          </div>
          <div className="w-[20%] text-[#0466C2] text-start">
            <p className="text-[#0466C2] font-semibold">
              As low as £{lowPrice}/month{" "}
            </p>
          </div>
          <div className="w-[40%]">
            <Image width={17} height={17} src="/info.png" alt="info" />
          </div>
        </div>
      </div>

      {/* Button section */}
      <div className="my-2 p-3">
        <button className="bg-white max-h-10 px-6 py-3 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span>Enroll Now</span>
          <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
            ›
          </span>
        </button>
      </div>
    </div>
  );
};

export default TutionFeeCard;
