import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StudentReviewComponent from "@/app/_CommonComponents/StudentReviewComponent";
import Image from "next/image";
import "../style.css";

const Testimonials = () => {
  return (
    <>
      <div className="md:hidden w-full h-auto my-10 py-8 bg-black">
        <div className="w-[80%] mx-auto">
          <h1 className="text-[#78B6FF] uppercase font-semibold text-3xl">
            Testimonials
          </h1>

          <div className="w-[100%] h-full mx-auto my-10 ">
            <Carousel className="w-full mx-auto overflow-visible">
              <CarouselContent className="flex justify-between gap-[2px] w-full">
                <CarouselItem className="">
                  <div className="w-[80%] flex justify-start p-2 mb-4 bg-slate-300 rounded-md">
                    <div className=" w-1/2 p-3">
                      <div className="w-full h-full">
                        <Image
                          src={"/background@3x.png"}
                          width={400}
                          height={300}
                          style={{ width: "100%", height: "100%" }}
                          alt="backgroundImg"
                        />
                      </div>
                    </div>
                    <div className=" w-1/2 flex flex-col gap-6 p-3">
                      {/* Content Div */}
                      <div className="flex items-start gap-2">
                        <Image
                          width={65}
                          height={65}
                          src="/highLightQuote.png"
                          alt="quotes"
                        />
                        <p className="text-md pt-1">
                          Since our inception in 2004, ValueCoders has been
                          delivering IT outsourcing services worldwide. We
                          combine business domain knowledge, proven
                          methodologies, We combine business domain knowledge,
                          proven methodologies,
                        </p>
                      </div>

                      {/* Tags Div */}
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-[#5CB95A] text-white flex gap-3 p-2 rounded-lg">
                          <Image
                            width={20}
                            height={20}
                            style={{ width: "20px", height: "20px" }}
                            src="/check.png"
                            alt="tickmark"
                          />
                          <p>Check</p>
                        </div>
                      </div>

                      {/* Name Div */}
                      <div className="flex justify-end h-[45px]">
                        <div className="flex gap-3 h-full">
                          <Image
                            width={50}
                            height={50}
                            style={{ width: "50px", height: "50px" }}
                            src={`/profile5.png`}
                            alt="profile"
                            className="rounded-full h-full "
                          />
                          <div className="flex flex-col">
                            <h6 className="text-semibold">Riddhi Gaikwad</h6>
                            <p className="text-sm text-slate-500">Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-[80%] flex  p-2 mb-4 bg-slate-300 rounded-md">
                      <div className=" w-1/2 p-3">
                        <div className="w-full h-full">
                          <Image
                            src={"/background@3x.png"}
                            width={400}
                            height={300}
                            style={{ width: "100%", height: "100%" }}
                            alt="backgroundImg"
                          />
                        </div>
                      </div>
                      <div className=" w-1/2 flex flex-col gap-6 p-3">
                        {/* Content Div */}
                        <div className="flex items-start gap-2">
                          <Image
                            width={65}
                            height={65}
                            src="/highLightQuote.png"
                            alt="quotes"
                          />
                          <p className="text-md pt-1">
                            Since our inception in 2004, ValueCoders has been
                            delivering IT outsourcing services worldwide. We
                            combine business domain knowledge, proven
                            methodologies, We combine business domain knowledge,
                            proven methodologies,
                          </p>
                        </div>

                        {/* Tags Div */}
                        <div className="flex flex-wrap gap-4">
                          <div className="bg-[#5CB95A] text-white flex gap-3 p-2 rounded-lg">
                            <Image
                              width={20}
                              height={20}
                              style={{ width: "20px", height: "20px" }}
                              src="/check.png"
                              alt="tickmark"
                            />
                            <p>Check</p>
                          </div>
                        </div>

                        {/* Name Div */}
                        <div className="flex justify-end h-[45px]">
                          <div className="flex gap-3 h-full">
                            <Image
                              width={50}
                              height={50}
                              style={{ width: "50px", height: "50px" }}
                              src={`/profile5.png`}
                              alt="profile"
                              className="rounded-full h-full "
                            />
                            <div className="flex flex-col">
                              <h6 className="text-semibold">Riddhi Gaikwad</h6>
                              <p className="text-sm text-slate-500">
                                Developer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%] flex justify-end p-2 mb-4 bg-slate-300 rounded-md">
                    <div className=" w-1/2 p-3">
                      <div className="w-full h-full">
                        <Image
                          src={"/background@3x.png"}
                          width={400}
                          height={300}
                          style={{ width: "100%", height: "100%" }}
                          alt="backgroundImg"
                        />
                      </div>
                    </div>
                    <div className=" w-1/2 flex flex-col gap-6 p-3">
                      {/* Content Div */}
                      <div className="flex items-start gap-2">
                        <Image
                          width={65}
                          height={65}
                          src="/highLightQuote.png"
                          alt="quotes"
                        />
                        <p className="text-md pt-1">
                          Since our inception in 2004, ValueCoders has been
                          delivering IT outsourcing services worldwide. We
                          combine business domain knowledge, proven
                          methodologies, We combine business domain knowledge,
                          proven methodologies,
                        </p>
                      </div>

                      {/* Tags Div */}
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-[#5CB95A] text-white flex gap-3 p-2 rounded-lg">
                          <Image
                            width={20}
                            height={20}
                            style={{ width: "20px", height: "20px" }}
                            src="/check.png"
                            alt="tickmark"
                          />
                          <p>Check</p>
                        </div>
                      </div>

                      {/* Name Div */}
                      <div className="flex justify-end h-[45px]">
                        <div className="flex gap-3 h-full">
                          <Image
                            width={50}
                            height={50}
                            style={{ width: "50px", height: "50px" }}
                            src={`/profile5.png`}
                            alt="profile"
                            className="rounded-full h-full "
                          />
                          <div className="flex flex-col">
                            <h6 className="text-semibold">Riddhi Gaikwad</h6>
                            <p className="text-sm text-slate-500">Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-[80%] flex  p-2 mb-4 bg-slate-300 rounded-md">
                      <div className=" w-1/2 p-3">
                        <div className="w-full h-full">
                          <Image
                            src={"/background@3x.png"}
                            width={400}
                            height={300}
                            style={{ width: "100%", height: "100%" }}
                            alt="backgroundImg"
                          />
                        </div>
                      </div>
                      <div className=" w-1/2 flex flex-col gap-6 p-3">
                        {/* Content Div */}
                        <div className="flex items-start gap-2">
                          <Image
                            width={65}
                            height={65}
                            src="/highLightQuote.png"
                            alt="quotes"
                          />
                          <p className="text-md pt-1">
                            Since our inception in 2004, ValueCoders has been
                            delivering IT outsourcing services worldwide. We
                            combine business domain knowledge, proven
                            methodologies, We combine business domain knowledge,
                            proven methodologies,
                          </p>
                        </div>

                        {/* Tags Div */}
                        <div className="flex flex-wrap gap-4">
                          <div className="bg-[#5CB95A] text-white flex gap-3 p-2 rounded-lg">
                            <Image
                              width={20}
                              height={20}
                              style={{ width: "20px", height: "20px" }}
                              src="/check.png"
                              alt="tickmark"
                            />
                            <p>Check</p>
                          </div>
                        </div>

                        {/* Name Div */}
                        <div className="flex justify-end h-[45px]">
                          <div className="flex gap-3 h-full">
                            <Image
                              width={50}
                              height={50}
                              style={{ width: "50px", height: "50px" }}
                              src={`/profile5.png`}
                              alt="profile"
                              className="rounded-full h-full "
                            />
                            <div className="flex flex-col">
                              <h6 className="text-semibold">Riddhi Gaikwad</h6>
                              <p className="text-sm text-slate-500">
                                Developer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Mobile View Testimonials */}
      <div className="hidden md:block">
        <StudentReviewComponent heading={"Testimonials"}/>
      </div>
    </>
  );
};

export default Testimonials;
