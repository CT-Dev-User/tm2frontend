import Image from "next/image";

const BecomeInstructor = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "full",
    height: "auto",
  };
  return (
    <div className="w-[100vw] py-[60px] md:py-[20px] ">
      <div className="w-[85%] mx-auto flex justify-center items-center gap-10 md:gap-3 md:w-[90%] md:flex-col-reverse h-[450px] md:h-auto flex-wrap">
        <div className="w-[47%] h-[100%] p-2 md:p-0 md:w-[100%] md:mt-6 ">
          <div className="w-full ">
            <h1 className="text-[#0466C1] uppercase font-semibold text-3xl md:text-[20px]">
              Become a Instructor
            </h1>
            <p className="text-md leading-7 my-6 md:my-2 md:text-[15px]">
              Are you passionate about technology and enjoy teaching others?
              Consider becoming an instructor at our software training academy!{" "}
              <br />
              At our institute, our team of experienced instructors and mentors
              create highly engaging and impactful learning experiences for
              professionals and students. We offer a broad{" "}
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-[#0466C1] font-semibold text-2xl mb-8 md:mb-3 md:text-[19px]">
              Objective
            </h1>
            <p className="text-md leading-7 md:text-[15px] ">
              At our institute, our team of experienced instructors and mentors
              create highly engaging and impactful learning experiences for
              professionals and students. We offer a broad
            </p>
          </div>
        </div>
        <div className="w-[47%] h-[100%] md:h-[300px] p-4 md:p-0 md:w-[100%] ">
          <div className="w-full relative">
            {/* image divs */}
            <div className="w-[230px] h-auto md:w-[150px]">
              <Image
                width={500}
                height={500}
                style={imgStyling}
                src="/com-instruct-1.png"
                alt="A man writing on a whiteboard"
                className="w-full"
              />
            </div>


            <div className="w-[230px] h-auto absolute top-[45px] left-[235px] md:w-[150px] md:left-[160px]">
              <Image
                width={300}
                height={300}
                style={imgStyling}
                src="/com-instruct-2.png"
                alt="A man writing on a whiteboard"
                className="w-full"
              />
            </div>
            <div className="w-[230px] h-auto  absolute top-[235px] left-[50px] md:w-[150px] md:left-[50px] md:top-[160px]">
              <Image
                width={300}
                height={300}
                style={imgStyling}
                src="/com-instruct-3.png"
                alt="A man writing on a whiteboard"
                className="w-full h-auto"
              />

            </div>

            {/* smll grid div */}
            <div className="w-[40px] h-[40px] absolute top-0 left-[235px] md:left-[160px]">
            <Image
              width={100}
              height={100}
              quality={100}
              style={{ width: "", height: "" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-full h-full "
            />
            </div>
            <div className="w-[40px] h-[40px] absolute top-[235px] md:top-[160px]">
            <Image
              width={100}
              height={100}
              quality={100}
              style={{ width: "", height: "" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-full h-full "
            />
            </div>
          
            <div className="w-[40px] h-[40px] absolute top-[280px] left-[285px] md:top-[220px] md:left-[210px]">
            <Image
              width={100}
              height={100}
              quality={100}
              style={{ width: "", height: "" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-full h-full "
            />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;