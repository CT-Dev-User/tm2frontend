import Image from "next/image";

const Footer = () => {
  return (
    <footer className='w-[100%] box-border h-auto bg-black flex text-white py-[30px] '>
      <div className="w-[80%] mx-auto md:w-[90%]">
        {/* Logo and SearchBar div */}
        <div className="flex flex-wrap items-center justify-between md:gap-[20px] mb-16 md:w-[100%]">
          <a href="/">
            <Image
              width={500}
              height={500}
              quality={100}
              style={{ width: "", height: "" }}
              className="w-[349px] md:w-[200px]"
              alt=""
              src="/tm-logo.svg"
            />
          </a>
          <div className="h-[2.5rem] w-[40%] md:w-full flex items-center">
            <input
              type="text"
              className="bg-transparent text-sm text-white border-t-2 border-b-2 border-l-2 border-slate-400 rounded-l-md h-full w-[80%] p-4 "
              placeholder="Search"
            />
            <button className="bg-white font-semibold text-black h-full w-[20%] rounded-r-md ">
              Search
            </button>
          </div>
        </div>

        {/* contact us div */}

        <div className="md:w-[100%] flex justify-between flex-wrap">
          <div className="md:w-[100%] md:mt-0 mt-6 md:mb-[20px]">
          <h2 className="font-semibold mb-[10px]">Contact us</h2>
            <div className="  flex flex-col items-start justify-center gap-[13px]">
              <a href="tel:1800-123-3598">1800-123-3598</a>
              <a href="">contact@techmomentum.com</a>
              <p className="">
                <span className="block">© 2024 TechMomentum</span>
                <span className="block">Education Private Limited.</span>
              </p>
              <div className="mt-2">
                <button className="me-2">
                  <Image
                    width={30}
                    height={30}
                    className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                    loading="lazy"
                    alt=""
                    src="/facebookfill-3.svg"
                  />
                </button>
                <button className="mx-2">
                  <Image
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] relative"
                    loading="lazy"
                    alt=""
                    src="/instagram-square.png"
                  />
                </button>
                <button className="mx-2">
                  <Image
                    width={30}
                    height={30}
                    className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                    loading="lazy"
                    alt=""
                    src="/youtubefill-3.svg"
                  />
                </button>
                <button className="mx-2">
                  <Image
                    width={30}
                    height={30}
                    className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                    loading="lazy"
                    alt=""
                    src="/linkedin-round.png"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-6 md:mb-[20px]">
            <h2 className="font-semibold mb-[10px]">TechMomentum</h2>
            <div className="flex flex-col items-start gap-[13px] md:gap-[5px] text-[17px] md:text-[12px]">
              <a href="#">Careers</a>
              <a href="#">Privacy Plicy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Pricing & refund policy</a>
              <a href="#">Bug Bounty</a>
              <a href="#">Review</a>
              <a href="#">Press release</a>
            </div>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-6 md:mb-[20px]">
          <h2 className="font-semibold mb-[10px]">Courses</h2>
            <div className="flex flex-col items-start gap-[13px] md:gap-[5px] text-[17px] md:text-[12px]">
              <a href="#">Digital Marketing</a>
              <a href="#">Full Stack Development - Java</a>
              <a href="#">Data Science With Python</a>
              <a href="#">Data Science With Ai And Ml</a>
              <a href="#">Full Stack Development - MERN</a>
            </div>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-6 md:mb-[20px]">
          <h2 className="font-semibold mb-[10px]">Community</h2>
            <div className="flex flex-col items-start gap-[13px] md:gap-[5px] text-[17px] md:text-[12px]">
              <a href="#">Events</a>
              <a href="#">Campus Ninja</a>
              <a href="#">Affiliate</a>
              <a href="#">Scholarship events</a>
              <a href="#">Hire from us</a>
            </div>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-6 md:mb-[20px]">
          <h2 className="font-semibold mb-[10px]">Products</h2>
            <div className="flex flex-col items-start gap-[13px] md:gap-[5px] text-[17px] md:text-[12px]">
              <a href="#">Upskilling Courses</a>
              <a href="#">Job Bootcamp</a>
              <a href="#">Coding Ninjas Studio</a>
              <a href="#">Try courses for free</a>
              <a href="#">Mock interviews</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;