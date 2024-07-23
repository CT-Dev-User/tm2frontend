"use client";
import Image from "next/image";
import React, { useState } from "react";

const TrainPage = () => {
  const courses = [
    {
      title: "Frontend Developer",
      highLights: [
        {
          logo: "file-text",
          heading: "160+ Hours Instructor-Led Sessions",
        },
        {
          logo: "user-check",
          heading: "Mix of Classroom and Practical Sessions",
        },
        {
          logo: "grid",
          heading: "Downloadable Comprehensive Courseware",
        },
        {
          logo: "cloud",
          heading: "Master Concepts Through Case Studies and Activities",
        },
        {
          logo: "monitor",
          heading: "10+ Real-World Projects",
        },
        {
          logo: "life-buoy",
          heading: "2 Hackathons and 3 Mock Interviews",
        },
      ],
      toolsIcon: [
        "HTML5-logo",
        "Css-logo",
        "React-logo",
        "Angular-logo",
        "javaScript-logo",
      ],
      softSkillsHighLights: [
        {
          title: "Professional Spoken English Training Session",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Aptitude Test And Logical Reasoning & Critical Thinking",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Mindset+ Batch For Growth In Career",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
      ],
      inventoryAvailable: [
        {
          no: "100",
          name: "Frontend Masterclass",
        },
      ],
    },
    {
      title: "Backend Developer",
      highLights: [
        {
          logo: "file-text",
          heading: "160+ Hours Instructor-Led Sessions",
        },
        {
          logo: "user-check",
          heading: "Mix of Classroom and Practical Sessions",
        },
        {
          logo: "grid",
          heading: "Downloadable Comprehensive Courseware",
        },
        {
          logo: "cloud",
          heading: "Master Concepts Through Case Studies and Activities",
        },
        {
          logo: "monitor",
          heading: "10+ Real-World Projects",
        },
        {
          logo: "life-buoy",
          heading: "2 Hackathons and 3 Mock Interviews",
        },
      ],
      toolsIcon: [
        "HTML5-logo",
        "Css-logo",
        "React-logo",
        "Angular-logo",
        "javaScript-logo",
      ],
      softSkillsHighLights: [
        {
          title: "Professional Spoken English Training Session",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Aptitude Test And Logical Reasoning & Critical Thinking",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Mindset+ Batch For Growth In Career",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
      ],
      inventoryAvailable: [
        {
          no: "100",
          name: "Frontend Masterclass",
        },
      ],
    },
    {
      title: "Web Developer",
      highLights: [
        {
          logo: "file-text",
          heading: "160+ Hours Instructor-Led Sessions",
        },
        {
          logo: "user-check",
          heading: "Mix of Classroom and Practical Sessions",
        },
        {
          logo: "grid",
          heading: "Downloadable Comprehensive Courseware",
        },
        {
          logo: "cloud",
          heading: "Master Concepts Through Case Studies and Activities",
        },
        {
          logo: "monitor",
          heading: "10+ Real-World Projects",
        },
        {
          logo: "life-buoy",
          heading: "2 Hackathons and 3 Mock Interviews",
        },
      ],
      toolsIcon: [
        "HTML5-logo",
        "Css-logo",
        "React-logo",
        "Angular-logo",
        "javaScript-logo",
      ],
      softSkillsHighLights: [
        {
          title: "Professional Spoken English Training Session",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Aptitude Test And Logical Reasoning & Critical Thinking",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Mindset+ Batch For Growth In Career",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
      ],
      inventoryAvailable: [
        {
          no: "100",
          name: "Frontend Masterclass",
        },
      ],
    },
    {
      title: "AI & ML",
      highLights: [
        {
          logo: "file-text",
          heading: "160+ Hours Instructor-Led Sessions",
        },
        {
          logo: "user-check",
          heading: "Mix of Classroom and Practical Sessions",
        },
        {
          logo: "grid",
          heading: "Downloadable Comprehensive Courseware",
        },
        {
          logo: "cloud",
          heading: "Master Concepts Through Case Studies and Activities",
        },
        {
          logo: "monitor",
          heading: "10+ Real-World Projects",
        },
        {
          logo: "life-buoy",
          heading: "2 Hackathons and 3 Mock Interviews",
        },
      ],
      toolsIcon: [
        "HTML5-logo",
        "Css-logo",
        "React-logo",
        "Angular-logo",
        "javaScript-logo",
      ],
      softSkillsHighLights: [
        {
          title: "Professional Spoken English Training Session",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Aptitude Test And Logical Reasoning & Critical Thinking",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
        {
          title: "Mindset+ Batch For Growth In Career",
          points: [
            "Group Discussion Training",
            "Communication",
            "Adaptability",
          ],
        },
      ],
      inventoryAvailable: [
        {
          no: "100",
          name: "Frontend Masterclass",
        },
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  let hiringFacts = [
    {
      no: "500+",
      fact: "Hiring Partners",
    },
    {
      no: "200+",
      fact: "Offers Acceptance",
    },
    {
      no: "3 Days",
      fact: "Hiring Process",
    },
    {
      no: "500+",
      fact: "Hiring Partners",
    },
  ];

  const handleSelectCourse = (title) => {
    const selected = courses.find((course) => course.title === title);
    setSelectedCourse(selected);
  };

  return (
    <div className="w-[100vw] py-[60px] bg-[#0A0A0A] text-white">
      <div className="w-[80%] md:w-[90%] mx-auto flex flex-col pb-6">
        {/* Page heading  */}
        <div className="w-full mb-4">
          <h1 className="text-3xl uppercase font-semibold text-[#78B6FF] md:text-[20px]">
            We train the right candidates for the Right roles
          </h1>
          <p className="text-sm text-start my-3">
            Since our inception in 2004, ValueCoders has been delivering IT
            outsourcing services worldwide. We combine business domain
            knowledge, proven methodologies, and the technology expertise of
            450+ skilled software professionals to yield high-quality solutions
            that add value to businesses.
          </p>
        </div>

        {/* Courses section  */}
        <div className="w-full flex flex-wrap my-6 h-auto bg-[#111111]">
          {/* Sidebar  */}
          <div className="w-[20%] rounded-sm h-[100%] md:w-full md:h-auto">
            <h2 className="font-semibold border-b-2 border-slate-500 p-4 md:border-none">
              Categories
            </h2>
            <select
              onChange={(e) => handleSelectCourse(e.target.value)}
              className="text-[16px] mx-auto hidden md:block w-[90%] p-[10px] bg-[#1B1B1B] mb-[20px] outline-none rounded-md"
            >
              {courses.map((course, index) => (
                <option
                  value={course.title}
                  key={index}
                  className="cursor-pointer hover:text-[#3e89df] text-[14px]"
                >
                  {course.title}
                </option>
              ))}
            </select>
            <ul className="md:hidden">
              <div className="flex flex-col gap-3 p-3">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectCourse(course.title)}
                    className="cursor-pointer hover:text-[#3e89df] text-[14px]"
                  >
                    {course.title}
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* Content  */}
          <div className="w-[80%] md:w-[90%] flex flex-col grow py-2 px-[20px] md:px-0 text-white box-border bg-[#0A0A0A]">
            {selectedCourse ? (
              <div className="w-full flex flex-col gap-[20px]">
                <h1 className="text-[#78B6FF] font-semibold uppercase text-xl">
                  {selectedCourse.title}
                </h1>

                {/* Technical HighLights  */}
                <div className="w-full pt-[10px] pb-[40px]">
                  <h2 className="capitalize font-semibold mb-4">
                    Technical Highlights
                  </h2>
                  <div className="w-full h-[200px] grid grid-cols-1 gap-[10px]">
                    {selectedCourse.highLights.map((hl, index) => (
                      <div
                        key={index}
                        className="text-slate-400  flex gap-3 items-center"
                      >
                        <Image
                          width={30}
                          height={30}
                          src={`/${hl.logo}.png`}
                          alt={hl.heading}
                          className=" object-contain"
                        />
                        <h2 className="text-[14px] font-semibold ">
                          {hl.heading}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>

                 {/* Tools Covered  */}
                <div className="flex flex-col gap-[20px] mt-[30px]">
                  <h2 className="capitalize font-semibold">Tools Covered</h2>
                  <div className="flex gap-4">
                    {selectedCourse.toolsIcon.map((ic, index) => {
                      return (
                        <div key={index}>
                          <Image
                            width={50}
                            height={50}
                            src={`/${ic}.png`}
                            alt={ic}
                            className=" object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Softskills Highlights  */}
                <div className="w-full my-4">
                  <h2 className="capitalize font-semibold mb-3">
                    Softskills Highlights
                  </h2>
                  <div className="flex flex-wrap gap-[10px]">
                    {selectedCourse.softSkillsHighLights.map((ss, index) => {
                      return (
                        <div
                          key={index}
                          className="w-[30%] md:w-full flex flex-col rounded-md overflow-hidden"
                        >
                          <div className="text-[#78B6FF] text-[16px] tracking-wide bg-[#141414] p-3 box-border h-[100px]">
                            {ss.title}
                          </div>
                          <div className="p-3">
                            <ul className="ps-3 list-disc marker:text-[#78B6FF] marker:text-xl">
                              {ss.points.map((pt, index) => {
                                return (
                                  <li key={index} className="py-1 text-[14px]">
                                    {pt}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Inventory Available  */}
                <div className="w-full mb-4 flex flex-col">
                  <h2 className="capitalize font-semibold mb-3">
                    Inventory Available
                  </h2>
                  <div className="flex flex-wrap items-center gap-6">
                    {selectedCourse.inventoryAvailable.map((val, index) => {
                      return (
                        <div
                          key={index}
                          className="p-4 bg-[#141414] rounded-md w-[25%] md:w-full h-[100px] flex flex-col items-center"
                        >
                          <h1 className="font-semibold text-2xl">{`${val.no}+`}</h1>
                          <p className="text-sm text-slate-400">{val.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <p>Select a course to see the details.</p>
            )}
          </div>
        </div>

        {/* Hiring Facts section  */}
        <div className="w-full flex flex-col">
          <h2 className="capitalize text-[#78B6FF] font-semibold mb-3 text-xl">
            Hiring Facts
          </h2>
          <div className="flex gap-6 md:gap-2 flex-wrap md:justify-center">
            {hiringFacts.map((hf, index) => {
              return (
                <div
                  key={index}
                  className="box-border w-[250px] md:w-[80%] p-5 my-4 flex flex-col items-center justify-between bg-[#02204C] text-white"
                >
                  <h2 className="capitalize text-xl font-semibold mb-3">
                    {hf.no}
                  </h2>
                  <div className="flex items-center gap-6">
                    <p className="text-sm text-slate-400">{hf.fact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

         {/* button  */}
        <div className="w-auto flex justify-center mt-6">
          <button className="box-border bg-transparent max-h-10 p-4 gap-1 border-2 border-white rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
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

export default TrainPage;
