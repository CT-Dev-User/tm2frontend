const ProvideProgram = ({ programData }) => {
  return (
    <div className="w-full my-8 md:my-0 p-3 md:p-0">
      <div className="w-[80%] md:w-[90%] mx-auto">
        <div className="my-6">
          <h1 className="uppercase text-[#0466C1] text-2xl font-semibold my-3">
            programs we provide
          </h1>
          <p className="text-start my-5 md:font-semibold">
            With expertise in Digital, Engineering and Cloud, we deliver
            solutions that fulfill the traditional, transformational and future
            needs of clients across the globe.
          </p>
        </div>
        <div className="w-[80%] md:w-full my-10 mx-auto flex flex-wrap gap-6 md:gap-2 ">
          {programData.map((pd, index) => {
            return (
              <div
                key={index}
                className="px-10 py-3 md:px-[5px] md:py-2 rounded-md bg-[#C8E5FF] md:mb-4"
              >
                <p className="font-semibold md:text-[13px]">{pd.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProvideProgram;