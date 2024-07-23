import styles from "../learn.module.css";

const ApplyJobs = ({ }) => {
  let jobDetails = [
    {
      title: "UI/UX Designer",
      rupees: "40",
    },
    {
      title: "Graphic Designer",
      rupees: "30",
    },
    {
      title: "Frontend Developer",
      rupees: "35",
    },
    {
      title: "Backend Developer",
      rupees: "35",
    },
    {
      title: "Java Developer",
      rupees: "45",
    },
  ];
  return (
    <div className="w-full py-4 bg-black">
      <div className="w-[80%] mx-auto md:w-[90%]">
        <div className="w-full my-3">
          <h1 className="text-[#78B6FF] uppercase py-4 text-start font-semibold text-2xl md:text-[20px]">
            Apply for this job roles after completing the course
          </h1>
        </div>
        <div className="w-full flex flex-wrap md:gap-[10px]">
          <div className="w-1/2 py-3 text-white md:w-full md:border-2 border-[#5E8BFF] md:px-[10px]">
            {jobDetails.map((jd, index) => {
              // Calculate the width of the div based on the progress value
              const progressBarWidth = (jd.rupees / 50) * 100;

              return (
                <div key={index} className="relative my-2">
                  <progress
                    value={`${jd.rupees}`}
                    max="50" 
                    className={`${styles.progressBar}`}
                    style={{ width: '100%' }}
                  />
                  <div
                    className="absolute top-[35%] left-0 flex justify-between px-[10px] box-border"
                    style={{
                      transform: 'translateY(-50%)',
                      width: `${progressBarWidth}%`
                    }}
                  >
                    <h2 className="font-semibold text-lg md:text-[12px] mt-2">{jd.title}</h2>
                    <div className="flex flex-col items-end">
                      <p className="font-semibold text-lg md:text-[12px]">{jd.rupees}</p>
                      <p className="text-sm md:text-[12px]">k / year</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 py-3 text-white md:w-full md:border-2 border-[#5E8BFF] md:px-[10px]">
            {jobDetails.map((jd, index) => {
              // Calculate the width of the div based on the progress value
              const progressBarWidth = (jd.rupees / 50) * 100;

              return (
                <div key={index} className="relative my-2">
                  <progress
                    value={`${jd.rupees}`}
                    max="50"
                    className={`${styles.progressBar}`}
                    style={{ width: '100%' }}
                  />
                  <div
                    className="absolute top-[25%] left-0 flex justify-between px-[10px] box-border"
                    style={{
                      transform: 'translateY(-25%)',
                      width: `${progressBarWidth}%`
                    }}
                  >
                    <h2 className="font-semibold text-lg md:text-[12px] mt-2">{jd.title}</h2>
                    <div className="flex flex-col items-end">
                      <p className="font-semibold text-lg md:text-[12px]">{jd.rupees}</p>
                      <p className="text-sm md:text-[12px]">k / year</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          f
        </div>
      </div>
    </div>
  );
};

export default ApplyJobs;