import Image from "next/image";
const MostRecent = () => {
  const itemList = [
    {
      image: "/blogImg2.png",
      title:
        "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      date: "21 Mar, 2024",
      duration: "5 Min Read",
    },
    {
      image: "/blogImg3.png",
      title:
        "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      date: "21 Mar, 2024",
      duration: "5 Min Read",
    },
    {
      image: "/blogImg4.png",
      title:
        "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      date: "21 Mar, 2024",
      duration: "5 Min Read",
    },
  ];

  return (
    <div className="w-full my-8">
      <div className="w-[80%] mx-auto">
        <div className=" mt-16 w-full">
          <h1 className="text-4xl uppercase text-[#0466C2] font-bold">
            Most Recent Blog
          </h1>
        </div>
        <div className="w-full h-[90vh] mt-10 flex gap-2">
          <div className="w-1/2">
            <div className="shadow ">
              <div className="w-full h-full">
                <Image
                  src="/blogImg1.png"
                  alt="image"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover mb-4"
                />
              </div>
              <p className="text-2xl font-normal m-4">
                1000 Python Interview Questions for Freshers with Clear &
                Concise Answers & Technique to crack the interview
              </p>
              <div className="w-full flex justify-between mt-24  p-10">
                <p className="text-sm text-gray-600">21 Mar, 2024</p>
                <p className="text-sm text-gray-600">5 Min Read</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-3">
            {itemList.map((item, index) => (
              <div
                key={index}
                className="card h-[33%] shadow overflow-hidden rounded-lg flex w-full "
              >
                <div className="w-[40%] mb-4 h-[100%]">
                  <Image
                    src={item.image}
                    alt="image"
                    width={150}
                    height={200}
                    style={{
                      objectFit: "cover",
                    }}
                    className="h-[100%] w-full"
                  />
                </div>
                <div className="m-4 h-full w-[60%] flex flex-col gap-[20px]">
                  <p className="text-xl font-normal">{item.title}</p>
                  <div className="w-[80%] flex justify-between">
                    <p className="text-sm text-gray-600">{item.date}</p>
                    <p className="text-sm text-gray-600">{item.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
