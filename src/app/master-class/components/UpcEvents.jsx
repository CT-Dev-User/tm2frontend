import "./style.css";
import Image from "next/image";

const UpcEvent = () => {
  const cardItem = [
    {
      image: "/images/Frame1000005275.png",
      title: " Java Collection Framework",
      strdate: "May 25, 2024 5:00 PM (IST)",
      enddate: "May 25, 2024 5:00 PM (IST)",
      regestred: 180,
    },
    {
      image: "/images/Frame1000005276.png",
      title: " Java Collection Framework",
      strdate: "May 25, 2024 5:00 PM (IST)",
      enddate: "May 25, 2024 5:00 PM (IST)",
      regestred: 170,
    },
    {
      image: "/images/Frame1000005277.png",
      title: " Java Collection Framework",
      strdate: "May 25, 2024 5:00 PM (IST)",
      enddate: "May 25, 2024 5:00 PM (IST)",
      regestred: 150,
    },
  ];
  return (
    <div className="w-full ">
      <div className="w-[80%] mx-auto">
        {/* div for heading */}
        <div className="mt-10">
          <h1 className="text-4xl uppercase text-[#0466C2] font-semibold ">
            Upcoming Events
          </h1>
        </div>

        {/* div for cards */}
        <div className="flex w-full flex-row gap-2 mt-8">
          {cardItem.map((item, index) => (
            <div key={index} className="flex flex-col w-1/3 shadow rounded-sm">
              {/* image */}
              <div className="w-full">
                <Image
                  src={item.image}
                  width={400}
                  height={300}
                  className="auto-height"
                  alt="Description of the image"
                  priority
                />
              </div>

              {/* data */}
              <div className="p-5">
                <h1 className="text-[#03006D] text-2xl font-semibold">
                  {item.title}
                </h1>
                <div className="mt-5 flex flex-col gap-2">
                  <p>
                    <span className="text-[#03006D] font-semibold mr-2">
                      Starts On
                    </span>
                    {item.strdate}
                  </p>
                  <p>
                    <span className="text-[#03006D] font-semibold mr-2">
                      Ends On
                    </span>
                    {item.enddate}
                  </p>
                </div>
                <div className="flex mt-10 gap-2">
                  <p>
                    <span className="text-[#03006D] font-semibold mr-2">
                      {item.regestred}
                    </span>
                    people have registered
                  </p>

                  <button className="border-2 border-black hover:bg-gray-300 text-black font-medium px-1 py-1 rounded ">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* div for button */}
        <div className="flex justify-center items-center mt-8">
          <button className="border-2 border-black hover:bg-gray-300 text-black font-medium py-2 px-4 rounded pl-10 pr-10">
            Explore All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcEvent;
