"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const SuccessStories = () => {
  let storyData = [
    {
      img: "rectangle-34782@2x",
      name: "Shree Dawande",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34783@2x",
      name: "Gautam Prajapati",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34980@2x",
      name: "Riya Pathak",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34782@2x",
      name: "Shree Dawande",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34783@2x",
      name: "Gautam Prajapati",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34980@2x",
      name: "Riya Pathak",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
  ];
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full my-10 box-border ">
        <div className="w-[90%]  mx-auto flex flex-col ">
          <h1 className="mb-8 md:mb-6 ms-20 md:ms-0 uppercase text-3xl text-[#0466C1] font-bold">
            SUCESS STORY
          </h1>
          <p className="hidden md:block w-full">
            In this quiz, you will be tested on Core Java basics and OOPS
            concepts. There are some code snippets too to test your basic Java
            coding
          </p>
          <div className="w-[90%] md:w-[95%] md:mt-8 mx-auto">
            <Slider {...settings} className="flex justify-between ">
              {storyData.map((st, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-auto "
                  >
                    <div className="w-[95%] md:w-full overflow-hidden flex flex-col justify-between mb-4  rounded-lg box-border">
                      <div className="w-full">
                        <Image
                          width={300}
                          height={100}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                          src={`/${st.img}.png`}
                          alt="img"
                          className="w-full bg-cover"
                        />
                      </div>
                      <div className=" w-full flex flex-col gap-6 p-3 pb-4 md:p-2">
                        {/* Content Div */}
                        <div className=" gap-2">
                          <h2 className="uppercase text-lg text-[#0466C1] font-bold">
                            {st.name}
                          </h2>
                          <p className="pt-1">{st.content}</p>
                        </div>

                        {/* Tags Div */}
                        <div className=" flex flex-wrap gap-2 mb-4">
                          {st.tags.map((tg, index) => {
                            return (
                              <div
                                key={index}
                                className="bg-[#5CB95A] text-white text-sm flex items-center gap-2 p-1 rounded-lg"
                              >
                                <Image
                                  width={20}
                                  height={20}
                                  style={{ width: "15px", height: "15px" }}
                                  src="/check.png"
                                  alt="tickmark"
                                  className="w-4 h-4"
                                />
                                <p className="">{tg}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
