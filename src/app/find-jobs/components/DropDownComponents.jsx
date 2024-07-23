"use client";
import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.js"
import { useState } from "react";

const DropDown = ({ questions, answer, id }) => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:w-full w-full">
      <button
        className={`w-full rounded-2xl overflow-hidden flex flex-col items-start justify-between py-[15px] pr-[31px] md:pr-0 md:py-0 box-border  gap-[20px] text-left text-xl text-gray-400`}
        id="options-menu"
        aria-expanded={isOpen}
        // aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <div className="flex justify-between md:gap-2 w-[100%] relative ">
          <h1 className="m-0 w-[70%] md:w-[95%] md:text-[15px] ">{id + 1}{'.'} {questions}</h1>
          <div className=" pt-3 px-0 pb-0">
            <Image
              width={20}
              height={20}
              className="w-[35px] md:w-[25px] md:h-[25px] h-[35px] relative overflow-hidden "
              alt=""
              src="/frame-28.svg"
            />
          </div>
        </div>
      </button>
      <div className={`${isOpen ? "visible" : "hidden"} md:text-[15px]`}>{answer}</div>
    </div>
  );
};

export default DropDown;
