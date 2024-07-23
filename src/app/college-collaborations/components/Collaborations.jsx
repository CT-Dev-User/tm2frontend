"use client";
import { useState } from "react";
import "../style.css";

const Collaborations = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const data = {
    amravati: [
      "Utkal University, Amravati",
      "The Institute of Company Secretaries of India, Amravati",
      "Charmpa College, Amravati",
      "Regional Degree College, Rambag, Amravati",
      "S.N. College, Rajkanika, Amravati",
      "Indian Institute of Metals (MoA), Amravati",
      "Royal H.S.S. College, Amravati",
      "Indian Institute of Metals, Amravati",
      "Subhadra Mahatab Mohavidyalaya, Amravati",
      "Ekamra College, Amravati",
    ],
    akola: [
      "Ekamra College, Amravati",
      "Shri Shivaji College of Arts, Commerce, and Science ",
      "College of Engineering and Technology ",
    ],
    nagpur: [
      "Visvesvaraya National Institute of Technology (VNIT)",
      "Government Medical College (GMC)",
      "Rashtrasant Tukadoji Maharaj Nagpur University",
    ],
    nashik: [
      "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
      "MVP Samaj's KBT College of Engineering",
      "Symbiosis Institute of Operations Management",
    ],
    kolhapur: [
      "Shivaji University ",
      "D Y Patil College of Engineering and Technology ",
      "Kolhapur Institute of Technology's College of Engineering",
    ],
    solapur: [
      "Punyashlok Ahilyadevi Holkar Solapur University",
      "Walchand Institute of Technology",
      "Seth Govind Raghunath Sable College of Pharmacy",
    ],
  };

  const items = data[selectedCategory] || [];
  return (
    <div className="w-full h-auto my-10 md:my-6 py-6">
      <div className="w-[80%] md:w-[90%] mx-auto">
        <div className="flex md:flex-col justify-between items-center md:items-start">
          <h1 className="text-3xl  md:text-2xl text-[#0466C1] font-semibold uppercase my-6">
            College collaborations
          </h1>

          <select
            id="categorySelect"
            className=" w-auto h-10 bg-white border-[1px] border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline md:ml-56 "
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option>Filter</option>
            <option value="amravati">Amravati</option>
            <option value="akola">Akola</option>
            <option value="nagpur">Nagpur</option>
            <option value="nashik">Nashik</option>
            <option value="kolhapur">Kolhapur</option>
            <option value="solapur">Solapur</option>
          </select>
        </div>

        <div className="w-full mt-4 md:mt-0 max-h-auto overflow-hidden">
          {selectedCategory && items.length > 0 ? (
            <>
              <ul className="pl-5 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 md:flex md:flex-col">
                {items.map((val, index) => {
                  return (
                    <li
                      key={index}
                      className=" list-disc p-2 text-gray-700 ms-2  rounded"
                    >
                      {val}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
    // <div className="p-4">

    //   <ul className="mt-4 list-disc pl-5">
    //     {data[selectedCategory].map((item, index) => (
    //       <li key={index} className="text-gray-700">
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Collaborations;