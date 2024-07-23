const WhyTechmomentum = () => {
  let cardData = [
    {
      title: "Zero Cost Hiring",
      points: [
        "Discover Career Opportunities within our network",
        "Discover Career Opportunities within our network",
      ],
    },
    {
      title: "Montored Profiles",
      points: [
        "Discover Career Opportunities within our network",
        "Discover Career Opportunities within our network",
      ],
    },
    {
      title: "Year-Round Process",
      points: [
        "Discover Career Opportunities within our network",
        "Discover Career Opportunities within our network",
      ],
    },
    {
      title: "Zero Cost Hiring",
      points: [
        "Discover Career Opportunities within our network",
        "Discover Career Opportunities within our network",
      ],
    },
  ];
  return (
    <div className="w-[100vw] py-[50px] md:py-[30px] bg-[#0A0A0A] text-white">
      <div className="w-[80%] mx-auto md:w-[90%]">
        {/* Heading section */}
        <div className="w-full">
          <h1 className="text-[#78B6FF] font-semibold uppercase text-2xl mb-3 md:text-[20px]">
            Why Techmomentum?
          </h1>
          <p className="text-slate-400 text-[16px] md:text-[13px]">
            In this quiz, you will be tested on Core Java basics and OOPS
            concepts. There are some code snippets too to test your basic Java
            coding{" "}
          </p>
        </div>

        {/* Cards section */}
        <div className="w-full relative flex gap-3 h-[350px] my-6 md:hidden">
          <div className="w-1/4 absolute h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Zero Cost Hiring</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
            </ul>
          </div>
          <div className="w-1/4 absolute top-[100px] left-[27%] h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Montored Profiles</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
            </ul>
          </div>
          <div className="w-1/4 absolute top-0 left-[54%] h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Year-Round Process</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
            </ul>
          </div>
          <div className="w-1/4 absolute top-[100px] left-[80%] h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Zero Cost Hiring</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
              <li className="text-slate-300">
                Discover Career Opportunities within our network
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full  gap-3 h-auto my-6 flex-wrap hidden md:flex">
          {cardData.map((items, index) => (
            <div key={index} className="w-full h-auto p-6 bg-[#181D2E]">
              <h2 className="font-semibold text-md mb-3">{items.title}</h2>
              <ul className="list-disc marker:text-white marker:text-xl ps-3">
                {items.points.map((list, index) => (
                  <li key={index} className="text-slate-300">{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="w-auto flex justify-center mt-6">
          <button className="bg-transparent max-h-10 p-4 gap-1 border-2 border-white rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Start Hiring</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyTechmomentum;
