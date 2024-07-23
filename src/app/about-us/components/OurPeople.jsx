import Image from "next/image";
import "../contact.css";

const OurPeople = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="w-full ">
      <div className="relative w-[100%] h-[100vh] flex flex-wrap justify-center gap-[40px] items-end half-bg md:hidden">
        <div className="absolute top-32 left-80 text-white w-1/2">
          <h1 className="font-semibold text-3xl mb-6">Our People</h1>
          <div className="border-l-2 border-[#FDC500] pl-3 text-[35px] text-start tracking-wide leading-normal mb-8">
            How do you create a remarkable change? By hiring, celebrating and
            nurturing the best people from all walks of life.
          </div>
          <button className="ms-3 bg-transparent max-h-10 p-4 gap-1 border-2 border-white text-white flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Join us</span>
            <span className="ml-1 font-semibold text-2xl  flex items-start">
              <Image
                width={25}
                height={25}
                style={imgStyling}
                src="/short-right-arrow.png"
                alt="arrow right"
              />
            </span>
          </button>
        </div>
        <p className="text-white absolute top-[70%] left-[16%] uppercase font-semibold">
          About us
        </p>
        <div className="w-[15%] h-[25%] bg-white box-border p-5 flex flex-col gap-[5px] rounded-t-sm">
          <h2 className="font-normal text-[#0466C1] text-3xl px-2 py-2">
            601K+
          </h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            OUR EMPLOYEES
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            Workforce globally distributed highly localized
          </p>
        </div>
        <div className="w-[15%] h-[25%] bg-white box-border p-5 flex flex-col gap-[5px] rounded-t-sm">
          <h2 className="font-normal text-[#0466C1] text-3xl px-2 py-2">152</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            NATIONALITIES
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            Nationalities represented from across the globe
          </p>
        </div>
        <div className="w-[15%] h-[25%] bg-white box-border p-5 flex flex-col gap-[5px] rounded-t-sm">
          <h2 className="font-normal text-[#0466C1] text-3xl px-2 py-2">
            35.6%
          </h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            DIVERSITY
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            High demand competencies acquired. 51M hrs of learning hours in FY24
          </p>
        </div>
        <div className="w-[15%] h-[25%] bg-white box-border p-5 flex flex-col gap-[5px] rounded-t-sm">
          <h2 className="font-normal text-[#0466C1] text-3xl px-2 py-2">
            296K
          </h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            DEVELOPMENT
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            Workforce globally distributed highly localized
          </p>
        </div>
      </div>

      {/* for mobile */}
      <div className="hidden w-[90%] mx-auto md:flex flex-col gap-5 mt-10 w-100%">
        <div className="w-full flex gap-4">
          <div className="w-1/2 shadow-sm p-2">
            <h2 className="font-normal text-[#0466C1] text-3xl mb-2">601K+</h2>
            <h4 className="font-semibold text-[#4E84C4] text-[14px]">
              OUR EMPLOYEES
            </h4>
            <p className="font-normal text-[#000000] text-[12px]">
              Workforce globally distributed highly localized
            </p>
          </div>

          <div className="w-1/2 shadow-sm p-2">
            <h2 className="font-normal text-[#0466C1] text-3xl mb-2">601K+</h2>
            <h4 className="font-semibold text-[#4E84C4] text-[14px]">
              OUR EMPLOYEES
            </h4>
            <p className="font-normal text-[#000000] text-[12px]">
              Workforce globally distributed highly localized
            </p>
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/2 shadow-sm p-2">
            <h2 className="font-normal text-[#0466C1] text-3xl mb-2">601K+</h2>
            <h4 className="font-semibold text-[#4E84C4] text-[14px]">
              OUR EMPLOYEES
            </h4>
            <p className="font-normal text-[#000000] text-[12px]">
              Workforce globally distributed highly localized
            </p>
          </div>

          <div className="w-1/2 shadow-sm p-2">
            <h2 className="font-normal text-[#0466C1] text-3xl mb-2">601K+</h2>
            <h4 className="font-semibold text-[#4E84C4] text-[14px]">
              OUR EMPLOYEES
            </h4>
            <p className="font-normal text-[#000000] text-[12px]">
              Workforce globally distributed highly localized
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;