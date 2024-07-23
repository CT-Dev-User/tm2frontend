const PastHiringProcess = ({ pastHiringData }) => {
  const HiringProcessData = [
    {
      startMonth: "July",
      endMonth: "Sep",
      dataList: [
        "Quality",
        "100+ Students Placed Successfully",
        "100+ Students Placed Successfully",
      ],
    },
    {
      startMonth: "April",
      endMonth: "Jun",
      dataList: [
        "Quality",
        "100+ Students Placed Successfully",
        "100+ Students Placed Successfully",
      ],
    },
    {
      startMonth: "Oct",
      endMonth: "Dec",
      dataList: [
        "Quality",
        "100+ Students Placed Successfully",
        "100+ Students Placed Successfully",
      ],
    },
  ];

  let { title, subTitle, batch } = pastHiringData || {};

  return (
    <div className="w-[100vw] mb-10 py-10 text-white">
      <div className="w-[80%] mx-auto md:w-[90%]">
        {/* Heading section */}
        <div>
          <h1 className="text-[#0466C1] font-semibold uppercase text-2xl mb-3 md:text-[20px]">
            {title}
          </h1>
          <p className="text-slate-500 text-[20px] md:text-[14px]">
            {subTitle}
          </p>
        </div>

        {/* Cards section */}
        <div className="w-full mt-10 flex gap-3 md:flex-wrap">
          {batch.map((item, index) => (
            <div
              key={index}
              className="w-1/3 border-[1px] rounded-lg overflow-hidden md:w-full"
            >
              <div className="w-full p-4 bg-[#0466C2] text-white font-bold">
                {item.startMonth} - {item.endMonth}
              </div>
              <div className="text-black flex flex-col p-2">
                {item.points.map((list, index) => (
                  <div key={index} className="flex gap-3 py-3 px-4">
                    <span className="bg-[#009F3F] w-6 h-6 flex items-center justify-center text-white rounded-full  text-lg font-bold md:w-4 md:h-4 md:text-[10px] md:mt-[3px]">
                      ✓
                    </span>

                    <p>{list}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-white text-black max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
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

export default PastHiringProcess;
