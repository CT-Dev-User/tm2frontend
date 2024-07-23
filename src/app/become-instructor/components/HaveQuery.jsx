import Image from "next/image";
const HaveQuery = () => {
  return (
    <div id="queries" className="w-[100vw] py-3">
      <div className="w-[80%] mx-auto py-10 flex justify-between gap-6 md:hidden">
        <div className="w-[40%] flex flex-col justify-between gap-3">
          <p className="text-3xl text-start leading-snug tracking-wide font-semibold text-[#2E68FF]">
            Have Queries? Talk to our Career Counselor for more Guidance on
            picking the right Career for you!
          </p>
          <button className="bg-white w-[160px] max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Explore Now</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
        <div className="w-[60%]">
          <Image
            src="/querry-img.png"
            alt="Image 1"
            width={600}
            height={400}
            className=" rounded-sm object-cover"
          />
          <p className=" text-[#0466C2] text-lg pt-1 font-semibold">
            Benefits of Joining an Instructor with us!
          </p>
        </div>
      </div>

      {/* for mobile only */}
      <div className=" hidden md:flex flex-col w-[90%] mx-auto py-3">
        <div className="w-[100%]">
          <p className="text-2xl md:text-[20px] text-start leading-snug tracking-wide font-bold text-[#2E68FF]">
            Refer and Earn up to Rs. 80,000 for each friend who successfully
            enrolls!
          </p>
        </div>
        <div className="w-full my-5">
          <Image
            src="/querry-img.png"
            alt="Image 1"
            width={600}
            height={400}
            className=" rounded-sm object-cover"
          />
          <p className=" text-[#0466C2] text-lg pt-2 font-semibold">
            Benefits of Joining an Instructor with us!
          </p>
        </div>
        <div className="py-3">
          <button className="bg-white w-[160px] max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Explore Now</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HaveQuery;