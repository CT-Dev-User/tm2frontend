import Image from "next/image";

const PlacementPlus = ({ }) => {
  let iconsData = [
    {
      img: "one-on-one-session",
      title: "One-on-one sessions",
    },
    {
      img: "career-guidance",
      title: "Career guidance",
    },
    {
      img: "300+hiring-partners",
      title: "300+ Hiring partners",
    },
    {
      img: "resume-building",
      title: "Resume building",
    },
    {
      img: "mock-interview",
      title: "Mock interviews",
    },
    {
      img: "soft-skills-trainings",
      title: "Soft skills training",
    },
  ];
  return (
    <div id="placement" className="w-full relative md:h-[110vh] h-auto"
    >
      {/* Background section */}
      <Image
        width={500}
        height={500}
        style={{ width: "", height: "" }}
        className="w-full h-full object-cover z-0"
        alt=""
        src="/placement-plus-bg.png"
      />
      <div className="bg-slate-600 w-full h-full absolute top-0 left-0 opacity-70 z-[1]"></div>

      {/* Content section */}
      <div className="w-full absolute top-0 left-0 px-[110px] md:px-[10px] py-[50px] flex flex-col gap-[20px] z-[2] text-white">
        {/* Heading section */}
        <div className="my-3">
          <h1 className="text-[#78B6FF] uppercase py-4 text-start font-semibold text-3xl md:text-[20px] tracking-wider">
            Land job opportunities with Placement Plus
          </h1>
          <p className="text-md md:hidden">
            Learn from the certified and real time working professionals.
          </p>
        </div>

        <div>
          <div className="w-[80%] md:w-full grid grid-cols-3 md:grid-cols-2 grid-rows-2 gap-3 shadow-md">
            {iconsData.map((i, index) => {
              return (
                <div key={index} className=" p-3 md:p-0 w-[100%] col-span-1 md:flex md:flex-col justify-center items-center">
                  <Image
                    width={60}
                    height={60}
                    quality={100}
                    src={`/${i.img}.png`}
                    alt={i.title}
                  />
                  <h2 className="pt-3 md:text-[13px] md:text-center">{i.title}</h2>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons section */}
        <div className="w-[70%] md:w-full flex flex-col justify-between gap-20 md:gap-[10px] my-8">
          <div className="bg-black text-white flex flex-wrap p-3 rounded-lg">
            <div className="w-[65%] md:w-full md:text-center">
              <p className="text-sm text-slate-300">
                Boost your chances of getting placed by purchasing our Placement
                Plus program along with the certificate programs
              </p>
            </div>
            <div className="w-[35%] md:w-full flex items-center justify-between ">
              <p className="w-1/3 text-md md:text-sm text-center font-semibold">
                YOU GET UPTO
              </p>
              <p className="w-1/3 text-3xl md:text-xl text-[#78B6FF] text-center font-semibold">
                22.2%
              </p>
              <p className="w-1/3 text-md md:text-sm font-semibold text-center">
                FEE WAVIER
              </p>
            </div>
          </div>
          <div className="mb-4 md:w-full md:flex justify-center md:mt-[40px]">
            <button className="bg-transparent max-h-10 p-6 gap-1 border-2 border-white rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Learn More</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementPlus;