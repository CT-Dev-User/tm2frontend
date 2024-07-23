// "use client";
// import "./style.css";
// import { useState } from "react";
// import Image from "next/image";

// const Blogs = () => {
//   const blogData = {
//     blogtitle: "Top 10 Unique Project Ideas for College Students",
//     date: "May 30, 2024",
//     readTime: "5 min read",
//     views: "1004 views",
//     projectData: [
//       {
//         title: "Project 1",
//         desc: "In this blog, we’ll learn how to fetch and display data from APIs and use it in a ReactJS app. There are multiple ways to fetch data in a React application, and we’ll walk you through those methods. With the help of APIs, we can fetch the data from servers and display it in our application. Let’s first understand what an API is API stands for Application Programming Interface, which is a method of communication between different applications. ReactJS is an open-source JavaScript-based library developed by Facebook used to create web applications’ user interfaces. As ReactJS is dynamic in nature, we can get the data using APIs and display it in our applicationTo render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an applicationWhen we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API works In this blog, we’ll learn how to fetch and display data from APIs and use it in a ReactJS app. There are multiple ways to fetch data in a React application, and we’ll walk you through those methods. With the help of APIs, we can fetch the data from servers and display it in our application. Let’s first understand what an API is.API stands for “Application Programming Interface, which is a method of communication between different applications. ReactJS is an open-source JavaScript-based library developed by Facebook used to create web applications’ user interfaces. As ReactJS is dynamic in nature, we can get the data using APIs and display it in our applicationTo render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an application.When we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API works.dynamic in nature, we can get the data using APIs and display it in our applicationTo render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an application.When we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API worksdynamic in nature, we can get the data using APIs and display it in our applicationTo render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an application.When we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API worksdynamic in nature, we can get the data using APIs and display it in our applicationTo render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an application.When we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API works",
//       },
//       { title: "Project 2", desc: "Description of Project 2" },
//       { title: "Project 3", desc: "Description of Project 3" },
//       { title: "Project 4", desc: "Description of Project 4" },
//       { title: "Project 5", desc: "Description of Project 5" },
//       { title: "Project 6", desc: "Description of Project 6" },
//       { title: "Project 7", desc: "Description of Project 7" },
//       { title: "Project 8", desc: "Description of Project 8" },
//       { title: "Project 9", desc: "Description of Project 9" },
//       { title: "Project 10", desc: "Description of Project 10" },
//     ],
//   };

//   const [progress, setProgress] = useState(0);
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
//   const steps = blogData.projectData.length;

//   const btnData = [
//     "Best In Value",
//     "Affordable",
//     "Excellent Mentors",
//     "Best Curriculum",
//   ];

//   const handleItemClick = (index) => {
//     setCurrentProjectIndex(index);
//     setProgress((index + 1) * (100 / steps));
//   };

//   return (
//     <div className="w-full ">
//       <div className="w-[80%] mx-auto">
//         <div className="mt-10">
//           <h1 className="text-4xl font-bold uppercase text-[#0466C2]">Blogs</h1>
//           <h1 className="text-2xl font-semibold mt-8">{blogData.blogtitle}</h1>
//         </div>

//         {/* slides*/}
//         <div className="flex h-4 items-center mt-10 ">
//           <p className="pt-1 px-5 border-r-2 border-black">{blogData.date}</p>
//           <p className="pt-1 px-5 border-r-2 border-black">
//             {blogData.readTime}
//           </p>
//           <p className="pt-1 px-5 border-r-2 border-black">{blogData.views}</p>
//         </div>

//         <div className="w-full flex mt-8 gap-3">
//           <div className="w-[63%] border-2 p-5 ">
//             <h1 className="text-xl font-semibold">
//               {currentProjectIndex + 1}.
//               {blogData.projectData[currentProjectIndex].title}
//             </h1>
//             <div className="flex flex-col gap-4 m-2 text-sm font-normal">
//               <p>{blogData.projectData[currentProjectIndex].desc}</p>
//             </div>
//           </div>

//           <div className="w-[37%] ">
//             <div className="w-full h-[450px]  bg-slate-100 rounded-lg  border-2 ">
//               <h1 className="text-lg font-semibold p-6 border-b-2 border-b-slate-900">
//                 Table of content
//               </h1>

