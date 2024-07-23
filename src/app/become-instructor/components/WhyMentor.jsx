import Image from "next/image";
const WhyMentor = ({ mentorData }) => {
  const cardData = [
    {
      title: "Curriculum Design Assistance",
      description:
        "Our Program Managers collaboration with you at every step of the way & help you build a high-impact course.",
    },
    {
      title: "Technical Help",
      description:
        "Don't know how to design ads? Edit content? No worries! Our in-house talent will take care of all the technical needs.",
    },
    {
      title: "Paid Promotion and Marketing",
      description:
        "We will launch your program with ad campaigns and promotions - to build a sustainable profit model.",
    },
  ];

  let { dataArr, Image: img } = mentorData;

  return (
    <div id="why" className="w-[100vw] flex flex-col bg-black py-10">
      <div className="w-[80%] md:w-[90%] mx-auto">
        <div className="w-full">
          <h1 className="uppercase text-[#78B6FF] text-3xl font-semibold md:text-2xl">
            why mentor with us?
          </h1>
          <div className="w-full flex h-auto gap-[15px] mt-12 ">
            <div className="w-[40%] md:w-full flex flex-col md:gap-3 justify-between">
              {dataArr.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[31%] bg-white p-5 md:p-3 box-border rounded-md md:h-auto"
                >
                  <div className="w-[80%] md:w-[90%]">
                    <h4 className="w-full text-[24px] font-semibold mb-3 tracking-wide md:text-xl">
                      {item.title}
                    </h4>
                    <p className="w-full text-start text-[16px] font-medium mt-2 tracking-wide leading-normal md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[60%] h-auto md:hidden">
              <Image
                src={img}
                alt="Image 1"
                width={600}
                height={600}
                style={{ width: "100%", height: "", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMentor;