import Image from "next/image";

const Gallery = ({ galleryImages }) => {
  
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
            Gallery
          </h1>
          <p className="text-start my-5 text-slate-400">
            TechMomentum is your gateway to professional growth and success in
            the digital age. Our comprehensive courses cover the latest trends
            in technology, digital marketing, and business innovation, providing
            you with the expertise to stay ahead of the curve. Join us and
            embark on a journey of continuous learning and achievement.
          </p>
        </div>

        {/* Images section */}
        <div className="grid grid-cols-6 gap-4 p-4 my-10  md:hidden">
          {galleryImages.map((val, index) => {
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
                  src={val.image}
                  alt={val.event}
                />
              </div>
            );
          })}
        </div>

        {/* Images section for mobile*/}
        <div className="grid grid-cols-4 gap-2 my-10">
          {galleryImages.map((val, index) => {
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
                  src={val.image}
                  alt={val.event}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;