"use client";
import Image from "next/image";
import "../style.css";
import { useMemo, useState, useEffect } from "react";

const PerksCard = ({
  id,
  title,
  points,
  color1,
  color2,
  colorWhite,
  image,
}) => {
  const bgGradColor = useMemo(() => {
    return {
      background: `linear-gradient(to right,${color1},${color2})`,
    };
  }, [color1, color2]);

  const [circleDimensions, setCircleDimensions] = useState({
    width: "220px",
    height: "220px",
    top: "15px",
    right: "-17px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // If the screen width is md (768px) or larger, decrease the size
        setCircleDimensions({
          width: "220px",
          height: "220px",
          top: "15px",
          right: "-17px",
        });
      } else {
        // If the screen width is smaller than md, use the default size
        setCircleDimensions({
          width: "150px",
          height: "150px",
          top: "130px",
          right: "-17px",
        });
      }
    };

    // Set the initial dimensions based on the current screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let circleStyle = {
    position: "absolute",
    top: circleDimensions.top,
    right: circleDimensions.right,
    borderRadius: "50%",
    width: circleDimensions.width,
    height: circleDimensions.height,
    background: colorWhite
      ? `linear-gradient(${colorWhite}, ${colorWhite})`
      : `linear-gradient(${color1}, ${color2})`,
    zIndex: "1",
  };
  return (
    <div
      className={`relative ${
        id === 2 || id === 3 ? "col-span-1" : "col-span-2"
      } w-[100] h-[180px] md:h-[250px] rounded-lg  flex items-center justify-between z-0 overflow-hidden md:flex-col`}
      style={bgGradColor}
    >
      {/* Content Section */}
      <div className="w-[70%] md:w-full z-[2] p-5">
        <h2 className="w-[65%] md:w-full text-white text-2xl font-semibold">
          {title}
        </h2>
        <ul className="w-full text-white text-sm mt-2 ps-4">
          {points.map((item, index) => (
            <li key={index} className="list-disc ">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="absolute end-[40px]  md:bottom-8 md:end-0 h-20 z-[2]">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          style={{ width: "120px", height: "120px" }}
        />
      </div>

      {/* Circle Div */}
      <div style={circleStyle}></div>
    </div>
  );
};

export default PerksCard;