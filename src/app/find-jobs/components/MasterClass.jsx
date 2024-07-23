import CourseCard from "./CourseCardComponents";

const MasterClass = ({ masterClassData }) => {
  if (!masterClassData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { Title, SubTitle, masterClass } = masterClassData;
  return (
    <>
      <div
        id="master-class"
        className="w-[100vw] h-[auto] box-border pt-[60px] pb-[20px] md:py-[30px]"
      >
        <div className="w-[80%] md:w-full md:px-3 mx-auto">
          <h1 className="text-3xl font-bold md:text-[24px] text-[#0466C1]">
            {Title}
          </h1>
          <p className="w-[95%] text-[17px] mt-2 md:w-[100%] md:text-[16px] text-gray-1700">
            {SubTitle}
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto h-auto flex flex-wrap items-start gap-[20px] justify-start md:w-[90%]">
        {masterClass.map((mc, index) => {
          return (
            <CourseCard
              key={index}
              courseData={mc}
              className={`${index > 2 ? "md:hidden block" : "block"}`}
            />
          );
        })}
      </div>
      <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border my-6">
        <button className="p-7 bg-[transparent] h-[42px] rounded-xl box-border flex text-black items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span className="">View All Masterclasses</span>
          <span className="ml-2 font-semibold text-2xl ">›</span>
        </button>
      </div>
    </>
  );
};

export default MasterClass;
