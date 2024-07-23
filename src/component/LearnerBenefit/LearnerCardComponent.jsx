import Image from "next/image";
import styles from "./learner.module.css";

const LearnerCardComponent = ({
  title,
  pointsData,
  img,
  reverse,
  id,
  positionClass,
}) => {
  return (
  
      <div
        className={`w-[750px] md:w-[86%] md:mx-auto h-[350px] md:h-[40vh] border-4 border-[#85C4FF] bg-white rounded-2xl p-2 absolute ${positionClass} box-border`}
      >
        <div
          className={`bg-white md:w-full box-border h-full rounded-lg flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } justify-between h-full p-[20px] md:p-2 border-2 border-[#85C4FF]`}
        >
          <div className={`flex flex-col w-[47%] md:w-full h-full items-start `}>
            <h2 className="uppercase text-lg text-[#3E94FA] md:mb-3 font-bold ">
              {title}
            </h2>
            <ul
              className={`h-full list-disc marker:text-[#2589FF] marker:text-3xl md:w-full flex flex-col justify-center mb-4 ps-6 `}
            >
              {pointsData.map((pt, index) => {
                return (
                  <li className="text-[14px] md:text-[10px] ms-3 md:ms-0" key={index}>
                    {pt}
                  </li>
                );
              })}
            </ul>
            <button className="text-black w-[59%] md:w-[60%] md:text-[10px] text-sm font-semibold cursor-pointer py-0 px-2 bg-[transparent] h-[42px] rounded-md box-border flex  items-center justify-between border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span className="w-fit me-0 ">Explore Job Bootcamp</span>
              <span className="font-semibold text-2xl w-fit mb-1 md:mb-0">›</span>
            </button>
          </div>
          <div className="w-[45%] h-[250px] md:hidden">
            <Image
              width={300}
              height={250}
              style={{objectFit: "cover" , width: "100%", height: "100%", borderRadius: "5px" }}
              src={`/${img}.png`}
              alt={img}
              className="h-full "
            />
          </div>
        </div>
      </div>
    
  );
};

export default LearnerCardComponent;
