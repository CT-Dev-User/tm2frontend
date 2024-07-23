import Image from "next/image";

const PractitionersCardComponent = ({ practitionerData, isCompany }) => {
  if (!practitionerData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { name, position, company = "CT", profileImage } = practitionerData;


  return (
    <div className="h-[443px] w-[95%] shrink-0 flex flex-row items-end justify-start gap-4 box-border relative text-left text-xl text-gray-1900 font-sub-heading md:w-[100%] md:mx-auto">
      <div className="flex h-full w-[270px] relative justify-center items-center md:w-[220px]">
        <div className="h-[423px] absolute top-0 right-[-4px] left-0 backdrop-blur-lg rounded-3xl box-border border-2 border-solid border-white md:w-[150px] md:h-[270px] w-[230px] md:rounded-lg md:mx-auto">
          {profileImage ? (
            <div className="w-full h-full flex justify-center items-center">
              <Image
                width={300}
                height={500}
                className="h-[95%] w-[95%] mx-auto absolute rounded-3xl overflow-hidden object-cover z-[1] md:rounded-lg"
                alt=""
                src={profileImage}
              />

            </div>

          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <Image
                width={240}
                height={500}
                className="h-[95%] w-[95%] mx-auto absolute rounded-3xl overflow-hidden object-cover z-[1] md:rounded-lg"
                alt=""
                src="/practioners.png"
              />
            </div>
          )}

          {isCompany ? (
            <div className="absolute w-[90%] flex flex-col items-center justify-center bottom-[40px] left-1/2 transform -translate-x-1/2 p-2 z-[2] rounded-md text-white">
              <b className="font-semibold text-center md:text-[19px]">{name}</b>
              <div className="text-center md:text-[13px]">{position}</div>
              <div className="absolute bottom-[-60px] w-[150px] rounded-lg h-[50px] flex justify-center items-center mt-2 bg-white text-black p-1 md:w-[80px] md:text-[14px] md:h-[30px] md:bottom-[-50px]">
                <p className="text-center">{company}</p>
              </div>
            </div>
          ) : (
            <div className="absolute w-[90%] flex justify-center items-center bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-white z-[2] rounded-md text-black">
              <div className="text-center">
                <h1 className="font-semibold text-[18px]">{name}</h1>
                <h3 className="text-[15px]">{position}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default PractitionersCardComponent;