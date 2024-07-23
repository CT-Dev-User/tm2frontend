import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const AdvantageComponent = ({ }) => {
  const navArray = ["Immersive Learning", "Learn by Doing", "Cloud Labs", "Outcome-Focused"]
  const [toggledIndexes, setToggledIndexes] = useState([]);

  const toggleList = (index) => {
    setToggledIndexes((prev) => 
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const containArray = [
    { icon: "play", title: "On-demand videos", },
    { icon: "blue-file", title: "Auto-graded assessments and recall quizzes" },
    { icon: "edit", title: "Guided hands-on exercises" },
    { icon: "blue-monitor", title: "Assignments and projects", },
  ]

  const newContainArray = [
    {
      navItem: "Immersive Learning",
      data: [
        { icon: "play", title: "On-demand videos" },
        { icon: "blue-file", title: "Auto-graded assessments and recall quizzes" },
        { icon: "edit", title: "Guided hands-on exercises" },
        { icon: "blue-monitor", title: "Assignments and projects" },
      ]
    },
    {
      navItem: "Learn by Doing",
      data: [
        { icon: "play", title: "On-demand videos" },
        { icon: "blue-file", title: "Auto-graded assessments and recall quizzes" },
        { icon: "edit", title: "Guided hands-on exercises" },
        { icon: "blue-monitor", title: "Assignments and projects" },
      ]
    },
    {
      navItem: "Cloud Labs",
      data: [
        { icon: "play", title: "On-demand videos" },
        { icon: "blue-file", title: "Auto-graded assessments and recall quizzes" },
        { icon: "edit", title: "Guided hands-on exercises" },
        { icon: "blue-monitor", title: "Assignments and projects" },
      ]
    },
    {
      navItem: "Outcome-Focused",
      data: [
        { icon: "play", title: "On-demand videos" },
        { icon: "blue-file", title: "Auto-graded assessments and recall quizzes" },
        { icon: "edit", title: "Guided hands-on exercises" },
        { icon: "blue-monitor", title: "Assignments and projects" },
      ]
    }
  ];

  return (
    <div id="advantage" className="w-full py-[50px] md:py-[30px] mx-auto ">
      <div className="w-[80%] mx-auto md:w-[90%]">
        <h1 className="text-[#0466C1] uppercase py-4 text-start font-bold text-3xl md:text-[20px] ">
          The Techmomentum Advantages
        </h1>
        <p className="text-[18px] md:text-[15px]">The most effective project-based immersive learning experience</p>
      </div>
      <div className="block md:hidden w-[80%] mx-auto">
        <div className="w-[100%] mx-auto my-10 flex justify-between gap-2">
          {navArray.map((i, index) => {
            return (
              <p
                key={index}
                className="bg-red-100 text-center w-1/4 px-6 py-2 rounded-sm text-md font-semibold hover:bg-[#78B6FF] hover:text-[#03006D]"
              >
                {i}
              </p>
            );
          })}
        </div>
        <div className="w-[100%] mx-auto my-10 flex justify-between p-3">
          <div>
            {containArray.map((i, index) => {
              return (
                <div key={index} className="flex justify-start gap-3 p-6 my-3">
                  <Image
                    width={20}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                    src={`/${i.icon}.png`}
                    alt={i.icon}
                  />
                  <p className="text-[#0466C1] text-md ">{i.title}</p>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 md:hidden">
            <Image width={300} height={200}
              style={{ width: "100%", height: "100%" }}
              src="/tm-advantage-img.png"
              alt="tm-advantage-img"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[90%] mx-auto mt-4">
      {newContainArray.map((data, index) => (
        <div key={index} className="w-full h-auto">
          <div 
            className={`w-full h-[60px] rounded-lg mt-5 flex justify-between px-2 items-center cursor-pointer ${
              toggledIndexes.includes(index) ? 'bg-[#78B6FF] text-[#03006D]' : 'bg-[#E7E7E7] text-[#000000]'
            }`}
            onClick={() => toggleList(index)}
          >
            <h2 className="text-[16px] w-[80%] font-semibold">{data.navItem}</h2>
            <FaAngleDown className={`w-[20%] transform transition-transform duration-200 ${toggledIndexes.includes(index) ? 'rotate-180' : ''}`} />
          </div>
          {toggledIndexes.includes(index) && (
            <ul className="w-[95%] mx-auto py-3">
              {data.data.map((list, index) => (
                <li key={index} className="flex items-center mt-3 gap-3 p-2 bg-white shadow-sm rounded-lg">
                  <Image
                    width={60}
                    height={60}
                    style={{ width: "auto", height: "auto" }}
                    src={`/${list.icon}.png`}
                    alt={list.icon}
                    className="w-[60px] h-[60px] object-contain"
                  />
                  <p className="text-[15px] font-medium text-[#0466C1]">{list.title}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>


    </div>
  );
};

export default AdvantageComponent;