import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutusPage = ({ aboutUsData }) => {
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  let { desc: description, socialIcon, Aboutimage } = aboutUsData || {};
  return (
    <div id="overview" className="w-full my-10">
      <div className="w-[80%] md:w-[90%] mx-auto flex md:flex-col justify-between gap-3">
        {/* Content section */}
        <div className="w-1/2 md:w-full">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            About Us
          </h1>
          <p className="text-start my-5 md:w-[95%]">{description}</p>
          <div className="flex items-center my-5">
            {socialIcon.map((ic, index) => {
              return (
                <Link key={index} href={"#"} className="me-2">
                  <Image
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "cover",
                    }}
                    width={30}
                    height={30}
                    alt={ic.title}
                    src={ic.icon}
                  />
                </Link>
              );
            })}
            {/* <Link href={"#"} className="mx-2">
              <Image
                style={imgStyling}
                width={34}
                height={34}
                alt="Instagram"
                src="/instagram-square.png"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <Image
                style={imgStyling}
                width={40}
                height={34}
                alt="Youtube"
                src="/youtubefill-3.svg"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <Image
                width={34}
                height={34}
                style={imgStyling}
                alt="Linkedin"
                src="/linkedinfill-3.svg"
              />
            </Link> */}
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/2 md:w-full">
          <Image
            style={imgStyling}
            width={400}
            height={200}
            quality={100}
            src={Aboutimage}
            alt="about-img"
            sizes="(max-width: 200px) 100vw, 400px" // Adjust sizes for responsiveness
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;