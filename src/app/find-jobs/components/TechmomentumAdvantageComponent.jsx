import "../style.css";
import Image from "next/image";

const TechmomentumAdvantageComponent = () => {
  let advantageData = [
    ["Program Duration", "3-4 Months", "15-45 hrs", "4-12 Months"],
    ["Comprehensive Job Ready Syllabus", "red-tick", "red-tick", "green-tick"],
    ["% of Practical In Whole Program", "20%-30%", "10%-15%", "40%-55%"],
    ["Capstone Industry Projects", "2-3 Project", "red-tick", "5-10 Project"],
    [
      "Min yrs of Industry Experience Trainer",
      "0-2 year",
      "1-4 year",
      "2-10 year",
    ],
  ];
  let [
    courseCurriculum,
    Local_Training_Institute,
    online_platform,
    tech_momentum,
    min_yrs,
  ] = advantageData;
  return (
    <section className=" w-[100vw] box-border bg-[#04050A] pt-[30px] pb-[60px] md:pb-[30px] ">
      {/* Heading Section */}
      <div className=" flex flex-wrap justify-between w-[90%] md:w-full md:mx-0 h-[20vh] md:h-[7vh] mx-auto ">
        <div className="w-[48%] md:h-[100%] text-[#78b6ff] font-semibold text-3xl uppercase flex justify-start items-start mt-12 md:mt-[0px]">
          <h1 className="w-1/2 text-start text-3xl ml-[90px] md:ml-[20px] md:text-[16px] md:leading-6 ">
            TechMomentum Advantage
          </h1>
        </div>
        <div className="w-[45%] h-[22vh] md:h-full flex items-end">
          <Image
            width={300}
            height={400}
            quality={100}
            className="w-full h-full"
            alt="thumbnail"
            src="/group-117011.png"
          />{" "}
        </div>
      </div>
      {/* Horizontal bar */}
      <div className="  w-full h-[53px] md:h-[20px] barBackground mb-12"></div>
      {/* Content Section */}
      <div className="w-[80%] md:w-[90%] mx-auto md:my-6 my-10 py-3 md:py-0 flex flex-col">
        <div className="w-full my-3 ">
          <h1 className="uppercase  max-w-full text-[#78b6ff] text-start font-semibold text-3xl md:text-[18px] tracking-wide">
            Why Choose TechMomentum?
          </h1>
          <p className="text-base md:hidden text-gray-300 md:text-[16px]">
            Check out what sets us apart and makes our programs the best online
            training and certification courses in India
          </p>
        </div>
        <div className="w-[90%] md:w-[100%] h-[50vh] md:h-[16vh] mt-[30px]  flex justify-between gap-6 text-white">
          <div className="w-[33%] md:w-[30%] h-full flex flex-col justify-between box-border ">
            <div className="flex flex-col gap-[10px] ">
              <h1 className=" text-end md:text-start md:text-sm font-medium text-2xl">
                Skill Based learning
              </h1>
              <p className="text-base md:hidden text-end font-medium text-gray-300 xl:text-[16px]">
                Since our inception in 2004, ValueCoders has been delivering IT
                outsourcing services{" "}
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className=" text-end md:text-start  md:text-sm font-medium text-2xl">
                Skill Based learning
              </h1>
              <p className="text-base md:hidden text-end font-medium text-gray-300 ">
                Since our inception in 2004, ValueCoders has been delivering IT
                outsourcing services{" "}
              </p>
            </div>
          </div>
          <div className="w-[33%] md:w-[40%] h-full flex justify-center items-center bg-[#0025A9] bg-opacity-[0.1]">
            <Image
              width={500}
              height={500}
              className="w-[200px] md:w-[100px]"
              alt="Center image"
              src="/ellipse-680@2x.png"
            />
          </div>
          <div className="w-[33%] md:w-[30%] h-full flex flex-col justify-between">
            <div className="flex flex-col gap-[10px]">
              <h1 className=" text-start md:text-sm font-medium text-2xl">
                Skill Based learning
              </h1>
              <p className="text-base md:hidden font-medium text-gray-300 ">
                Since our inception in 2004, ValueCoders has been delivering IT
                outsourcing services{" "}
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className=" text-start md:text-sm font-medium text-2xl">
                Skill Based learning
              </h1>
              <p className="text-base md:hidden font-medium text-gray-300 ">
                Since our inception in 2004, ValueCoders has been delivering IT
                outsourcing services{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="hidden md:block mt-10 py-2 w-full mx-auto h-auto text-white">
          <div className="flex flex-col gap-[5px] mb-3">
            <h1 className=" text-start font-semibold text-[20px]">
              Skill Based learning
            </h1>
            <p className="text-base font-normal text-[16px] text-gray-300">
              Since our inception in 2004, ValueCoders has been delivering IT
              outsourcing services{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[5px] mb-3">
            <h1 className=" text-start font-semibold text-[20px]">
              Skill Based learning
            </h1>
            <p className="text-base font-normal text-[16px] text-gray-300">
              Since our inception in 2004, ValueCoders has been delivering IT
              outsourcing services{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[5px] mb-3">
            <h1 className=" text-start font-semibold text-[20px]">
              Skill Based learning
            </h1>
            <p className="text-base font-normal text-[16px] text-gray-300">
              Since our inception in 2004, ValueCoders has been delivering IT
              outsourcing services{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[5px] mb-3">
            <h1 className=" text-start font-semibold text-[20px]">
              Skill Based learning
            </h1>
            <p className="text-base font-normal text-[16px] text-gray-300">
              Since our inception in 2004, ValueCoders has been delivering IT
              outsourcing services{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Graphs Section */}
      <div className="w-[80%] md:w-[95%] mx-auto flex flex-col justify-start gap-[179px] mt-[10px]">
        {/* TechMomentum Advantages Second Section */}
        <div className="w-full ">
          <h1 className="text-[#78B6FF] md:text-xl md:w-1/2 font-semibold text-3xl uppercase text-start mb-8">
            Techmomentum Advantage
          </h1>
          <div className="w-full flex flex-wrap md:gap-[25px] justify-between items-center">
            {/* table section */}
            <div className="w-[65%] md:w-full h-[75vh] md:h-full border border-[#A1CCFF] rounded-md">
              <table className="w-full h-full table-fixed bg-[#1F1F1F] rounded-md">
                <thead className="">
                  <tr>
                    <th className="md:text-[12px] py-4 text-center md:text-start text-[14px] font-semibold  uppercase text-[#A1CCFF] md:pl-2">
                      Course Curriculum
                    </th>
                    <th className="md:text-[12px] py-4 text-center  text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                      Local Training Institute
                    </th>
                    <th className="md:text-[12px] py-4 text-center  text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                      Online Platform
                    </th>
                    <th className="md:text-[12px] py-4 text-center  text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                      Tech Momentum
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {/* coursecurriculum row */}
                  <tr className="md:border-0 border-b border-slate-800">
                    {courseCurriculum.map((cc, index) => {
                      return (
                        <td
                          key={index}
                          className="px-6 md:px-3 py-4 text-center text-sm md:text-[12px] font-semibold text-white"
                        >
                          {cc === "red-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/red-tick.png"
                                alt="red-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : cc === "green-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/green-tick.png"
                                alt="green-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : cc === "Program Duration" ? (
                            <p className="text-start">{cc}</p>
                          ) : (
                            cc
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* local training institute row */}
                  <tr className="md:border-0 border-b border-slate-800">
                    {Local_Training_Institute.map((lt, index) => {
                      return (
                        <td
                          key={index}
                          className="px-6 md:px-3 py-4 text-center text-sm md:text-[12px] font-semibold text-white"
                        >
                          {lt === "red-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/red-tick.png"
                                alt="red-tick"
                                className="mx-auto "
                              />
                            </div>
                          ) : lt === "green-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/green-tick.png"
                                alt="green-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : lt === "Comprehensive Job Ready Syllabus" ? (
                            <p className="text-start">{lt}</p>
                          ) : (
                            lt
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* online platform column */}
                  <tr className="md:border-0 border-b border-slate-800">
                    {online_platform.map((op, index) => {
                      return (
                        <td
                          key={index}
                          className="px-6 md:px-3 py-4 text-center text-sm md:text-[12px] font-semibold text-white"
                        >
                          {op === "red-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/red-tick.png"
                                alt="red-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : op === "green-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/green-tick.png"
                                alt="green-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : op === "% of Practical In Whole Program" ? (
                            <p className="text-start">{op}</p>
                          ) : (
                            op
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* tech momentum column */}
                  <tr className="md:border-0 border-b border-slate-800">
                    {tech_momentum.map((tm, index) => {
                      return (
                        <td
                          key={index}
                          className="px-6 md:px-3 py-4 text-center text-sm md:text-[12px] font-semibold text-white"
                        >
                          {tm === "red-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/red-tick.png"
                                alt="red-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : tm === "green-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/green-tick.png"
                                alt="green-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : tm === "Capstone Industry Projects" ? (
                            <p className="text-start">{tm}</p>
                          ) : (
                            tm
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {/* Min yrs column */}
                  <tr className="">
                    {min_yrs.map((my, index) => {
                      return (
                        <td
                          key={index}
                          className="px-6 md:px-3 py-4 text-center text-sm md:text-[12px] font-semibold text-white"
                        >
                          {my === "red-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/red-tick.png"
                                alt="red-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : my === "green-tick" ? (
                            <div className="flex justify-center">
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "24px", height: "24px" }}
                                src="/green-tick.png"
                                alt="green-tick"
                                className="mx-auto"
                              />
                            </div>
                          ) : my ===
                            "Min yrs of Industry Experience Trainer" ? (
                            <p className="text-start">{my}</p>
                          ) : (
                            my
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* graph section */}
            <div className="w-[33%] md:w-full h-[75vh] md:h-[50vh] p-3 rounded-md bg-[#1F1F1F] border border-[#A1CCFF]">
              <div className="w-full h-full relative ">
                <div className="flex flex-col justify-end gap-3 h-full w-full">
                  <div className="flex items-end  box-border border-b-4  border-[#27296C] w-[95%]">
                    <div className="barBg h-[130px] rounded-t-sm ms-14 "></div>
                    <div className="barBg h-[75px] rounded-t-sm ms-10"></div>
                    <div className="barBg h-[200px] rounded-t-sm mx-auto"></div>
                  </div>
                  <div className="w-full flex box-border ms-2 text-white">
                    <div className="w-[40%] font-semibold text-wrap text-[14px] md:text-[11px] text-center opacity-80 mx-auto">
                      Local{" "}
                      <span className="inline-block">Training Institute</span>
                    </div>
                    <div className="w-[20%] font-semibold opacity-80 text-[14px] md:text-[11px] text-center mx-auto pe-8">
                      Online Platform
                    </div>
                    <div className="w-[33%] font-semibold opacity-80 text-[14px] md:text-[11px] text-end pe-3 md:pe-3">
                      TechMomentum
                    </div>
                  </div>
                </div>
                <div className="h-[63vh] md:h-[40vh] absolute bottom-10 left-6 gradient_border_left">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechmomentumAdvantageComponent;
