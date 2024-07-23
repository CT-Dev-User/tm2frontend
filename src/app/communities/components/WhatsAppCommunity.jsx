import Image from "next/image";
import "../style.css";

const Community = () => {
  
  return (
    <div id="whatsappCommunity" className="w-[100%] py-8 pink_gradient text-black ">
      <div className="w-[80%] mx-auto flex justify-center items-center gap-2 p-7 ">
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <h1 className="text-4xl font-semibold text-[#0ADE53] ">
            Learning is Better with TechMomentum Community
          </h1>
          <p className=" text-lg font-medium">
            Join a community of serious & passionate tech folks, students,
            mentors and coaches your career.
          </p>
          <button className="w-[60%] flex justify-center gap-4 items-center border-2 border-black rounded-lg p-2 text-black text-sm font-semibold cursor-pointer whatsapp_button hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <div className="whatsapp_hover">
              {/* <img src="/whatsapp-black.png" alt="logo" /> */}
            </div>
            <div className="">
              <p className="font-semibold ">Join WhatsApp Community</p>
            </div>
          </button>
        </div>
        <div className="w-1/2 h-[450px]">
          <div className="w-full h-full flex items-start justify-center text-3xl relative ">
            <div className="absolute top-[20%] left-6  flex flex-col">
              <div className="">
                <Image width={380} height={300} src="/steve4.png" alt="communityImg" className="w-[50%]" />
              </div>
              <div className="flex justify-end">
                <Image width={380} height={300} src="/steve3.png" alt="communityImg" className="w-[50%] me-2" />
              </div>
              <div className="">
                <Image width={380} height={300} src="/steve1.png" alt="communityImg" className="w-[50%] " />
              </div>
              <div className="flex justify-end">
                <Image width={380} height={300} src="/steve2.png" alt="communityImg" className="w-[50%] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
