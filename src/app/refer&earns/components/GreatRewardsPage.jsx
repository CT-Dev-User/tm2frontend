import Image from "next/image";

const GreatRewardsPage = ({ rewardData }) => {
  let { title, subTitle, desc, image, programHighlights } = rewardData || {};

  return (
    <>
      <section className="w-[100%] my-10 p-3 ">
        <div className="w-[80%] md:w-full mx-auto flex justify-between gap-14">
          {/* Content section */}
          <div className="w-1/2 md:w-[100%]">
            <h1 className="text-[#0466C1] text-3xl md:text-xl uppercase font-bold tracking-wide">
              {title}
            </h1>
            <h2 className="font-bold text-md md:text-sm my-4 ">{subTitle}</h2>
            <p className="text-left my-4 md:text-sm">{desc}</p>
            <h2 className="uppercase font-semibold text-lg md:text-md text-[#0466C1] mt-2">
              Program Highlights
            </h2>

            {/* List items */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 md mb-10 mx-10 md:mx-2 pt-5">
              {programHighlights.map((hl, index) => (
                <li
                  key={index}
                  className="list-disc marker:text-blue-400 marker:text-[20px] md:text-sm"
                >
                  {hl.point}
                </li>
              ))}
            </div>

            {/* Button */}
            <button className="bg-white max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Login to Refer</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>

          {/* Image section */}
          <div className="w-1/2 h-[400px] md:hidden">
            <Image
              width={300}
              height={300}
              style={{ width: "auto", height: "auto" }}
              src={image}
              alt="refer&earnimg"
              className=" h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GreatRewardsPage;
