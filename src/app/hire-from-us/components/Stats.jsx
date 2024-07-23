const Stats = () => {
  return (
    <div className="w-[100w] flex items-center justify-center py-[50px] md:py-[30px]">
      <div className="w-[75%] bg-[#0047B2] p-5 text-white rounded-lg flex justify-around md:w-[90%] md:flex-col md:items-center md:gap-[60px] md:py-10">
        <div>
          <h1 className="text-3xl text-center font-semibold mb-3">100k+</h1>
          <p className="text-lg">Learners</p>
        </div>
        <div>
          <h1 className="text-3xl text-center font-semibold mb-3">400+</h1>
          <p className="text-lg">Hiring Partners</p>
        </div>
        <div>
          <h1 className="text-3xl text-center font-semibold mb-3">200+</h1>
          <p className="text-lg">Core Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;