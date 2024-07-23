import Image from "next/image";

const AccelerateWithCommunity = () => {
  let profileStyle = {
    borderRadius: "50%",
    objectFit: "cover",
    width: "",
    height: "",
    marginBottom: "4px",
  };

  return (
    <div className="w-full py-8 box-border md:py-[20px]">
      <div className="w-[80%] mx-auto box-border md:w-[90%]">
        <h1 className="text-2xl my-3 uppercase text-[#0466C1] font-bold md:text-[20px]">
          Accelerate with the TechMomentum Community
        </h1>
        <p className="mb-4 md:text-[16px]">
          Explore network and grow with the community of most passionate tech
          folks
        </p>
        <button className="bg-white max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0 my-6">
          <span>Discover more</span>
          <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
            ›
          </span>
        </button>

        <div className="relative my-8 w-full h-[600px] md:h-[60vh]">
          {/* Profile 1  */}
          <div className="absolute left-[40%] w-[200px] md:h-[100px] md:left-[0px] flex justify-center items-start">
            <div className="relative flex flex-col justify-between items-center">
               {/* profile */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={profileStyle}
                src="/rectangle-34782@2x.png"
                alt="profile"
                className="w-[100px] h-[100px] md:w-[60px] md:h-[60px]"
              />

              {/* icon  */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={{
                  width: "",
                  height: "",
                }}
                src="/highlight-sparkle.png"
                alt="sparkle"
                className="w-[40px] h-[48px] absolute top-0 left-[75%] md:w-[24px] md:h-[30px]"
              />

              <div className="flex items-center gap-3 w-full md:hidden">
                {/* heading  */}
                <h2 className="font-medium md:text-[12px]">UI / UX Designer</h2>

                {/* company */}
                <div className="w-[40px] h-[20px] pt-1 md:w-[30px]">
                  <Image
                    width={500}
                    height={500}
                    quality={100}
                    src="/infosys.png"
                    alt="infosys"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile 2  */}
          <div className="absolute h-[200px] top-[26%] md:top-[-30px] left-[70%] w-[200px] md:w-[150px] md:left-[50%] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile  */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={profileStyle}
                src="/profile2.png"
                alt="profile"
                className="w-[100px] h-[100px] md:w-[60px] md:h-[60px]"
              />

              {/* icon  */}
              <Image
                width={500}
                height={500}
                quality={100}
                src="/icon2.png"
                alt="sparkle"
                className="w-[40px] h-[48px] absolute top-[-50px] left-[65%] md:w-[24px] md:h-[30px]"
              />

              <div className="flex justify-center items-center gap-3 w-full md:hidden">
                {/* heading */}
                <h2 className="font-medium md:text-[12px]">Data Analyst</h2>

                {/* company  */}
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  style={{ width: "", height: "" }}
                  src="/deloitte.png"
                  alt="deloitte"
                  className="w-[55px] h-[25px] md:w-[30px] md:h-[15px]"
                />
              </div>
            </div>
          </div>

          {/* Profile 3  */}
          <div className="absolute h-[200px] top-[20%] md:top-[10%] left-[15%] md:left-0 w-[200px] md:w-[150px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={profileStyle}
                src="/profile3.png"
                alt="profile"
                className="w-[100px] h-[100px] md:w-[60px] md:h-[60px]"
              />

              {/* icon  */}
              <Image
                width={500}
                height={500}
                quality={100}
                src="/icon3.png"
                alt="sparkle"
                className="w-[90px] h-[90px] absolute top-[-40px] left-[40%]"
              />

              <div className="flex gap-3 w-full md:hidden">
                {/* heading  */}
                <h2 className="font-medium md:text-[12px]">Dev Ops Engg</h2>

                {/* company */}
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  style={{ width: "", height: "" }}
                  src="/tata.png"
                  alt="tata"
                  className="w-[55px] h-[25px] md:w-[30px] md:h-[15px]"
                />
              </div>
            </div>
          </div>

          {/* Profile 4 */}
          <div className="absolute h-[200px] top-[45%] md:top-[25%] left-[40%] w-[200px] md:w-[150px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={profileStyle}
                src="/profile4.png"
                alt="profile"
                className="w-[100px] h-[100px] md:w-[60px] md:h-[60px]"
              />

              {/* icon  */}
              <Image
                width={500}
                height={500}
                quality={100}
                src="/sparkle-blue.png"
                alt="sparkle"
                className="w-[90px] h-[90px] md:h-[40px] md:w-[45px] absolute top-[-40px] left-[75%]"
              />

              <div className="flex items-center gap-3 w-full md:hidden">
                {/* heading  */}
                <h2 className="font-medium md:text-[12px]">Java Developer</h2>

                {/* company */}
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  style={{ width: "", height: "" }}
                  src="/tcs.png"
                  alt="tata"
                  className="w-[55px] h-[25px] md:w-[30px] md:h-[15px]"
                />
              </div>
            </div>
          </div>

          {/* Profile 5 */}
          <div className="absolute h-[200px] top-[65%] md:top-[40%] left-[10%] md:left-0 w-[250px] md:w-[150px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={profileStyle}
                src="/profile5.png"
                alt="profile"
                className="w-[100px] h-[100px] md:w-[60px] md:h-[60px]"
              />

              {/* icon  */}
              <Image
                width={500}
                height={500}
                quality={100}
                src="/icon5.png"
                alt="sparkle"
                className="w-[90px] h-[90px] md:h-[40px] md:w-[45px] absolute top-[-30px] left-[-50px] md:left-[20px]"
              />

              <div className="flex gap-3 w-full items-center md:hidden">
                {/* heading */}
                <h2 className="font-medium pt-2 md:pt-0 md:text-[12px]">
                  Data Analyst
                </h2>

                {/* company  */}
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  style={{ width: "", height: "" }}
                  src="/accenture.png"
                  alt="accenture"
                  className="w-[65px] h-[25px] md:w-[35px] md:h-[20px]"
                />
              </div>
            </div>
          </div>

          {/* Profile 6  */}
          <div className="absolute h-[200px] top-[75%] md:top-[50%] left-[65%] md:left-[40%] w-[250px] md:w-[150px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={500}
                height={500}
                quality={100}
                style={profileStyle}
                src="/profile6.png"
                alt="profile"
                className="w-[100px] h-[100px] md:w-[60px] md:h-[60px]"
              />

              {/* icon */}
              <Image
                width={500}
                height={500}
                quality={100}
                src="/sparkle-green.png"
                alt="sparkle"
                className="w-[90px] h-[90px] md:h-[40px] md:w-[45px] absolute top-[80%] left-[-90px] md:left-[-60px]"
              />
              <Image
                width={500}
                height={500}
                quality={100}
                src="/icon6.png"
                alt="sparkle"
                className="w-[90px] h-[90px] md:h-[40px] md:w-[45px] absolute top-[80%] left-[210px] md:left-[60px]"
              />

              <div className="flex items-center gap-3 w-full md:hidden">
                {/* heading */}
                <h2 className="font-medium md:text-[12px]">Quality Analyst</h2>

                {/* company */}
                <div className="w-[45px] h-[20px] pt-1">
                  <Image
                    width={500}
                    height={500}
                    quality={100}
                    style={{ width: "auto", height: "auto" }}
                    src="/google.png"
                    alt="Google"
                    className="w-[65px] h-[25px] md:w-[35px] md:h-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccelerateWithCommunity;
