"use client";
import Link from "next/link";
import { useState } from "react";
import './header.css'
const SecondaryNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const courseDownData = [
    {
      category: "Digital Marketing",
      courseList: ["Digital Marketing"],
    },
    {
      category: "Development",
      courseList: [
        "Full Stack JAVA Development",
        "Full Stack .Net Development",
        "Full Stack MERN Development",
        "Android / iOS Development",
      ],
    },
    {
      category: "Data Science",
      courseList: [
        "Data Science With Python",
        "Data Science With AI & ML",
        "Data Analytics",
        "Database SQL",
      ],
    },
    {
      category: "Design",
      courseList: [
        "UI/UX Design",
        "Data Science With AI & ML",
        "Data Analytics",
        "Database SQL",
      ],
    },
  ];

  const communitiesDropDownData = [
    {
      title: "Communities",
      data: ["Doubts solving community", "Campus Brand Ambassadors program"],
    },
  ];

  const preparationData = [
    {
      title: "Free Services",
      data: ["Interview Questions", " Quizzes", " Study Materials"],
    },
    {
      title: "Paid Services",
      data: [
        "1 to 1 sessions - Career Guidance",
        "1 to 1 sessions - Doubts solving",
        "Test series",
        "Mock Interviews",
      ],
    },
  ];

  const successStoryDropDownData = [
    {
      title: "Success Stories",
      data: [
        "Placed profiles & Testimonials",
        "College Collaborations - MOU,s",
        "Companies Collaborations - MOU,s",
      ],
    },
  ];

  const masterClassDropDownData = [
    {
      title: "Master Classes",
      data: ["Workshop", "Sessions", "Webinars"],
    },
  ];

  const resourceDropDown = [
    {
      title: "Resources",
      data: ["Blogs", "Research papers"],
    },
  ];

  return (
    <header className="md:hidden w-full py-[20px] box-border sticky top-[105px] z-10 bg-white">
    <div className="w-[80%] mx-auto flex flex-wrap justify-around relative">
      <ul className="flex space-x-4">
        <li
          className="px-3 font-semibold relative"
          onMouseEnter={() => setOpenDropdown("learn")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link href={"/learn"}>Learn</Link>
          <div
            className={`dropdown-content w-[100vw] bg-[white] ${openDropdown === "learn" ? "open" : ""}`}
          >
            <div className="flex flex-row flex-wrap gap-3  absolute left-[-280px] w-[100vw] bg-[white] mx-auto p-4 px-[40px] box-border">
              {courseDownData.map((data, index) => (
                <div key={index} className="w-[350px]">
                  <h2 className="text-[blue] underline py-2 px-2 text-[18px]">
                    {data.category}
                  </h2>
                  <ul className="w-full flex flex-col gap-1 text-slate-400">
                    {data.courseList.map((course, i) => (
                      <li key={i}>
                        <Link
                          href="/college-collaborations"
                          className="block hover:bg-gray-200 py-2 px-2"
                        >
                          {course}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li
          className="px-3 font-semibold relative"
          onMouseEnter={() => setOpenDropdown("preparation")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link href="/job-preparation">Preparation</Link>
          <div
            className={`dropdown-content bg-[white] w-[100vw] ${openDropdown === "preparation" ? "open" : ""}`}
          >
            <div className="flex flex-row gap-x-[20px] absolute left-[-360px] w-[100vw] bg-[white] mx-auto px-[40px] py-3 box-border">
              {preparationData.map((data, index) => (
                <div key={index} className="w-[350px]">
                  <h2 className="text-[blue] underline py-2 px-2 text-[18px]">
                    {data.title}
                  </h2>
                  <ul className="w-full flex flex-col gap-1 text-slate-400">
                    {data.data.map((items, i) => (
                      <li key={i}>
                        <Link
                          href="/college-collaborations"
                          className="block hover:bg-gray-200 py-2 px-2"
                        >
                          {items}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li
          className="px-3 font-semibold relative"
          onMouseEnter={() => setOpenDropdown("communities")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link href="/communities">Communities</Link>
          <div
            className={`dropdown-content w-[100vw] ${openDropdown === "communities" ? "open" : ""}`}
          >
            <div className="flex flex-row flex-wrap gap-3 w-[100vw] absolute left-[-500px] bg-[white] mx-auto p-4 px-[40px] box-border">
              {communitiesDropDownData.map((data, index) => (
                <div key={index} className="w-[350px]">
                  <h2 className="text-[blue] underline py-2 px-2 text-[18px]">
                    {data.title}
                  </h2>
                  <ul className="w-full flex flex-col gap-1 text-slate-400">
                    {data.data.map((items, i) => (
                      <li key={i}>
                        <Link
                          href="/college-collaborations"
                          className="block hover:bg-gray-200 py-2 px-2"
                        >
                          {items}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li
          className="px-3 font-semibold relative"
          onMouseEnter={() => setOpenDropdown("successStories")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link href="/success-stories">Success Stories</Link>
          <div
            className={`dropdown-content w-[100vw] ${openDropdown === "successStories" ? "open" : ""}`}
          >
            <div className="flex flex-row flex-wrap gap-3 w-[100vw] mx-auto bg-[white] absolute left-[-630px] p-4 px-[40px] box-border">
              {successStoryDropDownData.map((data, index) => (
                <div key={index} className="w-[350px]">
                  <h2 className="text-[blue] underline py-2 px-2 text-[18px]">
                    {data.title}
                  </h2>
                  <ul className="w-full flex flex-col gap-1 text-slate-400">
                    {data.data.map((items, i) => (
                      <li key={i}>
                        <Link
                          href="/college-collaborations"
                          className="block hover:bg-gray-200 py-2 px-2"
                        >
                          {items}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li
          className="px-3 font-semibold relative"
          onMouseEnter={() => setOpenDropdown("masterClass")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link href="/master-class">Master Class</Link>
          <div
            className={`dropdown-content ${openDropdown === "masterClass" ? "open" : ""}`}
          >
            <div className="flex flex-row flex-wrap gap-3 w-[100vw] absolute left-[-800px] bg-[white] mx-auto p-4 px-[40px] box-border">
              {masterClassDropDownData.map((data, index) => (
                <div key={index} className="w-[350px]">
                  <h2 className="text-[blue] underline py-2 px-2 text-[18px]">
                    {data.title}
                  </h2>
                  <ul className="w-full flex flex-col gap-1 text-slate-400">
                    {data.data.map((items, i) => (
                      <li key={i}>
                        <Link
                          href="/college-collaborations"
                          className="block hover:bg-gray-200 py-2 px-2"
                        >
                          {items}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li
          className="px-3 font-semibold relative"
          onMouseEnter={() => setOpenDropdown("resources")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link href="/resources">Resources</Link>
          <div
            className={`dropdown-content ${openDropdown === "resources" ? "open" : ""}`}
          >
            <div className="flex flex-row flex-wrap gap-3 mx-auto p-4  w-[100vw] absolute left-[-950px] bg-[white] px-[40px] box-border">
              {resourceDropDown.map((data, index) => (
                <div key={index} className="w-[350px]">
                  <h2 className="text-[blue] underline py-2 px-2 text-[18px]">
                    {data.title}
                  </h2>
                  <ul className="w-full flex flex-col gap-1 text-slate-400">
                    {data.data.map((items, i) => (
                      <li key={i}>
                        <Link
                          href="/college-collaborations"
                          className="block hover:bg-gray-200 py-2 px-2"
                        >
                          {items}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li className="px-3 font-semibold">
          <Link href="/road-map">Roadmaps</Link>
        </li>
      </ul>

      <button className="bg-white px-5 py-1 border-2 border-black rounded-md">
        Login
      </button>
    </div>
  </header>

  );
};

export default SecondaryNavbar;