import Link from "next/link";
import "../style.css";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <div id="socialMedia" className="w-full md:h-full mt-8 relative bg-black">
      {/* grid structure */}
      <div className="w-[80%]  text-white md:hidden px-20">
        <div className="grid grid-cols-3  p-4">
          <div className="gradient_border_right col-span-2 box-border flex flex-col justify-center ps-16 pb-10">
            <p className="font-semibold text-lg uppercase mb-5">
              Explore us more at
            </p>
            <div className="w-full flex justify-end ">
              <h1 className="uppercase font-semibold tracking-wider text-4xl text-wrap w-1/2">
                Social <span className="block pt-5">Media</span>
              </h1>

              {/* Youtube */}
              <Link href={"#"}>
                <div className=" flex items-start gap-2">
                  <Image
                    width={100}
                    height={100}
                    src="/youtube-round.png"
                    alt="youtubeLogo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="text-lg font-semibold mb-3">
                      Techmomentum_Learning
                    </h2>
                    <p className="text-start text-sm w-[75%]">
                      Explore Our YouTube Channel for New Videos,Course Series &
                      Shorts
                    </p>
                    <span className=" w-[65%] text-4xl flex justify-end">
                      ›
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col ">
            {/* Linkedin */}
            <Link href={"#"}>
              <div className="p-4 flex items-start gap-2">
                <Image
                  width={100}
                  height={100}
                  src="/linkedin-round.png"
                  alt="linkedinLogo"
                  className="w-16 h-16"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-lg font-semibold mb-3">
                    Techmomentum_Learning
                  </h2>
                  <p className="text-start text-sm">
                    Explore Our YouTube Channel for New Videos,Course Series &
                    Shorts
                  </p>
                  <span className="  text-4xl flex justify-end">›</span>
                </div>
              </div>
            </Link>

            {/* Instagram */}
            <Link href={"#"}>
              <div className="p-4 gradient_border_top">
                <div className="flex items-start gap-2">
                  <Image
                    width={100}
                    height={100}
                    src="/instagram-round.png"
                    alt="instagramLogo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="text-lg font-semibold mb-3">
                      Techmomentum_Learning
                    </h2>
                    <p className="text-start text-sm">
                      Explore Our YouTube Channel for New Videos,Course Series &
                      Shorts
                    </p>
                    <span className=" text-4xl flex justify-end">›</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* for mobile grid structure*/}
      <div className="hidden md:flex w-full flex-col bg-black p-5">
        <div className="my-5 w-[90%]">
          <h1 className="text-white text-2xl font-bold md:text-xl">
            Explore us more at{" "}
          </h1>
        </div>
        <div className="my-5 w-[90%">
          <h1 className="text-white text-4xl font-bold md:text-3xl">
            Social Media
          </h1>
        </div>

        {/* cards */}
        <div className="w-full p-4 border-b-4 border-purple-950 flex justify-center text-white  ">
          {/* Linkedin */}
          <Link href={"#"}>
            <div className="p-4 ml-16 flex items-center">
              <Image
                width={100}
                height={100}
                src="/linkedin-round.png"
                alt="linkedinLogo"
                className="w-14 h-14"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-lg font-bold mb-3 ">Techmomentum_Learning</h2>
              <p className="w-60  text-xs">
                Explore Our YouTube Channel for New Videos,Course Series &
                Shorts
              </p>
              <span className="ml-28  text-4xl flex justify-centre">›</span>
            </div>
          </Link>
        </div>
        <div className="w-full flex  text-white">
          <div className="w-1/2 border-r-4 border-pink-950 p-4">
            <Link href={"#"}>
              <div className="p-4 ml-8 flex items-center">
                <Image
                  width={100}
                  height={100}
                  src="/youtube-round.png"
                  alt="linkedinLogo"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex flex-col w-full">
                <h2 className="text-lg font-bold mb-3 ">
                  Techmomentum Learning
                </h2>
                <p className="w-36  text-xs">
                  Explore Our YouTube Channel for New Videos,Course Series &
                  Shorts
                </p>
                <span className="ml-16  text-4xl flex justify-centre">›</span>
              </div>
            </Link>
          </div>
          <div className="w-1/2 p-4">
            <Link href={"#"}>
              <div className="p-4 ml-8 flex items-center">
                <Image
                  width={100}
                  height={100}
                  src="/instagram-round.png"
                  alt="linkedinLogo"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex flex-col ">
                <h2 className="text-lg font-bold mb-3 ">
                  Techmomentum Learning
                </h2>
                <p className="w-36 text-xs">
                  Explore Our YouTube Channel for New Videos,Course Series &
                  Shorts
                </p>
                <span className="ml-16  text-4xl flex justify-centre">›</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;