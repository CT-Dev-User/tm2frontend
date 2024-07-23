import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Community = () => {
  const profiles = [
    {
      id: 1,
      name: "Steve Jhonson",
      title: "Full Stack Developer",
      imageUrl: "/rectangle-34782@2x.png",
    },
    {
      id: 2,
      name: "Steve Jhonson",
      title: "Full Stack Developer",
      imageUrl: "/rectangle-34782@2x.png",
    },
    {
      id: 3,
      name: "Steve Jhonson",
      title: "Full Stack Developer",
      imageUrl: "/rectangle-34782@2x.png",
    },
    {
      id: 4,
      name: "Steve Jhonson",
      title: "Full Stack Developer",
      imageUrl: "/rectangle-34782@2x.png",
    },
  ];

  return (
    <div className="w-[100vw] h-auto  md:py-[20px] bg-[#212121] box-border">
      <div className="w-[80%] md:w-[90%] h-full mx-auto flex justify-between items-center md:flex-col md:mt-8">
        <div className="w-[50%] flex flex-col md:w-full justify-center gap-8 box-border ">
          <h1 className="text-4xl md:text-2xl font-semibold text-[#0ADE53] ">
            Learning is Better with TechMomentum Community
          </h1>
          <p className="text-white text-lg md:text-sm font-medium">
            Join a community of serious & passionate tech folks, students,
            mentors and coaches your career.
          </p>
          <button className="w-[60%] md:hidden flex gap-x-3 justify-center items-center border-2 border-white rounded-lg p-2 py-2 text-black text-sm font-semibold cursor-pointer  hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span className="">
              <Image
                width={40}
                height={40}
                src="/WhatsappFrame.png"
                alt="whatsapp-logo"
              />
            </span>
            <span className="font-semibold text-white">
              Join WhatsApp Community
            </span>
          </button>
        </div>

        {/* Background Image Div */}
        <div className="w-[40%] md:w-auto md:mx-auto flex md:flex-col items-start md:items-center justify-center text-3xl h-[450px] md:h-auto relative bg-no-repeat bg-center bg-cover bg-[url('/whatsappBg.png')] md:bg-none">
          <div className="mt-20 md:my-10 md:w-[100%] flex flex-col ">
            {profiles.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-2 flex w-48 md:w-40 rounded-sm gap-3 ${
                  index % 2 === 0 ? "" : "ml-48 md:ml-40"
                }`}
              >
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={item.imageUrl}
                    alt="communityImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm md:text-[12px] font-medium">
                    {item.name}
                  </h1>
                  <p className="text-xs md:text-[10px]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="hidden md:flex w-auto justify-around gap-3 items-center border-[1px] border-white px-3 py-2 rounded-lg box-border  text-black text-sm font-semibold cursor-pointer hover:bg-[#0c8ce9] hover:text-white hover:border-0 group">
            <FaWhatsapp className="text-[#0ADE53] text-2xl group-hover:text-white" />
            <span className="font-bold text-[12px] text-white">
              Join WhatsApp Community
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
