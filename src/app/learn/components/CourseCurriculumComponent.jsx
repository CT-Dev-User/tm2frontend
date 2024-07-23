"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseDropDown from "./CourseDropDown.jsx";
import { useState } from "react";
import Image from "next/image.js";

const CourseCurriculum = ({}) => {
  const [isHovered, setIsHovered] = useState(false);

  let handleHover = () => {
    return !setIsHovered;
  };
  let courseData = [
    {
      title: "MS Excel",
      content: [
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
      ],
    },
    {
      title: "SQL Basics",
      content: [
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
      ],
    },
    {
      title: "Data Analysis Using SQL",
      content: [
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
      ],
    },
    {
      title: "Data Visualization with tabula",
      content: [
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
      ],
    },
    {
      title: "Social Media Marketing",
      content: [
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
        [
          "Formulas in Excel",
          "Statistical Analysis",
          "Introduction to Other Features",
          "Management and Measurement of Analytics",
        ],
      ],
    },
  ];

  let carouselData = [
    {
      profile: "ellipse1",
      name: "Pranay Gaikwad",
      role: "UI / UX intern, Conscientious Tech",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide.Since our inception in 2004, ValueCoders has been delivering IT",
      tags: [
        "Best in Value",
        "Excellent Mentors",
        "Affordable",
        "Best Curriculum",
      ],
    },
    {
      profile: "ellipse1",
      name: "Pranay Gaikwad",
      role: "UI / UX intern, Conscientious Tech",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide.Since our inception in 2004, ValueCoders has been delivering IT",
      tags: [
        "Best in Value",
        "Excellent Mentors",
        "Affordable",
        "Best Curriculum",
      ],
    },
    {
      profile: "ellipse1",
      name: "Pranay Gaikwad",
      role: "UI / UX intern, Conscientious Tech",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide.Since our inception in 2004, ValueCoders has been delivering IT",
      tags: [
        "Best in Value",
        "Excellent Mentors",
        "Affordable",
        "Best Curriculum",
      ],
    },
  ];
  return (
    <div id="curriculum" className="w-[100%] mx-auto flex flex-col gap-3 py-[10px] md:py-[30px] text-left relative">
      {/* Heading Section */}
      <div className="w-[80%] mx-auto flex justify-between md:w-[90%]">
        <div className="flex flex-col gap-3 md:gap-0 md:w-full w-[70%]">
          <h1 className="text-[#0466C1] uppercase md:py-0 text-start font-semibold text-3xl tracking-wider md:tracking-normal md:text-[20px]">
            Course Curriculum
          </h1>
          <p className="text-md text-gray-2900 md:text-[16px]">
            Faculty that brings out the best in you
          </p>
        </div>
        <div className=" md:hidden w-[20%]">
          <a href="/certificate.png" download>
            <button
              onMouseOver={handleHover}
              onMouseLeave={handleHover}
              className="bg-white max-h-10 p-6 gap-1 border-2 border-black flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0 rounded-md md:hidden"
            >
              <span>DownLoad Brochure</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                {isHovered ? (
                  <Image width={20} height={20} style={{width: "20px", height: "20px"}} src="/white-download.png" alt="downloadIcon" />
                ) : (
                  <Image width={20} height={20} style={{width: "20px", height: "20px"}}
                    src="/download-icon.png"
                    alt="downloadIcon"
                    className="text-lg"
                  />
                )}
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Dropdown Section */}
      <div className="w-[80%] mx-auto flex justify-between my-14 md:my-3 md:w-full">
        <div className="w-[100%] md:w-[90%] mx-auto">
          {courseData.map((c, index) => {
            return (
              <CourseDropDown
                key={index}
                courseName={c.title}
                contentData={c.content}
              />
            );
          })}
        </div>
        <div className="md:hidden absolute right-1 shadow-md">
          <butto>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_4137_6197)">
                <rect
                  width="60"
                  height="60"
                  rx="30"
                  transform="matrix(-1 0 0 1 62 2)"
                  fillOpacity="0.8"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M31.1922 34.125C30.0206 32.9534 30.0206 31.0539 31.1922 29.8824L39.6775 21.397C40.6539 20.4207 40.6538 18.8378 39.6775 17.8615C38.7012 16.8852 37.1183 16.8852 36.142 17.8615L24.1212 29.8824C22.9496 31.0539 22.9496 32.9534 24.1212 34.125L36.142 46.1457C37.1183 47.122 38.7012 47.122 39.6775 46.1457C40.6538 45.1694 40.6538 43.5865 39.6775 42.6102L31.1922 34.125Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_4137_6197"
                  x="0"
                  y="0"
                  width="64"
                  height="64"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4137_6197"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4137_6197"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </butto>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-[80%] mx-auto my-6 md:w-[95%]">
        <div className="w-full mx-auto md:relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[93%]  mx-auto md:w-full "
          >
            <CarouselContent>
              {carouselData.map((cd, index) => {
                return (
                  <CarouselItem
                    className="basis-[800px] w-[600px] h-[300px] md:basis-full md:h-auto"
                    key={index}
                  >
                    <div className="w-full h-[280px] md:h-auto flex items-center overflow-hidden rounded-lg border-zinc-400 flex-wrap border-2">
                      {/* Content Div */}
                      <div className=" w-[510px] h-[240px] flex flex-col justify-evenly md:w-full border-r-2 border-r-gray-400 md:border-r-0">
                        <div className=" flex gap-3 p-4 mt-4">
                          <Image
                            width={60}
                            height={60}
                            src={`/${cd.profile}.png`}
                            alt="profile-img"
                            className=" bg-cover"
                          />
                          <div className="flex flex-col">
                            <h2 className="uppercase text-lg text-[#0466C1] font-bold md:text-[16px]">
                              {cd.name}
                            </h2>
                            <p className="text-sm ">{cd.role}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="pt-1 text-[16px] md:text-[14px]">{cd.content}</p>
                        </div>
                      </div>
                      {/* Tags Div */}
                      <div className="box-border p-[20px] flex flex-col justify-center md:flex-row flex-wrap md:w-full md:justify-start">
                        {cd.tags.map((tg, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-[#5CB95A] text-white text-sm rounded-lg flex gap-2 p-2 m-2 md:mt-1"
                            >
                              <Image
                                width={20}
                                height={20}
                                style={{ width: "20px", height: "20px" }}
                                src="/check.png"
                                alt="tickmark"
                                className="w-4 h-4"
                              />
                              <p className="w-full text-[16px] md:text-[13px]">{tg}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="md:hidden"/>
            <CarouselNext className="md:hidden
            "/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;