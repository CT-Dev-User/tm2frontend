import React from "react";

const Navigation = ({ navItemsData, isButton, buttonText }) => {
  return (
    <section
      id="component_Navigation"
      className="w-[100%] flex flex-wrap justify-around p-5 bg-white md:hidden"
    >
      <div className="w-[65%] ">
        <ul className="flex justify-around items-center pt-3">
          {navItemsData.map((it, index) => {
            return (
              <li
                key={index}
                className="ms-6 font-semibold flex justify-center items-center"
              >
                <a href={it.url}>{it.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {isButton ? (
        <button className="bg-white max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span>{buttonText}</span>
          <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
            ›
          </span>
        </button>
      ) : (
        false
      )}
    </section>
  );
};

export default Navigation;