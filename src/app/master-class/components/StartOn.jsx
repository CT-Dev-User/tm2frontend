import "./style.css";
import Image from "next/image";

const StartOn = () => {
  const listItems = [
    "Domain expertise with Relevant certifications.",
    "Knowledge about the tools, tech stacks, and specialisation",
    "Domain expertise with Relevant certifications.",
    "Domain expertise with Relevant certifications.",
  ];

  const ExrnList = [
    "Ex-Senior Software Development Manager, Microsoft",
    "Ex-Engineering Manager, Inmob",
    "Ex-Software Development Manager, Oracle",
  ];

  const cardData = [
    {
      image: "/images/Schoolday.png",
      alt: "schoolday",
      description: "Students looking to upskill",
    },
    {
      image: "/images/Girlsstudytogether.png",
      alt: "girls studying",
      description: "SDEs looking to upskill",
    },
    {
      image: "/images/UniversityClass.png",
      alt: "university classes",
      description: "SDE shifting from service to Product Companies",
    },
  ];

  const header = [
    { title: "Start On", date: "May 25, 2024 5:00 PM (IST)" },
    { title: "ENDS ON", date: "May 25, 2024 5:00 PM (IST)" },
    { title: "VENUE", date: "May 25, 2024 5:00 PM (IST)" },
  ];
  return (
    <div className="w-full ">
      <div className="w-[80%] mx-auto">
        <div className="flex mt-8 gap-40">
          {header.map((item, index) => (
            <div key={index} className="">
              <h1 className="text-[#0466C2] text-lg font-semibold p-2">
                {item.title}
              </h1>
              <p className="text-sm p-2">{item.date}</p>
            </div>
          ))}
        </div>

        {/* for 2nd headings */}
        <div className=" mt-7">
          <h1 className="text-4xl text-[#0466C2] font-bold p-2 uppercase">
            About this Masterclass
          </h1>
          <p className="p-2">
            Modern businesses reach more consumers through digital media than
            traditional. It is no wonder that digital marketing spends account
            for more than half of marketing spend marketing techniques to get
            results are in great demand...... Read more
          </p>
        </div>

        {/* for 3rd headings */}
        <div className=" mt-7">
          <h1 className="text-3xl text-[#0466C2] font-semibold p-2 uppercase">
            What You Will Gain From This Masterclass
          </h1>
          <ul className="columns-2 space-y-2 list-disc list-inside p-2">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* for 4 th */}
        <div className=" w-full mt-7">
          <h1 className="text-3xl text-[#0466C2] font-semibold p-2 uppercase">
            Our Mentor
          </h1>
          <div className="w-full mt-7 flex">
            <div className="w-[30%] rounded overflow-hidden shadow-lg bg-white">
              <div className="relative w-full h-48">
                <Image
                  src="/images/Frame1000006152.png"
                  alt="nut image"
                  width={350}
                  height={200}
                  className="rounded-t"
                  priority={1}
                />
              </div>
              <div className=" m-4">
                <h2 className="text-2xl font-bold text-[#03006D] mb-3">
                  Shivak Agrawal
                </h2>
                <p className="text-lg font-semibold">Software Development</p>
                <p className="text-lg font-semibold"> Manager, Microsoft</p>
              </div>
              <div className="flex justify-center m-8">
                <Image
                  src="/images/Amazon.png"
                  alt="Amazon Icon"
                  width={100}
                  height={30}
                  style={{ width: "100px", height: "30px" }}
                />
              </div>
            </div>
            <div className="ml-10">
              <h1 className="font-bold text-lg text-[#03006D]">
                15 Years of Industry Experience
              </h1>
              <ul className="space-y-2 list-disc list-inside ml-2 mt-4">
                {ExrnList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* for 5 th */}
        <div className=" mt-16">
          <h1 className="text-3xl text-[#0466C2] font-semibold p-2">
            What You Will Gain From This Masterclass
          </h1>
          <div className="w-full mt-7 flex gap-10 pb-10">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="w-[30%] rounded overflow-hidden shadow-xl bg-white flex flex-col justify-center border-2"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={150}
                  height={150}
                  style={{ width: "150px", height: "150px" }}
                  className="mt-10 mb-5 ml-24"
                />
                <p className="text-center text-xl font-semibold text-[#03006D] mb-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartOn;
