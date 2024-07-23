import Image from "next/image";

const OurPartners = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <div className="w-[100%] my-10 md:my-6">
        <div className="w-[80%] md:w-[90%] mx-auto">
          <h2 className="mb-10 uppercase text-3xl md:text-2xl text-[#0466C1] font-bold ">
            OUR PARTNERS
          </h2>
          <div className="w-[100%] mx-auto flex items-start gap-4 justify-between ">
            {/* Icons */}
            <div className="w-[55%]  md:w-full flex items-start">
              <div className="flex flex-wrap justify-between items-start w-full ">
                {[
                  "Group117160",
                  "Group117161",
                  "Group117159",
                  "Group117156",
                  "Group117162",
                  "Group117168",
                  "Group117158",
                  "Group117163",
                  "Group117157",
                  "Group117155",
                  "Group117165",
                  "Group117167",
                ].map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-start w-1/4 "
                    >
                      <Image
                        width={150}
                        height={100}
                        style={imgStyling}
                        src={`/${val}.png`}
                        alt="Logo 1"
                        className="h-full w-full "
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image */}
            <div className="w-[40%] h-[300px] md:hidden">
              <Image
                width={300}
                height={200}
                style={imgStyling}
                src="/college-img.png"
                alt="img"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;