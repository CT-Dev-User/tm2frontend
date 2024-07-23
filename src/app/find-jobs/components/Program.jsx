"use client";
import React, { useState } from "react";
import ProgramCard from "./ProgramCardComponent";

const ProgramPage = ({ programData }) => {
  if (!programData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }
  let { Title, SubTitle, programsData } = programData;

  return (
    <div className='w-[100vw] h-[auto] box-border pt-[60px] pb-[20px] md:py-[30px]' id="extensive-program">
      <div className='w-[80%] md:w-full md:px-3 mx-auto'>
        <h1 className='text-3xl font-bold md:text-[24px] text-[#0466C1]'>  {Title}</h1>
        <p className='w-[95%] text-[17px] mt-2 md:w-[100%] md:text-[16px]'> {SubTitle}</p>
      </div>
      <div className='w-[80%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
        {programsData.map((pd, index) => {
          return <ProgramCard key={index} programData={pd} />;
        })}
      </div>

    </div>

  );
};

export default ProgramPage;