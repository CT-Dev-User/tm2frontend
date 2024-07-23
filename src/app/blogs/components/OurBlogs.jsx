"use client";
import { useState } from "react";
import Image from "next/image";
const OurBlogs = () => {
  const itemList = [
    {
      title: "Frontend Developer",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Web Developer",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenA Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Backend Developer",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "Open Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Project Management",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Cloud Computing",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "DevOps",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Software Testing",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Quality Management",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Digital Marketing",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
    {
      title: "Data Science",
      cardData: [
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
        {
          image: "/blogImg1.png",
          title: "OpenAI Unveils GPT-4o: A Leap in AI Capabilities",
          date: "21 Mar, 2024",
          duration: "5 Min Read",
        },
      ],
    },
  ];
  const [category, setCategory] = useState(itemList[0]);

  const handleOnClick = (item) => {
    setCategory(item);
  };

  return (
    <div className="w-full mt-10">
      <div className="w-[80%] mx-auto mt-14 ">
        <h1 className="text-4xl font-bold uppercase text-[#0466C2]">
          Our Blogs
        </h1>
      </div>
      <div className="w-[80%] mx-auto mt-5 flex gap-2">
        <div className="w-[25%] border-2 rounded-lg ">
          <h1 className="text-[#0466C2] text-xl font-semibold mt-2 ml-5 mb-3">
            Categories
          </h1>
          <hr />
          <ul>
            {itemList.map((item, index) => (
              <li
                key={index}
                className="m-3 hover:rounded-sm hover:bg-slate-400 hover:text-blue-500 p-2 cursor-pointer"
                onClick={() => handleOnClick(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[75%]">
          <h1 className="text-[#0466C2] text-xl font-bold mt-2 ml-5 mb-3 uppercase">
            {category.title}
          </h1>
          <hr />
          <div className="grid grid-cols-3 gap-2">
            {category.cardData.slice(0, 6).map((card, index) => (
              <div key={index} className="card shadow rounded-md overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={200}
                  height={300}
                  className="w-full h-auto  object-cover mb-4"
                />
                <h2 className="text-2xl font-semibold m-4">{card.title}</h2>
                <div className=" flex justify-around mb-4">
                  <p className="text-sm text-gray-600">{card.date}</p>
                  <p className="text-sm text-gray-600">{card.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
