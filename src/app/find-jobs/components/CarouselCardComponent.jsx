import Image from "next/image";
import { useMemo } from "react";

const CarouselCardComponent = ({ cardData }) => {
  let { bgGradient, courseLevel, courseName, duration, courseBenefits } =
    cardData;
  const bgGradColor = useMemo(() => {
    return {
      background: `linear-gradient(260deg,#fff,${bgGradient})`,
    };
  }, [bgGradient]);
  return (
    <div
      className={` rounded-5xs  box-border overflow-hidden flex flex-col items-start justify-between gap-20 max-w-full text-left text-base text-white font-sub-heading border-[1px] border-solid border-gray-400  w-[100%] h-[100%] rounded-lg p-5`}
      style={bgGradColor}
    >
      <div className="w-[391px] flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="rounded [background:linear-gradient(110.24deg,_#00a3ff,_#0046fb)] flex flex-row items-start justify-start py-1 px-2.5 ">
          <div className="relative font-medium inline-block min-w-[35px]">
            {courseLevel}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-2xl text-black">
          <h3 className=" font-medium ">{courseName}</h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm text-gray-1400">
            <div className="rounded-5xs bg-gray-1200 flex flex-row items-start justify-start py-1.5 gap-[4px]">
              <div
                className={`flex font-medium min-w-[125px] bg-slate-400 bg-opacity-50 px-2 py-2 rounded-lg  md:text-[11px] md:px-2`}
              >
                <Image
                  width={10}
                  height={10}
                  className="w-4 h-4 me-2 my-auto relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-12.svg"
                />
                {`Duration : ${duration} `}
              </div>
            </div>
            <div className="h-2 flex flex-row items-start justify-center text-base px-0">
              {courseBenefits.map((cb, index) => {
                return (
                  <div key={index} className="flex border-r border-black">
                    <div className="relative px-2">{cb.benefits}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <button className="text-black font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
        <span className="">View Program</span>
        <span className="ml-2 font-semibold text-2xl ">›</span>
      </button>
    </div>
  );
};

export default CarouselCardComponent;
