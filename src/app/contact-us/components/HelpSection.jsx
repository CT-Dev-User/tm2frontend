import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HelpSection = ({ address, contactDetails, buildingImg }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNo, setPhoneNo] = useState("");
  let [currentlyPursing, setCurrentlyPursuing] = useState("");
  let [year, setYear] = useState("");
  let [courseChooseWithTM, setCourseChooseWithTM] = useState("");

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://tm2backend.vercel.app/add-contact-us-form-data", {
        name,
        email,
        phoneNo,
        currentlyPursing,
        year,
        courseChooseWithTM,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setPhoneNo("");
    setCurrentlyPursuing("");
    setYear("");
    setCourseChooseWithTM("");
  };
  return (
    <section id="helpYou" className="w-[100vw] my-10 py-8 ">
      <h1 className="w-[80%] md:w-[90%] md:text-[#0466C1] mx-auto  uppercase text-3xl text-[#78B6FF] font-semibold mb-6 md:mb-0 md:text-2xl">
        How can help you?
      </h1>

      {/* content section */}
      <div className="w-[80%] md:w-[90%] flex justify-between mx-auto p-3 md:p-0">
        <div className="w-[55%] md:w-full flex flex-col gap-8 pt-10">
          <div className="flex items-start justify-between gap-3">
            <Image
              width={100}
              height={100}
              src="/location.png"
              alt="location"
              className="w-6 h-6"
            />
            <p className="text-start text-[17px] tracking-wider md:text-[12px]">
              {address}
            </p>
          </div>
          <div className="flex md:flex-wrap justify-between items-center gap-2 ">
            {contactDetails.map((ct, index) => {
              return (
                <div
                  key={index}
                  className="w-1/3 md:w-[48%] my-3 md:my-0 flex flex-col justify-between items-center border-[1px] border-slate-400 rounded-md overflow-hidden"
                >
                  <div className="w-full  bg-[#03006D] px-6 py-2 text-white flex justify-center items-center">
                    {ct.title}
                  </div>
                  <a
                    type={`mailto:${ct.email}`}
                    className="w-full md:p-0 md:py-3 p-2 text-sm text-[#679AC8] md:text-[11px] md:text-center"
                  >
                    {ct.email}
                  </a>
                  <p className="text-lg font-medium p-2 md:text-sm md:text-[#03006D]">
                    {ct.mobNo}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src={buildingImg}
              alt="buildings"
              className="w-full h-full "
            />
          </div>
        </div>

        {/* Form section */}
        <div className="w-[40%] my-auto md:hidden">
          <div>
            <p className="text-[#67ADFF] font-semibold text-xl uppercase mb-1">
              Request more information
            </p>
            <form
              className="flex flex-col justify-between items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Your full name"
              />
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Email"
              />
              <input
                type="text"
                name="phoneNo"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Phone number"
              />
              <input
                type="text"
                name="currentlyPursing"
                onChange={(e) => setCurrentlyPursuing(e.target.value)}
                value={currentlyPursing}
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Currently Pursing"
              />
              <input
                type="text"
                name="year"
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Year"
              />
              <input
                type="text"
                name="courseChooseWithTM"
                onChange={(e) => setCourseChooseWithTM(e.target.value)}
                value={courseChooseWithTM}
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Course choose with TechMomentum"
              />
              <div className="flex justify-center items-center mt-8 mb-3">
                <button
                  type="submit"
                  className=" my-3bg-white max-h-10 px-10 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0"
                >
                  <span>Enquire Now</span>
                  <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                    ›
                  </span>
                </button>
              </div>
              <p>
                By tapping submit, you agree to the{" "}
                <span className="text-[#3B82F0]">Terms & Conditions</span> and{" "}
                <span className="text-[#3B82F0]">Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;