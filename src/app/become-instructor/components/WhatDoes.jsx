import Image from "next/image";
import React from "react";

const WhatDoes = ({ data }) => {
  let { Title, points, Image: img } = data || {}

  return (
    <div className="w-[100vw] py-8">
      <div className="w-[80%] md:w-[90%] mx-auto ">
        <h1 className="w-full mb-8 md:mb-3 font-semibold uppercase text-3xl text-[#0466C1] md:text-[20px]">
          {Title}
        </h1>
        <div className=" flex gap-3 justify-between">
          <div className="w-[60%] md:w-full pl-3 md:pl-6">
            <ul className="list-disc marker:text-[#1768E1] marker:text-3xl">
              {points.map((item, index) => (
                <li key={item._id || index} className="text-xl my-3 md:text-[16px]">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[40%] md:hidden">
            <Image
              src={img}
              alt="Image 1"
              width={350}
              height={200}
              className="w-[80%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoes;