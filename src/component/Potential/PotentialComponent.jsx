import Image from "next/image";

const PotentialComponent = () => {
  return (
    <div className="w-[100%] mt-10 mx-auto p-4 bg-black md:hidden box-border ">
      <div className="w-[80%] mx-auto py-8 relative text-white">
        <Image width={500} height={400} style={{objectFit: "cover", width: "100%", height: "100%"}} src="/background@3x.png" alt="bgImg" />
        <div className="absolute top-[40%] left-[5%]">
          <p className="text-3xl mb-10">
            Unlock potential <span className="block">with responsible AI</span>
          </p>
          <button className=" ms-3  text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span className="w-full me-2">Discover More</span>
            <span className="ml-1 font-semibold text-2xl w-full">›</span>
          </button>
        </div>
        <div className="absolute top-[70%] left-[0%] flex w-full gap-3">
            <div className="bg-black w-1/4 p-3 ">
                <h1 className="text-md font-medium">Heading</h1>
                <ul className="list-disc ms-4">
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                </ul>

            </div>
            <div className="bg-black w-1/4 p-3 ">
                <h1 className="text-md font-medium">Heading</h1>
                <ul className="list-disc ms-4">
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                </ul>

            </div>
            <div className="bg-black w-1/4 p-3 ">
                <h1 className="text-md font-medium">Heading</h1>
                <ul className="list-disc ms-4">
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                </ul>

            </div>
            <div className="bg-black w-1/4 p-3 ">
                <h1 className="text-md font-medium">Heading</h1>
                <ul className="list-disc ms-4">
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                    <li>HighLight</li>
                </ul>

            </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialComponent;
