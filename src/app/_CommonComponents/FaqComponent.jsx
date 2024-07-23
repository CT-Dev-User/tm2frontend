import Image from "next/image";
import DropDown from "../find-jobs/components/DropDownComponents";

const FaqComponentPage = () => {
  let faqQuestions = [
    {
      question: "Why Join TechMomentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question: "What is the eligibility criteria to join TechMomentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question:
        "Do i need to have particular software or laptop to attend offline class?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question:
        "Do i need to have particular software or laptop to attend offline class?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question: "How is TechMonentum is different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question:
        "How long will students have access to the course materials once they have finish the courses?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
  ];
  return (
    <section
      id="faq"
      className={`w-[100vw] md:w-full flex flex-row items-start justify-center  box-border max-w-full text-left text-xl text-gray-400 font-sub-heading p-[5rem] md:py-8 md:px-0`}
    >
      <div className="w-[90%] md:w-[85%] flex md:flex-col  flex-row items-start justify-center  max-w-full">
        <div className="flex flex-col md:w-full justify-center items-start">
          <h1 className="text-[#0466C1] text-start font-bold text-3xl  tracking-wider mb-10">
            FAQ&apos;s
          </h1>
          <div className="md:hidden">
            <Image
              width={390}
              height={390}
              className="w-[70%] relative max-h-[70%] object-contain min-h-[40%] max-w-full "
              loading="lazy"
              alt=""
              src="/rectangle-34765@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-col md:w-full items-start justify-start gap-[20px]">
          {faqQuestions.map((q, index) => {
            return (
              <DropDown key={index} id={index} questions={q.question} answer={q.answer} className='md:w-[100%]'/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqComponentPage;
