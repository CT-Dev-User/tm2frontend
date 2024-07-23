import Card from "./TutionFeeCard";
import Image from "next/image";

const TutionFeeComponent = ({}) => {
  let highlights = [
    "165+ Hours Instructor-Led Sessions",
    "230 Guided Hands-Exercises",
    "10 Real-World Capstone Projects",
    "20+ Industry Case Studies",
  ];
  let cardsData = [
    {
      title: "One-Time Payment",
      discount: "29",
      content: "Pay upfront and save 29% on tuition fee",
      CrossGBP: "2400",
      GBP: "1,699",
      lowPrice: "283",
    },
    {
      title: "One-Time Payment",
      discount: "29",
      content: "Pay upfront and save 29% on tuition fee",
      CrossGBP: "2400",
      GBP: "1,699",
      lowPrice: "283",
    },
    {
      title: "One-Time Payment",
      discount: "29",
      content: "Pay upfront and save 29% on tuition fee",
      CrossGBP: "2400",
      GBP: "1,699",
      lowPrice: "283",
    },
  ];
  let benefits = [
    "Personalised Mentors",
    "Dedicated career support",
    "400+ Hrs of Online Content",
    "400+ Hrs of Online Content",
    "Dedicated career support",
    "400+ Hrs of Online Content",
    "400+ Hrs of Online Content",
  ];
  return (
    <>
      <div className={"w-full mb-16 mx-auto md:hidden"}>
        {/* Heading section  */}
        <div className="w-[80%] mx-auto mb-8 ">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider">
            Tuition fee and Training options
          </h1>
          <p className="text-md ">
            Get ready to land a tech job with our dedicated Job Preparation
            Support. Get all the support you need to get placed in a Data
            Science job within 6 Months of Course Completion.
          </p>
        </div>

        {/* Blended section */}
        <div className="w-[80%] mx-auto my-8 flex flex-col gap-3">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-xl tracking-wider">
            Blended Learning (Instructor-Led Sessions)
          </h1>
          <div className="flex flex-wrap gap-4">
            {highlights.map((hl, index) => {
              return (
                <div
                  key={index}
                  className="bg-slate-100 rounded-lg p-2 flex gap-2"
                >
                  <span className="text-green-400 bg-transparent text-lg font-bold">
                    ✓
                  </span>
                  <p>{hl}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* cards section */}
        <div className="w-[80%] flex gap-2 mx-auto mt-8 ">
          <div className="w-[70%]">
            <div className="w-full grid grid-cols-2 gap-4">
              {cardsData.map((cd, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index === 2 ? "col-span-2" : "col-span-1"
                    } rounded-md`}
                  >
                    <div className="card">
                      <Card
                        no={index + 1}
                        title={cd.title}
                        content={cd.content}
                        discount={cd.discount}
                        CrossGBP={cd.CrossGBP}
                        GBP={cd.GBP}
                        lowPrice={cd.lowPrice}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[30%] border-2 flex flex-col py-4">
            <h2 className="capitalize font-semibold mb-6 tracking-normal text-lg text-center">
              Benefits of Learning from us
            </h2>
            {benefits.map((bn, index) => {
              return (
                <div
                  key={index}
                  className="w-[70%] flex justify-start gap-2 mx-auto my-4"
                >
                  <div>
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4056_24317)">
                        <path
                          d="M10.75 0C8.6733 0 6.64323 0.615814 4.91652 1.76957C3.1898 2.92332 1.84399 4.5632 1.04927 6.48182C0.254549 8.40044 0.0466145 10.5116 0.451759 12.5484C0.856904 14.5852 1.85693 16.4562 3.32538 17.9246C4.79383 19.3931 6.66475 20.3931 8.70155 20.7982C10.7384 21.2034 12.8496 20.9955 14.7682 20.2007C16.6868 19.406 18.3267 18.0602 19.4804 16.3335C20.6342 14.6068 21.25 12.5767 21.25 10.5C21.25 9.12112 20.9784 7.75574 20.4507 6.48182C19.9231 5.2079 19.1496 4.05039 18.1746 3.07538C17.1996 2.10036 16.0421 1.32694 14.7682 0.799265C13.4943 0.271591 12.1289 0 10.75 0ZM16.7098 8.64885L10.4098 14.4238C10.2103 14.6067 9.94796 14.7056 9.6774 14.6997C9.40684 14.6938 9.149 14.5837 8.95765 14.3923L5.80765 11.2423C5.70737 11.1455 5.62738 11.0296 5.57235 10.9015C5.51732 10.7734 5.48835 10.6356 5.48714 10.4962C5.48593 10.3568 5.51249 10.2185 5.56529 10.0895C5.61808 9.96045 5.69605 9.84322 5.79464 9.74463C5.89323 9.64605 6.01046 9.56808 6.1395 9.51528C6.26854 9.46249 6.40681 9.43592 6.54622 9.43713C6.68564 9.43834 6.82342 9.46731 6.95153 9.52234C7.07963 9.57737 7.19549 9.65736 7.29235 9.75765L9.7315 12.1968L15.2902 7.10115C15.4954 6.9129 15.7671 6.81389 16.0453 6.8259C16.3235 6.83791 16.5856 6.95996 16.7738 7.1652C16.9621 7.37044 17.0611 7.64205 17.0491 7.92029C17.0371 8.19853 16.915 8.4606 16.7098 8.64885Z"
                          fill="url(#paint0_linear_4056_24317)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_4056_24317"
                          x1="10.75"
                          y1="0"
                          x2="10.75"
                          y2="21"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A3C227" />
                          <stop offset="1" stopColor="#25B500" />
                        </linearGradient>
                        <clipPath id="clip0_4056_24317">
                          <rect
                            width="21"
                            height="21"
                            fill="white"
                            transform="translate(0.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>{bn}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* for mobile only */}
      <div className="w-full mb-16 mx-auto hidden md:block">
        {/* Heading section  */}
        <div className="w-[90%] mx-auto mb-8 ">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider md:text-2xl">
            Tuition fee and Training options
          </h1>
          <p className="text-md ">Faculty that brings out the best in you</p>
        </div>

        {/* Blended section */}
        <div className="w-[90%] mx-auto my-8 flex flex-col gap-3">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-lg tracking-wider">
            Blended Learning (Instructor-Led Sessions)
          </h1>
        </div>

        {/* cards section */}
        <div className="w-[90%] flex flex-col gap-4 mx-auto mt-8 ">
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              {cardsData.map((cd, index) => {
                return (
                  <div key={index} className="rounded-md">
                    <div className="card">
                      <Card
                        no={index + 1}
                        title={cd.title}
                        content={cd.content}
                        discount={cd.discount}
                        CrossGBP={cd.CrossGBP}
                        GBP={cd.GBP}
                        lowPrice={cd.lowPrice}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full border-2 flex flex-col py-4">
            <h2 className="capitalize font-semibold mb-6 tracking-normal text-lg text-center md:text-start md:ml-6">
              Benefits of Learning from us
            </h2>
            {benefits.map((bn, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-start gap-2 mx-auto my-4 md:my-2 md:mx-5"
                >
                  <div>
                    <Image
                      width={50}
                      height={50}
                      style={{ width: "20px", height: "20px" }}
                      src="/green-tick.png"
                      alt="write"
                    />
                  </div>
                  <p>{bn}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TutionFeeComponent;
