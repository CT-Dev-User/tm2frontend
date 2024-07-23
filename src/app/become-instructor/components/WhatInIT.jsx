import Image from "next/image";
const WhatInIT = ({ cardData }) => {
  const contentCard = [
    {
      title: "Grow your personal brand",
      image: "/personal-brand-img.png",
      description:
        "Join our international network of mentors & gain global recognition",
    },
    {
      title: "Generate a source of income",
      image: "/source-income.png",
      description:
        "Join our international network of mentors & gain global recognition",
    },
    {
      title: "Inspire learners globally",
      image: "/inspire-learners-img.png",
      description:
        "Join our international network of mentors & gain global recognition",
    },
  ];
  return (
    <div id="what" className="w-[100vw] py-10 bg-[#020202]">
      <div className="w-[80%] md:w-[90%] mx-auto">
        <h1 className=" text-3xl text-blue flex items-center justify-left  font-bold text-[#78B6FF] uppercase mb-4 md:mb-8 md:text-2xl ">
          What&apos;s in it for you?
        </h1>
        <div className="flex gap-3  md:hidden">
          {contentCard.map((item, index) => (
            <div
              key={index}
              className="w-1/2 h-40 my-10 rounded-md flex p-3 bg-[#232323]"
            >
              <h1 className="font-semibold text-[19px] w-1/2 text-white uppercase">
                {item.title}
              </h1>
              <div className="w-1/2">
                <Image src={item.image} alt="Image 1" width={200} height={20} />
                <p className="text-[11px] mt-3 text-left text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* for mobile only */}
        <div className="hidden md:flex gap-3 flex-col">
          {contentCard.map((item, index) => (
            <div
              key={index}
              className="w-full h-50  rounded-md flex flex-col  bg-[#232323] p-2"
            >
              <div className="w-full">
                <Image
                  src={item.image}
                  alt="Image 1"
                  width={200}
                  height={20}
                  className="object-cover"
                  style={{
                    width: "400px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h1 className="font-semibold text-[14px] mt-2 text-white uppercase">
                {item.title}
              </h1>
              <div className="">
                <p className="text-sm mt-2 text-left text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatInIT;