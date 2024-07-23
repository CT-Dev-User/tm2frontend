import PractitionersCardComponent from "./PractitionersCardComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const PractitionersPageComponent = ({ practitionersData }) => {

  if (!practitionersData) {
    return <p className="w-[80%] text-lg mx-auto">Loading...</p>;
  }
  let { Title, SubTitle, companyLogoImages, practioners } = practitionersData;

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <div>
          <FaAngleRight className="text-black w-0 h-0" />
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <div>
          <FaAngleLeft className="text-black w-[0px] h-0" />
        </div>
      </div>
    );
  };

  const settings1 = {
    dots: false,
    arrow: null,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          arrow: null,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }

  return (
    <section
      className="self-stretch bg-[#030A21] w-[100vw] h-[auto] box-border py-[100px] md:py-[30px] text-cornflowerblue font-sub-heading"
    >
      <div className='w-[80%] md:px-3 mx-auto flex md:w-[95%] flex-wrap'>
        <div className='w-[50%] md:px-1 mx-auto md:w-full'>
          <h1 className='text-4xl font-bold md:text-[24px] text-[#78b6ff] w-[70%] md:w-full md:py-1'>{Title}</h1>
          <p className='text-[20px] mt-2 md:text-[16px] text-white w-[65%] md:w-full md:mb-3'> {SubTitle}</p>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[250px] md:mx-auto max-w-full md:w-full">
          <Image
            width={400}
            height={300}
            style={imgStyling}
            className="ml-[-3px] self-stretch h-[205px] relative max-w-full overflow-hidden shrink-0 "
            alt=""
            src="/frame-1000005918.svg"
          />
        </div>

      </div>

      {/* Carousel section */}

      <div className="w-[80%] mx-auto box-border max-w-full text-xl text-gray-1900 mt-[70px] md:mt-5 md:h-[330px] flex justify-center item-center md:w-[95%] md:mx-auto">
        <Slider {...settings1} className="w-[100%] flex justify-center">
          {practioners.map((pt, index) => {
            return (
              <div key={index}>
                <PractitionersCardComponent
                  practitionerData={pt}
                  isCompany={true}
                />
              </div>
            );
          })}
        </Slider>


      </div>
      <div className="w-[1451px] h-[60px] flex flex-row items-start justify-center max-w-full rounded-lg mt-10 md:mt-3">
        <button className="cursor-pointer p-8 bg-[transparent] h-[42px] rounded-xl box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0  md:w-[120px] md:h-[20px] md:p-5">
          <div className="relative flex justify-center items-center text-xl font-medium font-sub-heading text-white text-left  min-w-[93px] ">
            <span className="md:text-[15px]">See More</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start ">
              ›
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PractitionersPageComponent;