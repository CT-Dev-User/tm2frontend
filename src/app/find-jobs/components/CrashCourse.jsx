import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import CarouselCardComponent from "./CarouselCardComponent";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <div>
        <FaAngleRight className="text-black w-6 h-6" />
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <div>
        <FaAngleLeft className="text-black w-[50px] h-6" />
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrow: false,
        nextArrow: false,
        prevArrow: false,
      },
    },
  ],
};

const CrashCourse = ({ crashCourseData }) => {
  if (!crashCourseData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { Title, SubTitle, courseData } = crashCourseData;


  return (

    <div className='w-[100vw] h-[auto] box-border  py-[80px] md:py-[30px] ' id="crashCourse overflow-hidden">
      <div className='w-[80%] md:w-full md:px-3 mx-auto box-border'>
        <h1 className='text-3xl font-bold md:text-[24px] text-[#0466C1]'>  {Title}</h1>
        <p className='w-[95%] text-[17px] mt-2 md:w-[100%] md:text-[16px]'> {SubTitle}</p>
      </div>
      <div className="w-[80%] max-w-full flex justify-center my-16 mx-auto md:w-[95%] md:my-10">
        <Slider {...settings} className="w-[100%] flex justify-start">
          {courseData.map((cd, index) => (
            <div key={index} className="px-2 w-[340px]">
              <CarouselCardComponent cardData={cd} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Still Confused Section */}
      <div
        className=" w-[80%] h-[150px] bg-[linear-gradient(257.43deg,_#030a21,_#021b6a_45.13%,_#022fc4)] mx-auto  rounded-lg md:w-[95%] md:mt-0"
      >
        <div className="flex flex-row items-center justify-between w-[80%] h-[100%] mx-auto md:flex-col md:justify-evenly">
          <h1 className="font-medium text-3xl text-[white] md:text-[24px]">Still Confused ?</h1>
          <div className="h-11 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <button className="cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span className="text-white md:text-[15px]">Talk to our Consultant</span>
              <span className="ml-2 font-semibold text-white text-2xl ">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CrashCourse;