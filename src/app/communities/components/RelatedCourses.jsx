"use client"
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "../style.css";
import Image from "next/image";

const RelatedCourses = () => {

  let cardData = [
    {
      img: "/laptop-img.png",
      title: "Full Stack .Net Development",
      rating: "5.2",
      ratingCount: "20",
      enrollments: "120",
    },
    {
      img: "/laptop-img.png",
      title: "Full Stack MERN Development",
      rating: "5.2",
      ratingCount: "20",
      enrollments: "120",
    },
    {
      img: "/laptop-img.png",
      title: "Android / IOS Development",
      rating: "5.2",
      ratingCount: "20",
      enrollments: "120",
    },
    {
      img: "/laptop-img.png",
      title: "Java Certification Training",
      rating: "5.2",
      ratingCount: "20",
      enrollments: "120",
    },
    {
      img: "/laptop-img.png",
      title: "Java Certification Training",
      rating: "5.2",
      ratingCount: "20",
      enrollments: "120",
    },
    {
      img: "/laptop-img.png",
      title: "Java Certification Training",
      rating: "5.2",
      ratingCount: "20",
      enrollments: "120",
    },
  ];

  return (
    <div className="w-full pb-[30px] md:pb-[50px]">
      <div className='w-[80%] mx-auto md:w-[90%]'>
        <h1 className="text-2xl my-3 uppercase text-[#0466C1] font-bold">
          Related Course
        </h1>
        <p className="mb-4">
          Learn from the certified and real time working professionals.
        </p>
      </div>
      <div className="w-[80%] mx-auto md:w-[90%]">
        {/* Carousel section  */}
        <div className="w-[100%] mt-[20px]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="bg-white flex justify-between gap-[2px] h-auto w-full">
              {cardData.map((cd, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="basis-1/4 md:basis-full"
                  >
                    <div className=" bg-[#FAFAFA] rounded-lg w-full h-full flex flex-col justify-between border-2 border-slate-200">
                      <div className="h-[150px] relative rounded-lg md:w-full">
                        <Image
                          width={500}
                          height={500}
                          quality={100}
                          style={{ width: '100%', height: '100%' }}
                          src={cd.img}
                          alt={cd}
                          className="w-full h-full object-cover rounded-t-md"
                        />
                        <div className="absolute top-0 right-0 purple_gradient px-3 py-1 rounded-tr-md rounded-bl-md text-white">
                          Popular
                        </div>
                      </div>
                      <div className="w-full p-2">
                        {/* title  */}
                        <h2 className="text-lg pb-3 text-[#03006D] font-semibold">
                          {cd.title}
                        </h2>

                        {/* rating section  */}
                        <div className="flex gap-3 mb-6">
                          <div className="bg-red-100 flex justify-center items-center gap-2 px-3 rounded-md">
                            <p className="text-sm font-semibold">{cd.rating}</p>
                            <Image
                              width={500}
                              height={500}
                              quality={100}
                              src="/yellow-star.png"
                              alt="star"
                              className="w-3 h-3"
                            />
                          </div>
                          <div className="text-slate-500">{`${cd.ratingCount} Rating`}</div>
                        </div>

                        {/* button section  */}
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1">
                            <Image
                              width={500}
                              height={500}
                              quality={100}
                              src="/circle-tick.png"
                              alt="tick"
                              className="w-6 h-6"
                            />
                            <p className="text-slate-500 text-sm">{`${cd.enrollments} Enrollments`}</p>
                          </div>
                          <button className="bg-white px-1 py-1 border-[1px] border-black rounded-md flex items-center font-normal hover:bg-[#0c8ce9] hover:text-white hover:border-0">
                            <span className="text-sm">View Program</span>
                            <span className="font-normal text-sm ml-1">
                              ›
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className='md:hidden'/>
            <CarouselNext className='md:hidden'/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;