"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const NavBar2nd = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState(null);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setOpenCategoryDropdown(null); // Reset nested dropdowns when main dropdown changes
  };

  const categoryToggleDropdown = (index) => {
    setOpenCategoryDropdown(openCategoryDropdown === index ? null : index);
  };

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

  let navItems = [
    "Learn",
    "Preparation",
    "Success Stories",
    "Master Classes",
    "Resources",
    "Communities",
    "Find Jobs",
    "Refer & Earn",
    "Hire from us",
    "Become Instructor",
    "Contact Us",
  ];

  return (
    <header className="w-[100vw] bg-black text-white py-4 shadow-md box-border sticky top-0 z-10">
      <div className="w-[90%] md:w-[100%] flex items-center justify-between mx-auto ">
        <div className="w-1/3 md:w-full md:flex justify-between px-3  items-center ">
          <Link href="/" className="text-xl md:w-[150px]">
            <Image
              width={300}
              height={200}
              style={{ width: "auto", height: "auto" }}
              src="/tm-logo.svg"
              alt="Tech Momentum"
            />
          </Link>
          <div className="hidden md:block ">
            {navToggle ? (
              <AiOutlineClose
                onClick={handleNavToggle}
                className="text-4xl text-white"
              />
            ) : (
              <AiOutlineMenu
                onClick={handleNavToggle}
                className="text-4xl text-white"
              />
            )}
          </div>
        </div>
        <div
          className="flex items-center justify-end md:hidden w-2/3"
          id="menu"
        >
          <nav>
            <ul className="flex items-center gap-[20px] text-base text-white">
              <li>
                <Link href="/find-jobs">Find Jobs</Link>
              </li>
              <li>
                <Link href="/refer&earns">Refer & Earn</Link>
              </li>
              <li>
                <Link href="/hire-from-us">Hire from us</Link>
              </li>
              <li>
                <Link href="/become-instructor">Become an Instructor</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Mobile View */}
      <ul
        className={`hidden md:block duration-1000 w-[100vw] h-[100vh] overflow-y-auto fixed top-[60px] box-border py-5 text-[#0466C2] bg-white ${
          navToggle
            ? `right-0 opacity-100 z-[1]`
            : `right-[-100%] pointer-events-none opacity-0 z-[1]`
        }`}
      >
        {navItems.map((items, index) => (
          <li key={index} className="py-[10px]">
            <button
              className={`w-full overflow-hidden flex justify-between box-border gap-[20px] text-lg text-[#0466C2] border-b-[1px] border-[#0466C2] px-6 py-1 font-semibold`}
              aria-expanded={openDropdownIndex === index}
              onClick={() => toggleDropdown(index)}
            >
              {items}
              {index >= 6 ? (
                ""
              ) : openDropdownIndex === index ? (
                <FaAngleUp />
              ) : (
                <FaAngleDown />
              )}
            </button>

            <div
              className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
                openDropdownIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-5 box-border">
                {courseDownData.map((cd, catIndex) => (
                  <div key={catIndex}>
                    <button
                      className={`w-full overflow-hidden flex justify-between box-border gap-[20px] text-lg text-[#03006D] border-b-[1px] border-[#0466C2] px-2 py-1 font-semibold`}
                      aria-expanded={openCategoryDropdown === catIndex}
                      onClick={() => categoryToggleDropdown(catIndex)}
                    >
                      {cd.category}
                      {openCategoryDropdown === catIndex ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </button>
                    <div
                      className={`flex flex-col gap-2 transition-max-height duration-1000 ease-in-out overflow-hidden ${
                        openCategoryDropdown === catIndex
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      {cd.courseList.map((val, courseIndex) => (
                        <div key={courseIndex} className="box-border px-2 py-3 text-slate-500">{val}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar2nd;
