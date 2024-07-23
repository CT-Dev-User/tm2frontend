"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

const InstructorComponent = ({ title, subTitle }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSeeMore = () => {
    setVisibleCount(cardData.length);
  };
  const handleSeeLess = () => {
    setVisibleCount(4);
  };
  let cardData = [
    {
      img: "inst1",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst2",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst3",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst4",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst1",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst2",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst3",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst4",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
  ];
  return (
    <div id="network" className="w-[100vw] py-[30px]">
      <div className="w-[80%] md:w-[90%] mx-auto flex flex-col gap-3 md:gap-2">
        {/* Header Section */}
        <div className="w-[90%] my-3">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-bold text-3xl md:text-[20px]">
            {title}
          </h1>
          <p>{subTitle}</p>
        </div>
        {/* Carousel section */}
        <div className="flex gap-6">
          <h2 className="capitalize text-[#0466C2] text-lg font-medium ">
            Course Creators
          </h2>
          <h2 className="capitalize text-[#0466C2] text-lg font-medium ">
            Instuctors
          </h2>
        </div>
        <div className="w-[100%] mx-auto my-10 md:hidden">
          <Carousel
            opts={{
              align: "start",
              slidesToShow: 4, // Show 4 items per frame
              slidesToScroll: 4
            }}
            className="w-full mx-auto"
          >
            <CarouselContent className="bg-white flex justify-between gap-[2px] h-[300px] w-full">
              {cardData.map((cd, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 basis-1/4 p-2 rounded mx-[2px]"
                  >
                    <div className="bg-[#FAFAFA] rounded-lg w-full h-full flex flex-col items-center box-border py-[10px]">
                      <div className="w-[90%] h-[60%] mx-auto">
                        <Image
                          width={500}
                          height={500}
                          quality={100}
                          src={`/${cd.img}.png`}
                          alt={cd}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="w-[90%] mx-auto flex flex-col gap-[10px]">
                        <h2 className="text-lg text-[#03006D] font-semibold">
                          {cd.name}
                        </h2>
                        <p className="text-[16px]">{cd.role}</p>
                        <p className="text-[14px] text-gray-500">{cd.company}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="hidden md:flex flex-col w-[100%] mx-auto mt-[20px]">
          <div className="flex flex-col gap-[10px] h-[65vh] overflow-y-auto">
            {cardData.slice(0, visibleCount).map((cd, index) => (
              <div key={index} className="bg-[#FAFAFA] rounded-lg w-full h-[15vh] flex flex-wrap justify-between border border-gray-200">
                <div className="w-[40%] h-[100%] flex justify-center items-center">
                  <Image
                    width={500}
                    height={500}
                    quality={100}
                    src={`/${cd.img}.png`}
                    alt={"Instructor Image"}
                    className="w-[80%] h-[80%] object-cover rounded"
                  />
                </div>
                <div className="w-[40%] pt-2 flex flex-col gap-[10px]">
                  <h2 className="text-[16px] text-[#03006D] font-semibold">
                    {cd.name}
                  </h2>
                  <p className="text-[14px]">{cd.role}</p>
                  <p className="text-[12px] text-gray-500">{cd.company}</p>
                </div>
                <div className="w-[20%] flex justify-center items-center">
                  <Image
                    width={500}
                    height={500}
                    quality={100}
                    src='/LinkedIn-square.png'
                    alt='LinkedIn'
                    className="w-[30px] h-[30px] object-cover rounded"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-[20px]">
            {visibleCount < cardData.length ? (
              <button
                onClick={handleSeeMore}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                See More
              </button>
            ) : <button
              onClick={handleSeeLess}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              See less
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorComponent;