import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const EarnCertificate = ({ }) => {
  let achievementData = [
    {
      rank: "4",
      title: "Earn a PG Certificate in Cyber Security",
      verifiedBy: "Outlook India",
    },
    {
      rank: "9",
      title: "In One Year Programs",
      verifiedBy: "Business World",
    },
    {
      rank: "9",
      title: "Top B-Schools",
      verifiedBy: "Business World",
    },
  ];
  let imageData = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image1",
    "image2",
    "image3",
    "image4",
  ];
  return (
    <div className={"w-full mt-10 bg-black text-white py-[30px]"}>
      {/* Heading section */}
      <div className="w-[80%] mx-auto md:w-[90%]">
        <h1 className="text-[#78B6FF] uppercase py-4 text-start font-semibold text-3xl md:text-[20px] tracking-wider">
          Earn Certificate
        </h1>
        <p className="text-md ">
          Ranked among India&apos;s top 10 business schools, Great Lakes is highly
          regarded for its analytics programs. A certification from Great Lakes
          Executive Learning ensures industry credibility and acceptance,
          providing a robust foundation for your career advancement.
        </p>
      </div>

      {/* Certificate section */}
      <div className="w-[80%] md:w-[90%] mx-auto my-[30px] flex flex-wrap justify-between h-auto">
        <div className="hidden w-full md:flex flex-col gap-[20px] pt-[10px]">
          {achievementData.map((ac, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center bg-white text-black px-2 w-[90%] md:w-full rounded-sm h-[100px]"
              >
                <div className="relative w-[30%]">
                  <Image
                    width={100}
                    height={100}
                    style={{ width: "", height: "" }}
                    src="/wheat_leafs.png"
                    alt="wheat_leafs"
                    className="w-[60px]"
                  />
                  <p className="text-[#03006D] absolute top-[20%] left-[20%] text-2xl md:text-[12px] font-semibold">
                    {ac.rank}{" "}
                    <sup className="absolute top-[-5px] left-[100%] text-sm md:text-[8px] font-normal mb-3">
                      th
                    </sup>
                  </p>
                </div>
                <div className="flex flex-col w-[70%] py-[10px] gap-[10px]">
                  <p className="text-[#03006D] font-semibold text-2xl md:text-[16px] tracking-normal">
                    {ac.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    By {ac.verifiedBy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[46%] md:w-full p-3 md:p-0 md:mt-6 flex flex-col items-start h-full">
          <div className="bg-[#D1E6FF] p-[10px] w-full h-full md:p-[0px]">
            <Image
              width={500}
              height={500}
              quality={100}
              src="/certificate.png"
              alt="certificate"
              className="object-cover w-full h-full"
            />

          </div>
          <p className="pt-2">
            *Image for illustration only Certificate subject to change.
          </p>
        </div>
        <div className="w-[2px] bg-slate-400 md:hidden"></div>
        <div className="w-[46%] md:hidden flex flex-col gap-[20px] pt-[10px]">
          {achievementData.map((ac, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center bg-white text-black px-3 w-[90%] md:w-full h-auto rounded-sm  py-[10px]"
              >
                <div className="relative w-[30%]">
                  <Image
                    width={100}
                    height={100}
                    style={{ width: "", height: "" }}
                    src="/wheat_leafs.png"
                    alt="wheat_leafs"
                    className="w-[100px] h-auto"
                  />
                  <p className="text-[#03006D] absolute top-[30%] left-[35px] md:left-[40%] text-2xl md:text-[16px] font-semibold">
                    {ac.rank}{" "}
                    <sup className="absolute top-[-5px] left-[100%] text-sm md:text-[10px] font-normal mb-3">
                      th
                    </sup>
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-1 flex-wrap w-[70%]">
                  <p className="text-[#03006D] font-semibold text-2xl md:text-[16px] tracking-normal">
                    {ac.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    By {ac.verifiedBy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel section */}
      <div className="w-[80%] mx-auto my-[20px] p-3">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[90%] mx-auto bg-slate-600"
        >
          <CarouselContent className="w-full flex items-center justify-center">
            {imageData.map((image, index) => {
              return (
                <CarouselItem
                  className="basis-auto w-[22%] md:w-[50%] h-auto mx-2 flex items-center"
                  key={index}
                >
                  <Image width={500}
                    height={500}
                    quality={100}
                    style={{ width: "", height: "" }}
                    className="w-full h-auto"
                    src={`/${image}.png`} alt={image} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default EarnCertificate;