"use client"
import React, { useState } from "react";
import Image from "next/image";

const CategoriesSection = () => {
    const [activeCategory, setActiveCategory] = useState("masterclass");
    const links = ["masterclass", "workshop", "webinar"];
    const [category, setCategory] = useState("All");
    
    const ctgData = {
      title: "Master Classes Collection",
      subtitle: "Learn from industry experts",
      masterClassData: [
        {
          category: "All",
          data: [
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "Jane Doe",
              masterClassTrainerPosition: "Senior Developer",
              masterClassTrainerCompany: "TechCorp",
              masterClassName: "Modern JavaScript",
              StartTime: "2024-07-15T10:00:00Z",
              EndTime: "2024-07-15T12:00:00Z",
              peopleRegistered: "150",
            },
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "John Smith",
              masterClassTrainerPosition: "Lead Engineer",
              masterClassTrainerCompany: "WebSolutions",
              masterClassName: "Advanced CSS",
              StartTime: "2024-07-16T14:00:00Z",
              EndTime: "2024-07-16T16:00:00Z",
              peopleRegistered: "200",
            },
          ],
        },
        {
          category: "Software Development",
          data: [
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "Emily Johnson",
              masterClassTrainerPosition: "Software Architect",
              masterClassTrainerCompany: "DevWorks",
              masterClassName: "Microservices Architecture",
              StartTime: "2024-07-17T09:00:00Z",
              EndTime: "2024-07-17T11:00:00Z",
              peopleRegistered: "180",
            },
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "Michael Brown",
              masterClassTrainerPosition: " Developer",
              masterClassTrainerCompany: "CodeBase",
              masterClassName: "React and Redux",
              StartTime: "2024-07-18T13:00:00Z",
              EndTime: "2024-07-18T15:00:00Z",
              peopleRegistered: "220",
            },
          ],
        },
        {
          category: "Data Science",
          data: [
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "Sarah Wilson",
              masterClassTrainerPosition: "Data Scientist",
              masterClassTrainerCompany: "DataTech",
              masterClassName: "Machine Learning Basics",
              StartTime: "2024-07-19T11:00:00Z",
              EndTime: "2024-07-19T13:00:00Z",
              peopleRegistered: "170",
            },
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "David Lee",
              masterClassTrainerPosition: "AI Specialist",
              masterClassTrainerCompany: "AI Labs",
              masterClassName: "Deep Learning with TensorFlow",
              StartTime: "2024-07-20T15:00:00Z",
              EndTime: "2024-07-20T17:00:00Z",
              peopleRegistered: "190",
            },
          ],
        },
        {
          category: "DevOps",
          data: [
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "Laura Martinez",
              masterClassTrainerPosition: "DevOps Engineer",
              masterClassTrainerCompany: "CloudOps",
              masterClassName: "CI/CD Pipelines",
              StartTime: "2024-07-21T10:00:00Z",
              EndTime: "2024-07-21T12:00:00Z",
              peopleRegistered: "160",
            },
            {
              image: "/images/Rectangle34920.png",
              masterClassTrainer: "James Taylor",
              masterClassTrainerPosition: " Engineer",
              masterClassTrainerCompany: "NetTech",
              masterClassName: "Kubernetes for Beginners",
              StartTime: "2024-07-22T14:00:00Z",
              EndTime: "2024-07-22T16:00:00Z",
              peopleRegistered: "210",
            },
          ],
        },
      ],
    };
    
    const filteredData = ctgData.masterClassData
      .filter((item) => category === "All" || item.category === category)
      .flatMap((item) => item.data);
  return (
    <div className="w-full">
      <div className="w-full bg-[#0A0A0A] p-12">
        <nav className="">
          <ul className="flex ml-28 gap-48">
            {" "}
            {links.map((category) => (
              <li
                key={category}
                // className="text-white text-3xl hover:text-[#00A1E6] hover:border-b-4 hover:border-[#00A1E6] font-bold "
                onClick={() => setActiveCategory(category)}
                className={`text-white text-3xl font-bold cursor-pointer ${
                  activeCategory === category
                    ? "text-[#00A1E6] border-b-4 border-[#00A1E6]"
                    : "hover:text-[#00A1E6] hover:border-b-4 hover:border-[#00A1E6]"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Title and subtitle */}
      <div className="w-full">
        <div className="w-[80%]  mx-auto flex flex-col mt-8 ">
          <h1 className="text-2xl font-bold mb-4 uppercase text-[#0466C2]">
            {ctgData.title}
          </h1>
          <p className="text-base ">{ctgData.subtitle}</p>
        </div>
      </div>

      {/* Card */}
      <div className="w-[80%]  mx-auto flex   mt-8  gap-2">
        {/* categories section */}
        <div className="w-[20%]  border-2 rounded-lg h-72  p-3">
          <h1 className="text-[#0466C2] text-lg font-semibold mb-3">
            Categories
          </h1>
          <hr />
          <ul>
            {ctgData.masterClassData.map((item, index) => (
              <li
                key={index}
                className="my-3 hover:rounded-sm hover:bg-slate-400 hover:text-blue-500 p-2 cursor-pointer"
                onClick={() => setCategory(item.category)}
              >
                {item.category}
              </li>
            ))}
          </ul>
        </div>

        {/* Cards section */}
        <div className="w-[80%] flex flex-wrap gap-2">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden w-[30%] h-auto shadow-lg"
            >
              <div className="relative inset-0 bg-cover bg-center h-40">
                <div className="w-full h-full">
                  <Image
                    src={item.image}
                    width={300}
                    height={200}
                    alt="Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full absolute bottom-0 bg-[#16375D] rounded-t-md flex justify-between items-center p-2">
                  <div>
                    <h1 className="text-xs text-white font-bold">
                      by{" "}
                      <span className="text-yellow-400">
                        {item.masterClassTrainer}
                      </span>
                    </h1>
                    <h1 className="text-xs text-white font-bold">
                      Ex- {item.masterClassTrainerPosition}
                    </h1>
                    <h1 className="text-xs text-white font-bold">
                      {item.masterClassTrainerCompany}
                    </h1>
                  </div>
                  <button className="bg-white p-1 text-yellow-600 text-sm rounded-2xl">
                    Free Guidance
                  </button>
                </div>
              </div>

              <div className=" border-b-2 border-b-slate-300 p-4">
                <h1 className="text-[#78B6FF] font-semibold text-lg">
                  Build a career in {category} engineering
                </h1>
                <div className="mt-3 flex flex-col gap-2 font-medium text-sm">
                  <p>Start Time : {item.StartTime}</p>
                  <p>End Time : {item.EndTime}</p>
                </div>
              </div>

              <div className="p-5 flex justify-between items-center gap-2">
                <p className="text-sm w-1/2">
                  {item.peopleRegistered} People have registered
                </p>
                <button className=" w-1/2 text-sm border-2 border-black rounded-md font-semibold p-1">
                  Register now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
