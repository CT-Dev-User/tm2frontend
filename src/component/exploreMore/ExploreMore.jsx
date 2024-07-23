"use client";
import React, { useEffect, useState } from "react";
import Design from "../exploreMore/assets/design.png";
import testing from "../exploreMore/assets/search.png";
import dev from "../exploreMore/assets/dev.png";
import dm from "../exploreMore/assets/dm.png";
import "./exploreMore.css";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const ExploreMore = () => {
  const [courses, setCourses] = useState([]);
  const exploreTheCatData = [
    {
      title: "Design",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Development",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Testing",
      logo: testing,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Digital Marketing",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Data",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Cloud & DevOPs",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Cyber Security",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
    {
      title: "Salesforce",
      logo: Design,
      points: ["UI UX Design", "Graphics Design"],
    },
  ];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("https://tm2backend.vercel.app/get-courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <div className="w-[100vw] h-auto py-[50px] md:py-2 box-border ">
      <div className="w-[80%] mx-auto md:w-[90%]">
        <h1 className="text-[#0466C1] uppercase text-[23px] font-bold mb-3">
          Explore the Category
        </h1>
        <p className="mb-3 ">
          Check out what sets us apart and makes our programs the best online
          training and certification courses in India
        </p>
      </div>
      <div className="w-[80%] md:w-[95%] md:ps-1 flex flex-wrap mx-auto gap-[20px] md:gap-2 mt-5">
        {courses.map((data, i) => (
          <div
            className="main-div w-[250px] md:w-[48%] h-[250px] md:h-[200px] relative overflow-hidden rounded-md"
            key={i}
          >
            <div className="image-div absolute md:w-full w-[100%] h-[100%] border border-[#ccc] box-border p-[0px] flex flex-col justify-around rounded-md">
              <Image
              width={400}
              height={400}
                src={data.logo}
                alt={data.title}
                quality={100}
                className="w-[70px] h-[70px]"
              />
              <h4 className="font-bold text-[20px] md:text-[16px] md:w-full">{data.Coursecategory}</h4>
            </div>
            <Link href={{ pathname: '/find-jobs', query: { category: data.Coursecategory } }}>
              <div className="point-div absolute bottom-0 left-0 w-full h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out rounded-md gradient-bg">
                <h3 className="font-bold text-[26px] text-white p-4">
                  {data.title}
                </h3>
                <h5 className="font-bold text-4xl text-white p-4">&rarr;</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
