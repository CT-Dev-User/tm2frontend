import Image from "next/image";
import { useState } from "react";
const IndustryProjectComponent = ({}) => {
  const [visibleCount, setVisibleCount] = useState(2);

  let popularToolsData = [
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
  ];
  let latestToolsData = [
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
  ];

  const handleSeeMore = () => {
    setVisibleCount(popularToolsData.length);
  };
  const handleSeeLess = () => {
    setVisibleCount(2);
  };

  return (
    <div id="project" className="w-[100%] mx-auto  ">
      <div className="w-[80%] md:w-[90%] mx-auto ">
        <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider mb-3 md:text-xl">
          Work on industry-relevant projects
        </h1>
        <p className="text-sm ">
          Find below an indicative list of hands-on projects during the course
          of the program
        </p>
      </div>

      {/* Master Popular Tools Section  */}
      <div className="w-[80%] md:w-[90%] flex flex-col mx-auto my-16 md:my-0">
        <h3 className="uppercase text-xl mt-4 mb-10 font-semibold text-[#0466C1] md:hidden">
          Master the popular tools
        </h3>
        <div className="w-full flex flex-wrap justify-between gap-y-[20px] leading-normal md:h-[850px] md:overflow-y-scroll">
          {popularToolsData.slice(0, visibleCount).map((pd, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 border-2 rounded-lg w-[48%] p-3 md:w-full "
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-start gap-2 ">
                    <Image
                      width={50}
                      height={50}
                      style={{ width: "50px", height: "50px" }}
                      src="/wireshark.png"
                      alt="wireshark"
                      className="w-8 h-8 md:hidden"
                    />
                    <Image
                      width={50}
                      height={50}
                      style={{ width: "30px", height: "30px" }}
                      src="/wireshark.png"
                      alt="wireshark"
                      className="md:block w-8 h-8 hidden"
                    />
                    <h6 className="uppercase text-lg font-semibold text-black tracking-[2px] md:text-sm md:tracking-normal">
                      {pd.title1}
                    </h6>
                  </div>
                  <h1 className="uppercase text-xl font-semibold text-[#03006D] tracking-wider md:text-lg md:tracking-normal">
                    {pd.title2}
                  </h1>
                  <p className="text-[17px] md:text-[16px] md:w-64 ">
                    {pd.content}
                  </p>
                  <ul className="ps-3 text-sm md:w-64">
                    {pd.points.map((pt, index) => {
                      return (
                        <li key={index} className="list-disc">
                          {pt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-wrap md:gap-4 md:mt-28">
                  {pd.icons.map((i, index) => {
                    return (
                      <div key={index}>
                        <Image
                          width={50}
                          height={50}
                          style={{ width: "50px", height: "50px" }}
                          src={`/${i}.png`}
                          alt={i}
                          className="md:hidden"
                        />
                        <Image
                          width={50}
                          height={50}
                          style={{ width: "35px", height: "35px" }}
                          src={`/${i}.png`}
                          alt={i}
                          className="hidden md:block"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-[20px]">
          {visibleCount < popularToolsData.length ? (
            <button
              onClick={handleSeeMore}
              className="px-16 py-2  text-black border-2 border-black rounded-sm"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleSeeLess}
              className="px-16 py-2  text-black border-2 border-black rounded-sm"
            >
              See less
            </button>
          )}
        </div>
      </div>

      {/* Master Latest Tools Section  */}
      <div className="w-[80%] md:hidden mx-auto my-16">
        <h3 className="uppercase text-xl my-10 font-semibold text-[#0466C1]">
          Master the latest tools
        </h3>
        <div className="w-full flex flex-wrap justify-between gap-y-[20px] leading-normal">
          {latestToolsData.map((pt, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 border-2 rounded-lg w-[48%] p-3"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-start gap-2 ">
                    <Image
                      width={50}
                      height={50}
                      style={{ width: "50px", height: "50px" }}
                      src="/wireshark.png"
                      alt="wireshark"
                      className="w-8 h-8 "
                    />
                    <h6 className="uppercase text-lg font-semibold text-black tracking-[2px]">
                      {pt.title1}
                    </h6>
                  </div>
                  <h1 className="uppercase text-xl  font-semibold text-[#03006D] tracking-wider">
                    {pt.title2}
                  </h1>
                  <p className="text-[17px]">{pt.content}</p>
                  <ul className="ps-3 text-sm">
                    {pt.points.map((pt, index) => {
                      return (
                        <li key={index} className="list-disc">
                          {pt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-wrap">
                  {pt.icons.map((i, index) => {
                    return (
                      <div key={index}>
                        <Image
                          width={50}
                          height={50}
                          style={{ width: "50px", height: "50px" }}
                          src={`/${i}.png`}
                          alt={i}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustryProjectComponent;
