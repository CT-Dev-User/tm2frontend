const HowItWorks = () => {
  return (
    <div id="howItWorks" className="w-[100vw]  py-[60px] md:py-[30px] flex flex-col gap-6">
      <h1 className="w-[80%] md:w-[90%] text-2xl mx-auto uppercase text-[#0466C1] font-bold">
        How it works?
      </h1>
      <p className="w-[80%] md:w-[90%] mx-auto text-sm">
        In this quiz, you will be tested on Core Java basics and OOPS concepts.
        There are some code snippets too to test your basic Java coding{" "}
      </p>
      <div className="w-[80%] mx-auto flex flex-col my-3 md:hidden">
        {/* Connect with our placement team */}
        <div className="w-1/2 h-[120px] flex flex-col justify-start items-end pe-6 border-r-2 relative  border-[#0466C1]">
          <ul className="absolute top-[-25px] right-[-35px] list-disc marker:text-[#0466C1] marker:text-6xl">
            <li></li>
          </ul>
          <h2 className="text-xl text-[#0466C1] tracking-wider font-semibold pb-4">
            Connect with our placement team
          </h2>
          <p className="text-sm text-slate-600">
            Book a demo section to understand the hiring process
          </p>
        </div>

        {/* Share your requirements */}
        <div className="w-full flex justify-end">
          <div className="flex ps-6 w-1/2 h-[120px] flex-col items-start border-l-2  relative border-[#0466C1]">
            <ul className="absolute top-[-30px] left-[33px] list-disc marker:text-[#0466C1] marker:text-6xl">
              <li></li>
            </ul>
            <h2 className="text-xl text-[#0466C1] tracking-wider font-semibold pb-4">
              Share your requirements
            </h2>
            <p className="w-[80%] text-start text-sm text-slate-600">
              Receive triple- filtered candidates basic your ID
            </p>
          </div>
        </div>

        {/* Celebrate the reward with friend*/}
        <div className="flex justify-start ps-2">
          <div className="flex w-1/2 h-[120px] pe-6 flex-col justify-start items-end relative border-r-2 border-[#0466C1]">
            <ul className="absolute top-[-25px] right-[-35px] list-disc marker:text-[#0466C1] marker:text-6xl">
              <li></li>
            </ul>
            <h2 className="text-xl text-[#0466C1] tracking-wider font-semibold pb-4">
              Connect with our placement team
            </h2>
            <p className=" text-end text-sm  text-slate-600">
              Book a demo section to understand the hiring process
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div className="flex ps-6 w-1/2 h-[120px] flex-col items-start relative">
            <ul className="absolute top-[-30px] left-[38px] list-disc marker:text-[#0466C1] marker:text-6xl">
              <li></li>
            </ul>
            <h2 className="text-xl text-[#0466C1] tracking-wider font-semibold pb-4">
              Share your requirements
            </h2>
            <p className="w-[80%] text-start text-sm text-slate-600">
              Receive triple- filtered candidates basic your ID
            </p>
          </div>
        </div>
      </div>

       {/* Mobile view */}
      <div className="hidden md:block py-12 md:py-4 md:w-[90%]  mx-auto h-[50vh]">
        <div className="flex flex-col gap-[5px] mb-3">
          <h1 className=" text-start font-semibold text-[20px] md:text-[18px] text-[#0466C2]">
            Connect with our placement team
          </h1>
          <p className="text-base font-normal text-[16px] text-gray-400">
            Book a demo section to understand the hiring process
          </p>
        </div>
        <div className="flex flex-col gap-[5px] mb-3">
          <h1 className=" text-start font-semibold text-[20px] md:text-[18px] text-[#0466C2]">
            Share your requirements
          </h1>
          <p className="text-base font-normal text-[16px] text-gray-400">
            Receive triple- filtered candidates basic your ID
          </p>
        </div>
        <div className="flex flex-col gap-[5px] mb-3">
          <h1 className=" text-start font-semibold text-[20px] md:text-[18px] text-[#0466C2]">
            Core Java Concepts
          </h1>
          <p className="text-base font-normal text-[16px] text-gray-400">
            Book a demo section to understand the hiring process
          </p>
        </div>
        <div className="flex flex-col gap-[5px] mb-3">
          <h1 className=" text-start font-semibold text-[20px] md:text-[18px] text-[#0466C2]">
            Share your requirements
          </h1>
          <p className="text-base font-normal text-[16px] text-gray-400">
            Receive triple- filtered candidates basic your ID
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
