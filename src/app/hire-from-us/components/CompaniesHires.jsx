"use client";
import Image from "next/image";

const CompaniesHires = ({ hiringData }) => {
  let { subTitle, descList, companyLogos } = hiringData || {};

  return (
    <div className="w-[100vw] py-[60px] md:py-[30px]">
      <div className="w-[80%] mx-auto md:w-[90%]">
        <h2 className="my-8 md:my-3 uppercase text-3xl text-[#0466C1] font-bold md:text-[20px]">
          Companies who hire from us
        </h2>
        <div className="w-[100%] mx-auto flex items-start gap-4 justify-between md:flex-wrap">
          <div className="w-1/2 flex flex-col gap-3 md:w-full">
            <div className="w-[90%] md:w-full">
              <p className="text-start text-[18px] mb-3 md:text-[14px]">
                {subTitle}
              </p>
              <ul className=" mb-10 ps-6 md:marker:text-[#03006D]">
                {descList.map((i, index) => {
                  return (
                    <li
                      key={index}
                      className="list-disc marker:text-3xl text-[17px] md:text-[13px]"
                      style={{ verticalAlign: "bottom" }}
                    >
                      {i.title}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="text-black text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] w-[250px] h-[42px] rounded box-border flex  items-center justify-center gap-3 whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0 md:hidden">
              <span className="w-full ">Join us as a Hiring Partner</span>
              <span className="mr-6 font-semibold text-2xl w-full">›</span>
            </button>
          </div>
          {/* <div className="w-1/2 flex items-start md:w-full "> */}
          <div className="w-1/2 flex flex-wrap gap-x-3 items-start md:w-full md:h-fit md:justify-evenly mt-1">
            {companyLogos.map((val, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center w-[30%] h-14 mb-10 gap-3 md:w-[80px] md:h-auto flex-wrap"
                >
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    style={{ width: "", height: "" }}
                    src={val.logo}
                    alt={val.companyName}
                    className="h-auto w-auto "
                  />
                </div>
              );
            })}
          </div>
          <button className="text-black text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border items-center justify-center gap-3 whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0 hidden md:flex mx-auto text-center">
            <span className="w-full ">Explore Now</span>
            <span className="mr-6 font-semibold text-2xl w-full">›</span>
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CompaniesHires;
