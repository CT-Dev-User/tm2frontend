import Image from "next/image";

const Partners = ({ partnerData }) => {
  return (
    <div id="ourPartnerEcosystem" className="w-[100%] my-10 box-border ">
      <div className="w-[80%] md:w-[90%] mx-auto">
        <h2 className="mb-10 uppercase text-3xl md:text-2xl text-[#0466C1] font-bold ">
          OUR PARTNERS
        </h2>
        <div className="w-[100%] mx-auto md:m-0 flex md:flex-col items-start gap-4 justify-between md:justify-n">
          <div className="w-[30%] md:m-0 md:w-full flex flex-col gap-3">
            <h2 className="mb-3 capitalize text-3xl md:text-2xl md:w-full text-[#17467D] font-bold ">
              Our Strategic Alliance & Hiring Partner
            </h2>
            <p className="text-[#0466C1] text-start text-md mb-10">
              we are having alliance with more than 150 top startups and SMEs
              all across the nation.
            </p>
            <button className="text-black text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] w-[250px] h-[42px] rounded box-border flex  items-center justify-center gap-3 whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0 md:hidden">
              <span className="w-full ">Join us as a Hiring Partner</span>
              <span className="mr-6 font-semibold text-2xl w-full">›</span>
            </button>
          </div>
          <div className="w-1/2 flex items-start md:hidden">
            <div className="flex flex-wrap justify-between items-start w-full ">
              {partnerData.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-start w-1/4 "
                  >
                    <Image
                      width={150}
                      height={100}
                      src={val.companyLogo}
                      alt={val.title}
                      className="h-full w-full "
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* for mobile only */}
          <div className="hidden md:block mb:w-full items-start mb-5">
            <div className="flex flex-wrap justify-between items-start w-full ">
              {partnerData.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-start w-1/4 "
                  >
                    <Image
                      width={200}
                      height={150}
                      src={val.companyLogo}
                      alt={val.title}
                      className="h-full w-full "
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <button className="text-black text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] w-[250px] h-[42px] rounded box-border flex  items-center justify-center gap-3 whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0 shadow-md">
                <span className="w-full ">Join us as a Hiring Partner</span>
                <span className="mr-6 font-semibold text-2xl w-full">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;