import Image from "next/image.js";
import Card from "./LearnerCardComponent.jsx";

const LearnerBenefitComponent = () => {
  let cardsData = [
    {
      title: "Learner Benefits",
      points: [
        "Top 55 Interview Questions and Answers",
        "Boost chances of selection.",
        "Well-structured set of interview questions",
        "Online test for interview preparation",
      ],
      img: "benefitsImg1",
    },
    {
      title: "Extra Edge to Standout",
      points: [
        "Top 55 Interview Questions and Answers",
        "Boost chances of selection.",
        "Well-structured set of interview questions",
        "Online test for interview preparation",
      ],
      img: "rectangle-34666-1@2x",
    },
    {
      title: "Interview Preparation & Placement",
      points: [
        "Top 55 Interview Questions and Answers",
        "Boost chances of selection.",
        "Well-structured set of interview questions",
        "Online test for interview preparation",
      ],
      img: "rectangle-34666-2@2x",
    },
  ];

  return (
    <>
      <section className="w-[100vw] h-auto py-[50px] box-border ">
        <div className="w-[80%] md:w-[90%] mx-auto flex flex-col gap-[20px] md:gap-2">
          <h2 className="text-[24px] text-[#3E94FA] font-bold uppercase">
            Learner Benefits
          </h2>
          <p className="text-[16px]">
            Check out what sets us apart and makes our programs the best online
            training and certification courses in India
          </p>
        </div>
        <div className="w-[80%] md:w-[90%] mx-auto my-[30px] h-[1100px] py-10 relative ">
          {" "}
          <div className="flex justify-start absolute top-[175px] left-0 w-full">
            {/* Rectangle 1 */}
            <div className="h-[350px] w-[50%] md:ms-2 border-l-4 border-y-4  relative border-[#85C4FF] mb-6">
              <Image
                width={60}
                height={60}
                style={{ width: "60px", height: "60px" }}
                src="/homeIcon.png"
                alt="home icon"
                className="absolute top-[-20px] left-[-20px] md:hidden"
              />
            </div>
          </div>
          <div className="flex justify-end  absolute top-[545px] left-[0px] w-full">
            <div className="h-[350px] w-[50%]  border-r-4 relative border-y-4 border-[#85C4FF] ">
              <Image
                width={60}
                height={60}
                style={{ width: "60px", height: "60px" }}
                src="/certificateIcon.png"
                alt="certificate icon"
                className="absolute top-[-10%] right-[-20px] md:hidden"
              />
            </div>
          </div>
          {cardsData.map((dt, index) => {
            let positionClass;

            if (index === 0) {
              positionClass = "top-[0px] right-[6%] md:right-0 ";
            } else if (index === 1) {
              positionClass = "top-[385px] left-[5%] md:left-0 ";
            } else if (index === 2) {
              positionClass = "top-[770px] right-[6%] md:right-0 ";
            }
            return (
              <Card
                key={index}
                id={index}
                title={dt.title}
                reverse={index === 1}
                pointsData={dt.points}
                img={dt.img}
                positionClass={positionClass}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LearnerBenefitComponent;
