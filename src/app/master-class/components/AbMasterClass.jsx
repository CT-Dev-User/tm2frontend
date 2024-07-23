import "./style.css";

const AbMasterClass = () => {
  const ListItem = [
    "Domain knowledge, proven methodologies, and the technology expertise of 450+ skilled .",
    "Domain knowledge, proven methodologies, and the technology expertise of 450+ skilled .",
    "Domain knowledge, proven methodologies, and the technology expertise of 450+ skilled .",
    "Domain knowledge, proven methodologies, and the technology expertise of 450+ skilled .",
  ];
  return (
    <div className="w-full mt-20">
      <div className="w-[80%] mx-auto">
        <div className=" mt-14 ">
          <h1 className="text-4xl uppercase text-[#0466C2] font-bold m-4">
            About THE MASTERCLASS
          </h1>
          <p className="m-4">
            Since our inception in 2004, ValueCoders has been delivering IT
            outsourcing services worldwide. We combine business domain
            knowledge, proven methodologies, and the technology expertise of
            450+ skilled software professionals to yield high-quality solutions
            that add value to businesses.
          </p>
        </div>

        <div className=" mt-10">
          <h1 className="text-2xl uppercase text-[#0466C2] font-bold m-4">
            pLEASE CHECK ALL BOXES WHERE YOUR ANSWER IS YES
          </h1>
          <ul className="grid mt-6 ml-12 list-none grid-cols-2 gap-4">
            {ListItem.map((item, index) => (
              <li
                key={index}
                className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-6 before:h-6 before:border-2 before:border-black before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center m-20">
          <button className="px-6 py-2 border-2 border-black">
            Book Your Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbMasterClass;