//               <div className="flex gap-3 mt-2 p-2">
//                 <div className="w-2 max-h-[steps*20px] bg-[#D9D9D9] relative rounded-full mt-2 mb-4">
//                   <div
//                     className="absolute top-0 left-0 bg-blue-500 rounded-full"
//                     style={{ height: `${progress}%`, width: "100%" }}
//                   ></div>
//                 </div>
//                 <div
//                   className="h-80 w-full overflow-y-scroll scroll-smooth "
//                   style={{
//                     msOverflowStyle: "none" /* IE and Edge */,
//                     scrollbarWidth: "none" /* Firefox */,
//                   }}
//                 >
//                   <ul className="w-full">
//                     {blogData.projectData.map((project, index) => (
//                       <li
//                         key={index}
//                         onClick={() => handleItemClick(index)}
//                         className="p-2  cursor-pointer"
//                       >
//                         {index + 1}. {project.title}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* 2nd component */}
//             <div className="w-full rounded-lg  border-2 mt-2 p-4">
//               <h1 className="text-lg uppercase font-bold mt-4">
//                 want to start career in iT ?
//               </h1>
//               <button className="p-2 border-2 text-xl font-semibold border-black m-8">
//                 Talk to our Consultant
//               </button>
//             </div>

//             {/* 3rd component */}
//             <div className="w-full border-2 mt-2">
//               <div className="flex">
//                 <div className="rounded-full overflow-hidden m-3">
//                   <Image
//                     src="/images/Ellipse1.png"
//                     alt="image"
//                     objectFit="cover"
//                     width={100}
//                     height={100}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <h1 className="m-5 text-2xl font-semibold">Pranay Gaikwad</h1>
//                   <p className="text-sm font-medium">
//                     UI / UX intern, Conscientious.Pvt
//                   </p>
//                 </div>
//               </div>
//               <div className="m-2 font-normal">
//                 <p>
//                   Since our inception in 2004, ValueCoders has been delivering
//                   IT outsourcing services worldwide.
//                 </p>
//                 <div className=" mt-2 grid grid-cols-2">
//                   {btnData.map((item, index) => (
//                     <button
//                       key={index}
//                       className="bg-green-500 m-2 text-white py-1 px-1 rounded flex  space-x-2"
//                     >
//                       <div className="w-6 h-6 bg-white rounded-full">
//                         &#10004;
//                       </div>
//                       <span>{item}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

"use client";
import { useState } from "react";
import Image from "next/image";
import RelatedCourse from "./RelatedCourses"

