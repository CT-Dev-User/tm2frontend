"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";

const StudentReviews = ({ heading, isSubHeading }) => {
  let reviewData = [
    {
      video: "rectangle-34980@2x",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies,  We combine business domain knowledge, proven methodologies.",
      tags: [
        "Quality",
        "Performance",
        "Performance",
        "Accountability",
        "Skilled",
        "Skilled",
      ],
      profile: "profile-picture@2x",
      name: "Riddhi Gaikwad",
      role: "Developer",
    },
    {
      video: "rectangle-34980@2x",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies,  We combine business domain knowledge, proven methodologies.",
      tags: [
        "Quality",
        "Performance",
        "Performance",
        "Accountability",
        "Skilled",
        "Skilled",
      ],
      profile: "profile-picture@2x",
      name: "Riddhi Gaikwad",
      role: "Developer",
    },
    {
      video: "rectangle-34980@2x",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies,  We combine business domain knowledge, proven methodologies.",
      tags: [
        "Quality",
        "Performance",
        "Performance",
        "Accountability",
        "Skilled",
        "Skilled",
      ],
      profile: "profile-picture@2x",
      name: "Riddhi Gaikwad",
      role: "Developer",
    },
  ];
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <div>
          <FaAngleRight className="text-black w-6 h-6 hidden" />
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
          <FaAngleLeft className="text-black w-[50px] h-6 hidden" />
        </div>
      </div>
    );
  };
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrow: false,
    infinite: true,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
        },
      },
    ],
  };

  return (
    <div
      id="testimonial"
      className="w-[100vw] h-[auto] box-border pt-[60px] pb-[20px] md:py-[30px] "
    >
      <div className="w-[80%] md:w-[90%] mx-auto">
        <h2 className="text-3xl md:text-[24px] text-[#0466C1] font-bold ">
          {heading}
        </h2>
        <p className="w-[95%] text-[17px] mt-2 md:w-[100%] md:text-[16px]">
          In this quiz, you will be tested on Core Java basics and OOPS
          concepts. There are some code snippets too to test your basic Java
          coding,
        </p>
      </div>
      {/* Carousel Section */}
      <div className="w-[80%] mx-auto md:w-[95%]  mt-5 h-[500px] py-1 md:h-auto">
        <Slider
          {...settings}
          className="w-[100%] h-[427px] p-5 md:h-auto md:p-0"
        >
          {reviewData.map((rw, index) => (
            <div
              key={index}
              className="w-[100%] md:h-auto h-[427px] bg-[#E4F0FF] p-3 rounded-lg cursor-pointer"
            >
              <div className="w-full flex justify-between md:flex-col p-5 md:p-3 h-full bg-[#FFFFFF]  md:py-[30px] rounded-lg">
                <div className=" w-1/2 p-3 md:w-[100%] bg-black">
                  <video src={`/${rw.video}.png`}></video>
                </div>
                <div className=" w-[45%] flex flex-col gap-6 p-3 md:w-full md:p-0">
                  {/* Content Div */}
                  <div className="flex items-start gap-2 md:mt-3">
                    <FaQuoteLeft className="w-[50px] h-[20px] text-[#666666]" />

                    <p className="text-md pt-1 md:text-sm ">
                      {" "}
                      <span> </span> {rw.content}
                    </p>
                  </div>

                  {/* Tags Div */}
                  <div className="flex flex-wrap gap-4 md:w-[90%]">
                    {rw.tags.map((tg, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#5CB95A] text-white flex gap-3 p-2 rounded-lg md:p-2"
                        >
                          <Image
                            width={20}
                            height={20}
                            style={{ width: "20px", height: "20px" }}
                            src="/check.png"
                            alt="tickmark"
                          />
                          <p className="text-[16px] md:text-[13px]">{tg}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Name Div */}
                  <div className="flex justify-end h-[45px] md:mt-5">
                    <div className="flex gap-3 h-full">
                      <Image
                        width={50}
                        height={50}
                        style={{ width: "50px", height: "50px" }}
                        src={`/${rw.profile}.png`}
                        alt="profile"
                        className="rounded-full h-full"
                      />
                      <div className="flex flex-col">
                        <h6 className="text-semibold md:text-[16px]">
                          {rw.name}
                        </h6>
                        <p className="text-sm text-slate-500">{rw.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-6">
        <button className="text-black m-3  text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span className="w-full me-2">Explore More</span>
          <span className="ml-1 font-semibold text-2xl w-full">›</span>
        </button>
      </div>
    </div>
  );
};

export default StudentReviews;
