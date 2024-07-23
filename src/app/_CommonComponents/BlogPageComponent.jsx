import BlogCardComponent from "./BlogCardComponent"

const BlogPageComponent = ({ isAlternate }) => {
  isAlternate = true;
  let blogData = [
    {
      blogName: "Blog Heading",
      content:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project We follow the first and foremost priority of gathering requirements, resources, and information to begin our project",
      img: "/rectangle-34235@2x.png",
    },
    {
      blogName: "Blog Heading",
      content:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project We follow the first and foremost priority of gathering requirements, resources, and information to begin our project",
      img: "/rectangle-34235@2x.png",
    },
    {
      blogName: "Blog Heading",
      content:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project We follow the first and foremost priority of gathering requirements, resources, and information to begin our project",
      img: "/rectangle-34235@2x.png",
    },
    {
      blogName: "Blog Heading",
      content:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project We follow the first and foremost priority of gathering requirements, resources, and information to begin our project",
      img: "/rectangle-34235@2x.png",
    },
  ];

  return (
    <section
      id="blogs"
      className={`w-[100%] flex items-center justify-center box-border max-w-full text-left text-cornflowerblue font-sub-heading bg-black`}
    >
      <div className="w-[90%]  overflow-hidden flex flex-col items-start justify-center pt-20 pb-[88px] box-border gap-[40px] max-w-full  ">
        <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
          <h1 className="m-0 relative tracking-[0.03em] uppercase font-bold font-inherit text-[#78B6FF] text-3xl">
            Blogs
          </h1>
          <p className="m-0 relative text-[19px] md:text-md text-white">
            Faculty that brings out the best in you
          </p>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-5xl text-white">
          <div className="gap-2 max-w-full flex flex-wrap justify-start">
            {blogData.map((dt, index) => {
              return (
                <div className="w-[49%]" key={index}>
                  {index > 1 ? (
                    <BlogCardComponent
                      blogName={"Blog Heading"}
                      content={
                        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project We follow the first and foremost priority of gathering requirements, resources, and information to begin our project"
                      }
                      img={"/rectangle-34235@2x.png"}
                      alternateCard={isAlternate}
                    />
                  ) : (
                    <BlogCardComponent
                      blogName={"Blog Heading"}
                      content={
                        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project We follow the first and foremost priority of gathering requirements, resources, and information to begin our project"
                      }
                      img={"/rectangle-34235@2x.png"}
                      alternateCard={false}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="self-stretch h-[50px] flex flex-row items-start justify-center py-0 px-5 box-border mt-6">
            <button className="pt-2 px-5 bg-[transparent] h-[52px] rounded-lg box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0 hover:my-[9px]e">
              <div className="relative text-xl font-medium font-sub-heading text-white text-left ">
                <span className="">Read More Blogs</span>
                <span className="ml-2 font-semibold text-2xl ">›</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BlogPageComponent;