const Blogs = () => {
  const blogData = {
    blogtitle: "Top 10 Unique Project Ideas for College Students",
    date: "May 30, 2024",
    readTime: "5 min read",
    views: "1004 views",
    projectData: [
      {
        title: "Project 1",
        desc: "In this blog, we’ll learn how to fetch and display data from APIs and use it in a ReactJS app. There are multiple ways to fetch data in a React application, and we’ll walk you through those methods. With the help of APIs, we can fetch the data from servers and display it in our application. Let’s first understand what an API is. API stands for Application Programming Interface, which is a method of communication between different applications. ReactJS is an open-source JavaScript-based library developed by Facebook used to create web applications’ user interfaces. As ReactJS is dynamic in nature, we can get the data using APIs and display it in our application. To render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an application. When we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API works. In this blog, we’ll learn how to fetch and display data from APIs and use it in a ReactJS app. There are multiple ways to fetch data in a React application, and we’ll walk you through those methods. With the help of APIs, we can fetch the data from servers and display it in our application. Let’s first understand what an API is. API stands for Application Programming Interface, which is a method of communication between different applications. ReactJS is an open-source JavaScript-based library developed by Facebook used to create web applications’ user interfaces. As ReactJS is dynamic in nature, we can get the data using APIs and display it in our application. To render some data in our front end, we either need a backend to store our data and then make use of the data, or we can simply use APIs to have some mock data while building an application. When we use APIs, we don’t need a backend and are also not required to build anything from scratch. Mostly, we use the REST API or the GraphQL API to access the data added to the server. Before we go into depth, we should understand how an API works.",
      },
      { title: "Project 2", desc: "Description of Project 2" },
      { title: "Project 3", desc: "Description of Project 3" },
      { title: "Project 4", desc: "Description of Project 4" },
      { title: "Project 5", desc: "Description of Project 5" },
      { title: "Project 6", desc: "Description of Project 6" },
      { title: "Project 7", desc: "Description of Project 7" },
      { title: "Project 8", desc: "Description of Project 8" },
      { title: "Project 9", desc: "Description of Project 9" },
      { title: "Project 10", desc: "Description of Project 10" },
    ],
  };

  const [progress, setProgress] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const steps = blogData.projectData.length;

  const btnData = [
    "Best In Value",
    "Affordable",
    "Excellent Mentors",
    "Best Curriculum",
  ];

  const handleItemClick = (index) => {
    setCurrentProjectIndex(index);
    setProgress((index + 1) * (100 / steps));
  };

  return (
    <div className="w-full px-4">
      <div className="w-full lg:w-[80%] mx-auto">
        <div className="mt-10">
          <h1 className="text-4xl font-bold uppercase text-[#0466C2]">Blogs</h1>
          <h1 className="text-2xl font-semibold mt-8">{blogData.blogtitle}</h1>
        </div>

        {/* slides*/}
        <div className="flex h-4 items-center mt-10 space-x-5">
          <p className="pt-1 px-5 border-r-2 border-black">{blogData.date}</p>
          <p className="pt-1 px-5 border-r-2 border-black">
            {blogData.readTime}
          </p>
          <p className="pt-1 px-5 border-r-2 border-black">{blogData.views}</p>
        </div>

        <div className="w-full flex flex-col lg:flex-row mt-8 gap-3">
          <div className="w-full lg:w-[63%] border-2 p-5">
            <h1 className="text-xl font-semibold">
              {currentProjectIndex + 1}.
              {blogData.projectData[currentProjectIndex].title}
            </h1>
            <div className="flex flex-col gap-4 m-2 text-sm font-normal">
              <p>{blogData.projectData[currentProjectIndex].desc}</p>
            </div>
          </div>

          <div className="w-full lg:w-[37%]">
            <div className="w-full h-[450px] bg-slate-100 rounded-lg border-2">
              <h1 className="text-lg font-semibold p-6 border-b-2 border-b-slate-900">
                Table of content
              </h1>

              <div className="flex gap-3 mt-2 p-2">
                <div className="w-2 max-h-[steps*20px] bg-[#D9D9D9] relative rounded-full mt-2 mb-4">
                  <div
                    className="absolute top-0 left-0 bg-blue-500 rounded-full"
                    style={{ height: `${progress}%`, width: "100%" }}
                  ></div>
                </div>
                <div
                  className="h-80 w-full overflow-y-scroll scroll-smooth"
                  style={{
                    msOverflowStyle: "none" /* IE and Edge */,
                    scrollbarWidth: "none" /* Firefox */,
                  }}
                >
                  <ul className="w-full">
                    {blogData.projectData.map((project, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className="p-2 cursor-pointer"
                      >
                        {index + 1}. {project.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd component */}
            <div className="w-full rounded-lg border-2 mt-2 p-4">
              <h1 className="text-lg uppercase font-bold mt-4">
                Want to start career in IT?
              </h1>
              <button className="p-2 border-2 text-xl font-semibold border-black m-8">
                Talk to our Consultant
              </button>
            </div>

            {/* 3rd component */}
            <div className="w-full border-2 mt-2">
              <div className="flex flex-col md:flex-row items-center">
                <div className="rounded-full overflow-hidden m-3">
                  <Image
                    src="/images/Ellipse1.png"
                    alt="image"
                    objectFit="cover"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h1 className="m-5 text-2xl font-semibold">Pranay Gaikwad</h1>
                  <p className="text-sm font-medium">
                    UI / UX intern, Conscientious.Pvt
                  </p>
                </div>
              </div>
              <div className="m-2 font-normal">
                <p>
                  Since our inception in 2004, ValueCoders has been delivering
                  IT outsourcing services worldwide.
                </p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2">
                  {btnData.map((item, index) => (
                    <button
                      key={index}
                      className="bg-green-500 m-2 text-white py-1 px-1 rounded flex space-x-2"
                    >
                      <div className="w-6 h-6 bg-white rounded-full">
                        &#10004;
                      </div>
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
