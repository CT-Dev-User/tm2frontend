import Image from "next/image";
import "../style.css";

const ApplicationProcess = () => {
  return (
    <div
      id="applicationProcess"
      className="w-[100vw] py-10 bg-gradient text-white"
    >
      <div className="w-[80%] md:w-[90%] mx-auto flex flex-col gap-4">
        <h1 className="text-[#78B6FF] uppercase font-semibold text-3xl mb-4 md:mt-4 md:text-2xl">
          Application Process
        </h1>
        <div className="flex justify-between md:flex-col items-center">
          {/* 1 */}
          <div className="flex items-center md:flex-col  gap-3">
            <p className="text-5xl font-bold">1</p>
            <h2 className="text-xl font-semibold">Registration</h2>
          </div>

          {/* arrow */}
          <div className="md:hidden">
            <Image
              src={"/arrow-right.png"}
              width={100}
              height={100}
              style={{ width: "20px", height: "16px" }}
              alt="arrow"
            />
          </div>

          <div className="hidden md:block my-8">
            <Image
              src={"/downArrowmdWhite.png"}
              width={100}
              height={100}
              style={{ width: "20px", height: "16px" }}
              alt="arrow"
            />
          </div>

          {/* 2 */}
          <div className="flex items-center md:flex-col  gap-3">
            <p className="text-5xl font-bold">2</p>
            <h2 className="text-xl font-semibold">Interviews</h2>
          </div>

          {/* arrow */}
          <div className="md:hidden">
            <Image
              src={"/arrow-right.png"}
              width={100}
              height={100}
              style={{ width: "20px", height: "16px" }}
              alt="arrow"
            />
          </div>

          <div className="hidden md:block my-8">
            <Image
              src={"/downArrowmdWhite.png"}
              width={100}
              height={100}
              style={{ width: "20px", height: "16px" }}
              alt="arrow"
            />
          </div>

          {/* 3 */}
          <div className="flex items-center md:flex-col gap-3">
            <p className="text-5xl font-bold">3</p>
            <h2 className="text-xl pt-2 font-semibold">
              Task Based <span className="block"> Performance</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;