import React from "react";
import StudentReviewComponent from "@/app/_CommonComponents/StudentReviewComponent";

const Testimonials = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl font-semibold text-[#0466C1] uppercase">
          What Students are saying about us
        </h1>
      </div>
      <StudentReviewComponent />
    </div>
  );
};

export default Testimonials;
