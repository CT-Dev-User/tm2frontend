"use client"
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const UpcomingBatch = () => {

  const [visibleCount, setVisibleCount] = useState(5);


  let batchData = [
    {
      date: "05/06/2024",
      timing: "8:00 AM to 9:00 AM",
      duration: "5-6 Months",
      mode: "Online",
    },
    {
      date: "05/06/2024",
      timing: "6:00 AM to 7:00 AM",
      duration: "5-6 Months",
      mode: "Offline",
    },
    {
      date: "05/06/2024",
      timing: "7:00 AM to 8:00 AM",
      duration: "5-6 Months",
      mode: "Online",
    },
    {
      date: "05/06/2024",
      timing: "8:00 AM to 9:00 AM",
      duration: "5-6 Months",
      mode: "Offline",
    },
    {
      date: "05/06/2024",
      timing: "8:00 AM to 9:00 AM",
      duration: "5-6 Months",
      mode: "Online",
    },
  ];

  const handleSeeMore = () => {
    setVisibleCount(batchData.length);
  };
  const handleSeeLess = () => {
    setVisibleCount(4);
  }

  return (
    <div id="upcoming" className={"w-full mx-auto flex gap-3 py-[60px] md:py-[20px] "}>
      <div className="w-[80%] flex justify-between mx-auto md:w-[90%]">
        {/* Batches tables section */}
        <div className="w-[70%] flex flex-col gap-10 md:w-full ">  
            <h1 className="text-[#0466C1] uppercase text-start font-semibold text-3xl tracking-wider md:tracking-normal pb-8 md:pb-1 md:text-[20px]">
              Upcoming Batches
            </h1>
          {/* Table section */}

          <div className="h-full ">
            <table className="w-full table-auto bg-white border-[1px] rounded-lg ">
              <thead>
                <tr>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold md:hidden">
                    Date
                  </th>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold md:hidden">
                    Timing
                  </th>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold md:hidden">
                    Duration
                  </th>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold md:hidden">
                    Mode
                  </th>
                  <th className="text-start py-3 px-3 text-[#0466C1] text-lg font-semibold hidden  md:table-cell w-[55%]">
                    Duration
                  </th>
                  <th className="text-start py-3 px-3 text-[#0466C1] text-lg font-semibold hidden  md:table-cell w-[40%]">
                    Timings
                  </th>
                </tr>
              </thead>
              <tbody className="md:h-[370px] overflow-y-auto">
                {batchData.slice(0, visibleCount).map((bt, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 px-2 border-b-2 md:hidden">{bt.date}</td>
                      <td className="py-3 px-2 border-b-2 md:hidden">{bt.timing}</td>
                      <td className="py-3 px-2 border-b-2 md:hidden">{bt.duration}</td>
                      <td className="py-3 px-2 border-b-2 md:hidden">{bt.mode}</td>
                      <td className="py-3 px-2 border-b-2 text-[14px] hidden md:table-cell w-1/2">
                        (Mon-Sat) {bt.duration}
                      </td>
                      <td className="py-3 px-0 border-b-2 text-[14px] hidden md:table-cell w-1/2">
                        {bt.timing}
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
               {/* button section */}
          <div className="mb-4">
            <button className="bg-white max-h-10 p-6 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0 md:hidden mt-10">
              <span className="text-[16px] md:text-[14px]">Get Next Batch Details</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
            <div className="mx-auto mt-[20px]">
              {visibleCount < batchData.length ? (
                <button
                  onClick={handleSeeMore}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hidden md:flex mx-auto"
                >
                  See More
                </button>
              ) : <button
                onClick={handleSeeLess}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hidden md:flex mx-auto"
              >
                See less
              </button>}
            </div>
          </div>
          </div>

       
        </div>

        {/* Batch Img section */}
        <div className="h-[100%] mx-auto md:hidden">
          <Image width={250} height={400} quality={100} src="/batchImg.png" alt="batch-Img" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};


export default UpcomingBatch;