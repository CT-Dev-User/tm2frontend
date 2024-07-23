import Image from "next/image";

const BecomeAmbassador = () => {
  let keyPoints = [
    "Complete virtual training and program planning tasks over a 1-week period prior to program launch and confirm successful onboarding to all required platforms",
    "Promote Prime Student for 8-10 hours each week, for 6 weeks, to your fellow peers through various tactics such as posting on social media multiple times a week, as well as the potential opportunity of hosting on-campus activations",
    "Share specific sign-up links to drive Prime Student sign ups among peers",
  ];

  let gainPoints = [
    "Weekly stipend for fulfilling program responsibilities.",
    "1-year membership to Prime Student",
    "Gain valuable face time with Amazon representatives through roundtable discussions",
  ];
  return (
    <div id="ambassadors" className="w-[100vw] py-10">
      <div className="w-[80%] md:w-[90%] mx-auto flex justify-between gap-4">
        {/* Content section */}
        <div className="w-[60%] md:w-full flex flex-col justify-between items-start">
          {/* Heading */}
          <div className="mb-4">
            <h1 className="text-[#0466C1] uppercase font-semibold text-3xl md:text-2xl">
              Become a student ambassador
            </h1>
            <p className="text-start text-md leading-7 mt-3">
              Join our global community of students who are passionate about
              building AI-driven solutions with Microsoft technology. Accelerate
              innovation and grow the skills you need to have greater impact in
              the projects and communities that matter to you.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-4">
            <h1 className="text-[#0466C1] uppercase font-semibold text-3xl my-3 md:text-2xl">
              Key Responsibilities:
            </h1>
            <ul className="list-disc marker:text-sm ps-4">
              {keyPoints.map((kp, index) => {
                return (
                  <li key={index} className="py-2">
                    {kp}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* What you'll gain */}
          <div className="">
            <h1 className="text-[#0466C1] uppercase font-semibold text-3xl md:text-2xl my-4">
              What you&apos;ll gain:
            </h1>
            <ul className="list-disc marker:text-sm ps-4">
              {gainPoints.map((gp, index) => {
                return (
                  <li key={index} className="py-2">
                    {gp}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Image section */}
        <div className="w-[30%] md:hidden">
          <div className="relative w-full h-full">
            <Image
              width={200}
              height={300}
              style={{ width: "100%", height: "100%" }}
              src="/student-ambassador-img.png"
              alt="student-ambassador-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAmbassador;