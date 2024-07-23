"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const HeroSection = ({ headerData }) => {
  let { title, subTitle, headerImage } = headerData;
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  
  if (!headerData) {
    return <p className="w-[80%] text-lg mx-auto">Loading...</p>;
  }
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/consultant-data", { name, email, phone })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <section id="homepage" className="w-[100%] h-100 bg-black">
        <div className="w-full h-[600px] relative flex justify-center items-center">
          <Image
            width={500}
            height={400}
            style={imgStyling}
            src={headerImage}
            alt="heroImg"
            className="w-full h-full p-0 m-0 object-cover"
          />
          <div className="w-[80%] mx-auto absolute">
            <div className="w-[54%] absolute top-[55%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between gap-16">
              <h1 className="w-full uppercase text-white text-start text-[40px] font-semibold ">
                {title}
              </h1>
              <p className="w-[35rem] text-start text-white text-lg font-light">
                {subTitle}
              </p>
            </div>

            {/* Consultant Form */}

            <div className=" py-5 px-2 bg-white flex flex-col absolute top-[55%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 rounded-md">
              <h3 className="my-3 text-center font-semibold">
                Get The Program Details
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  className="w-full p-2 my-2 rounded-md border-2 border-slate-300"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  className="w-full p-2 my-2 rounded-md border-2 border-slate-300"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="number"
                  placeholder="Phone Number*"
                  name="phone"
                  className="w-full p-2 my-2 rounded-md border-2 border-slate-300"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <div className="border-2 my-2 border-black w-[75%] mx-auto flex justify-center p-2 rounded-lg hover:bg-[#0c8ce9] hover:text-white hover:border-0 hover:my-[9px]">
                  <button
                    type="submit"
                    className="font-semibold flex items-center w-[100%] justify-center"
                  >
                    <span>Talk to our Consultant</span>
                    <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                      ›
                    </span>
                  </button>
                </div>
              </form>
              <p className="opacity-50 text-[.8rem] text-center">
                By submitting this form, you consent to our Terms of Use &
                Privacy Policy and table contacted by us via Email/Call.
              </p>
            </div>
          </div>
          <marquee
            direction="left"
            className="bg-[#03006d] text-white absolute top-[90%] "
          >
            <div className="flex p-2 text-lg">
              <h4>Limited Seats</h4>
              <h4>Batch starts on 9th April 2024</h4>
              <h4>Limited Seats</h4>
              <h4>Batch starts on 9th April 2024</h4>
              <h4>Limited Seats</h4>
              <h4>Batch starts on 9th April 2024</h4>
              <h4></h4>
            </div>
          </marquee>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
