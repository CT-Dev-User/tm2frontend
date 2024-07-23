import Image from "next/image";

const QueryComponent = () => {
  return (
    <>
      <div className="w-full my-10 mx-auto flex flex-col gap-3 justify-between items-center md:hidden">
        <div className="w-[80%] mx-auto my-8">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider">
            Still Have Queries? Contact Us
          </h1>
          <p>Check out the program and fee details in our brochure</p>
        </div>
        <div className="w-[80%] mx-auto my-8 flex ">
          <div className="w-1/2 flex flex-col items-start ">
            <h1 className="uppercase text-start text-[#03006D] font-semibold ps-3">
              Request more information
            </h1>
            <form className="w-full flex flex-col justify-between items-start gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="w-[70%] p-3 border-b-2 my-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-[70%] p-3 border-b-2 my-4"
              />
              <input
                type="number"
                min={0}
                max={10}
                placeholder="Phone Number*"
                className="w-[70%] p-3 border-b-2 my-4"
              />
              <select
                name="work_experience"
                id="experience"
                className="w-[70%] p-3 border-b-2 my-4"
              >
                <option value="none">Work Experience in Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="flex items-start my-4">
                <input
                  type="checkbox"
                  name="T&C"
                  id="t&c"
                  className="w-4 h-4 me-2 mt-2"
                />
                <p className="w-[70%] text-wrap text-md ">
                  By providing your contact details, you agree to our{" "}
                  <span className="text-[#0075FF]">Privacy Policy</span>
                </p>
              </div>

              <button
                type="submit"
                className="bg-white max-h-10 px-6 py-3 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0"
              >
                <span>Submit</span>
                <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                  ›
                </span>
              </button>
            </form>
          </div>
          <div className="w-1/2 mx-auto ">
            <Image
              width={400}
              height={400}
              src="/query-img.png"
              alt="queryImg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="hidden w-full my-10 mx-auto md:flex flex-col gap-3 justify-between items-center ">
        <div className="w-[90%]">
          <div className="w-full mx-auto my-8">
            <h1 className="text-[#46A1F6] uppercase py-4 text-start font-semibold text-3xl md:text-2xl md:tracking-normal tracking-wider">
              Still Have Queries?
            </h1>
            <h1 className="uppercase text-blue-950 text-start font-semibold text-3xl md:text-2xl">
              Contact Us
            </h1>
            <p className="mt-10 md:text-[12px]">
              Check out the program and fee details in our brochure
            </p>
          </div>
          {/* form */}
          <div className="w-full flex flex-col justify-center shadow-sm p-2">
            <h1 className="uppercase text-xl md:text-[15px] md:text-center text-[#03006D] font-semibold ps-3">
              Request more information
            </h1>
            <form className="w-full flex flex-col justify-between items-start gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="w-full p-3 border-b-2 my-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full p-3 border-b-2 my-4"
              />
              <input
                type="number"
                min={0}
                max={10}
                placeholder="Phone Number*"
                className="w-full p-3 border-b-2 my-4"
              />
              <select
                name="work_experience"
                id="experience"
                className="w-full p-3 border-b-2 my-4 md:bg-white"
              >
                <option value="none">Work Experience in Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="flex items-start my-4">
                <input
                  type="checkbox"
                  name="T&C"
                  id="t&c"
                  className="w-4 h-4 me-2 mt-2"
                />
                <p className="w-full text-wrap text-md md:text-[15px]">
                  By providing your contact details, you agree to our{" "}
                  <span className="text-[#0075FF]">Privacy Policy</span>
                </p>
              </div>

              <button
                type="submit"
                className="bg-white max-h-10 px-6 py-3 gap-1 md:w-[70%] border-2 border-black rounded-md flex md:justify-center items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0 ml-32 md:ml-8"
              >
                <span>Submit</span>
                <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                  ›
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryComponent;