// import Image from "next/image";
// import React from "react";

// const CollegeCollaborations = () => {
//   return (
//     <div className="w-full my-8 py-6 bg-black text-white">
//       <div className="w-[80%] mx-auto">
//         {/* Heading section */}
//         <div className="my-6">
//           <h1 className="uppercase text-[#78B6FF] text-3xl font-semibold my-3">
//             Collaborations with college
//           </h1>
//           <p className="text-start my-5 text-slate-400">
//             Since our inception in 2004, ValueCoders has been delivering IT
//             outsourcing services worldwide. We combine business domain
//             knowledge, proven methodologies, and the technology expertise of
//             450+ skilled software professionals to yield high-quality solutions
//             that add value to businesses.
//           </p>
//         </div>

//         {/* Image section */}
//         <div className="flex flex-wrap my-10">
//           {/* img 1 */}
//           <div className="relative w-1/3 h-[300px]">
//             <Image
//               src={"/image-108@2x.png"}
//               width={500}
//               height={200}
//               alt="Image 1"
//               sizes="(max-width: 400px) 100vw, 100%"
//             />
//           </div>

//           {/* img 2 */}
//           <div className="relative w-1/3 h-[300px]">
//             <Image
//               src={"/image-109@2x.png"}
//               width={500}
//               height={200}
//               alt="Image 2"
//               sizes="(max-width: 400px) 100vw, 400px"
//             />
//           </div>

//           {/* img 3 */}
//           <div className="relative w-1/3 h-[300px]">
//             <Image
//               src={"/image111.png"}
//               width={500}
//               height={200}
//               alt="Description of the image"
//               sizes="(max-width: 400px) 100vw, 400px"
//             />
//           </div>

//           {/* img 4 */}
//           <div className="relative mt-2 w-1/2 h-[500px] ">
//             <Image
//               src={"/image-111@2x.png"}
//               style={{ objectFit: "cover", width: "100%", height: "100%" }}
//               width={500}
//               height={100}
//               alt="Description of the image"
//               sizes="(max-width: 400px) 100vw, 400px"
//             />
//           </div>

//           {/* img 5 */}
//           <div className="relative p-3 mt-2 w-1/2 h-[500px] ">
//             <Image
//               src={"/college-collaboration-img.png"}
//               className=""
//               style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "20px" }}
//               width={500}
//               height={100}
//               alt="Description of the image"
//               sizes="(max-width: 400px) 100vw, 400px"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeCollaborations;

import Image from "next/image";

const CollegeCollaborations = () => {
  let imgData = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
    "/gallery7.png",
    "/gallery8.png",
    "/gallery9.png",
  ];

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div id="gallery" className="w-full my-8 py-6 bg-black text-white">
      <div className="w-[80%] md:w-[90%] mx-auto">
        {/* Heading section */}
        <div className="my-6 md:my-1">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            Collaborations with college
          </h1>
          <p className="text-start my-5 text-slate-400">
            Since our inception in 2004, ValueCoders has been delivering IT
            outsourcing services worldwide. We combine business domain
            knowledge, proven methodologies, and the technology expertise of
            450+ skilled software professionals to yield high-quality solutions
            that add value to businesses.
          </p>
        </div>

        {/* Images section */}
        <div className="grid grid-cols-6 gap-4 p-4 my-10  md:hidden">
          {imgData.map((val, index) => {
            return (
              <div
                key={index}
                className={`relative ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 1
                    ? "col-span-2"
                    : index === 4
                    ? "col-span-2"
                    : index === 7
                    ? "col-span-4"
                    : index === 8
                    ? "col-span-2"
                    : ""
                } `}
              >
                <Image
                  width={400}
                  height={200}
                  style={imgStyling}
                  src={val}
                  alt={val}
                />
              </div>
            );
          })}
        </div>

        {/* Images section for mobile*/}
        <div className="grid grid-cols-4 gap-2 my-10">
          {imgData.map((val, index) => {
            return (
              <div
                key={index}
                className={` hidden md:block relative ${
                  index === 0
                    ? "col-span-2 "
                    : index === 1
                    ? "col-span-2 "
                    : index === 2
                    ? "col-span-2"
                    : index === 3
                    ? "col-span-2"
                    : "col-span-4"
                }`}
              >
                <Image
                  width={400}
                  height={200}
                  style={imgStyling}
                  src={val}
                  alt={val}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollegeCollaborations;