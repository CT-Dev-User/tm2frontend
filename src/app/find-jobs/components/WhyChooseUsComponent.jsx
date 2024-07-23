import Image from "next/image";

const WhyChooseusComponent = ({}) => {
  return (
    <section
      id="whychoose"
      className="self-stretch bg-[#030A21] w-[100vw] h-[auto] box-border pt-[60px] pb-[20px] md:pb-[0] md:pt-0 "
    >
      <div className="w-[80%] md:w-full md:px-2 md:py-[25px] mx-auto box-border">
        <h1 className="text-4xl font-bold md:text-[24px] text-[#78b6ff]">
          {" "}
          Why TechMomentum?
        </h1>
        <p className="w-[95%] text-[17px] mt-2 md:w-[100%] md:text-[16px] self-stretch relative font-light text-[#FFFFFF] tracking-wider">
          {" "}
          Whether you&apos;re looking to break into a new industry or want to
          stay updated with the latest in your industry - gain insights from
          experts with a wealth of experience in top companies.
        </p>
      </div>
      <div className="w-[90%] px-10  flex-row items-start justify-start gap-[20px] max-w-full flex flex-wrap mx-auto mt-7 md:w-[98%] md:px-2 md:mx-auto md:gap-x-2 gap-y-3 md:justify-center md:mt-[40px]">
        <div className="w-[300px] rounded-lg max-w-full overflow-hidden  text-[#ffff] flex flex-col justify-start items-center gap-4 py-5 md:w-[47%] md:h-[250px] md:gap-1 h-[300px] relative">
          <Image
            width={300}
            height={300}
            className=" absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
            alt=""
            src="/why_tm.png"
          />
        </div>
        <div className="w-[300px] rounded-lg max-w-full overflow-hidden  bg-[#181D2E] text-[#ffff] flex flex-col justify-start items-center gap-4 py-5  md:w-[49%] md:h-[100%] md:gap-1 h-[300px]">
          <h3 className="text-[22px] font-semibold w-[80%] md:text-[18px]">
            Career Opportunities
          </h3>
          <ul className="w-[90%] mx-auto flex flex-col gap-[20px]">
            <li className="list-disc ms-4 text-[16px] md:text-[12px]">
              Discover Career Opportunities within our network
            </li>
            <li className="list-disc ms-4 text-[16px]  md:text-[12px]">
              Discover Career Opportunities within our network
            </li>
          </ul>
        </div>
        <div className="w-[300px] rounded-lg max-w-full overflow-hidden  bg-[#181D2E] text-[#ffff] flex flex-col justify-start items-center gap-4 py-5 md:h-[250px] md:gap-1 h-[300px] md:w-[47%]">
          <h3 className="text-[22px] font-semibold w-[80%] md:text-[18px]">
            Practical Approach
          </h3>
          <ul className="w-[90%] mx-auto flex flex-col gap-[20px]">
            <li className="list-disc ms-4 text-[16px] md:text-[12px]">
              Learn by doing by solving real life problems from real companies.{" "}
            </li>
            <li className="list-disc ms-4 text-[16px]  md:text-[12px]">
              Learn by doing by solving real life problems from real companies.{" "}
            </li>
          </ul>
        </div>
        <div className="w-[300px] rounded-lg max-w-full overflow-hidden bg-[#181D2E] text-[#ffff] flex flex-col justify-start items-center gap-4 py-5 md:w-[47%] md:h-[250px] md:gap-1 h-[300px]">
          <h3 className="text-[22px] font-semibold w-[80%] md:text-[18px]">
            Community at the Center
          </h3>
          <ul className="w-[90%] mx-auto flex flex-col gap-[20px]">
            <li className="list-disc ms-4 text-[16px]  md:text-[12px]">
              Discover Career Opportunities within our network
            </li>
            <li className="list-disc ms-4 text-[16px]  md:text-[12px]">
              Discover Career Opportunities within our network
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseusComponent;
