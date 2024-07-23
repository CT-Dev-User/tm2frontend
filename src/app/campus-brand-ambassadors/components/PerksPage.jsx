import PerkCard from "./PerksCard";

const PerksPage = () => {
  const benefits = [
    {
      title: "LinkedIn recommendation from the CEO of Unstop**",
      points: [
        "1-year membership to Prime Student",
        "1-year membership to Prime Student",
      ],
      color1: "#1B76FF",
      color2: "#1B76FF",
      colorWhite: "#fff",
      iconSrc: "/Linkedin-square.png",
    },
    {
      title: "One-on-One Mentorship",
      points: [
        "1-year membership to Prime Student",
        "1-year membership to Prime Student",
      ],
      color1: "#F84E4E",
      color2: "#BE2121",
      iconSrc: "/illustration.png",
    },
    {
      title: "Exclusive Merchandise**",
      points: ["1-year membership to Prime Student"],
      color1: "#4195B0",
      color2: "#2421BE",
      iconSrc: "/t-shirt.png",
    },
    {
      title: "Certification Course*",
      points: ["1-year membership to Prime Student"],
      color1: "#5907C1",
      color2: "#C489FF",
      iconSrc: "/certification.png",
    },
  ];
  return (
    <div id="perks&Incentives" className="w-[100vw] md:my-5 py-4">
      <div className="w-[80%] md:w-[90%] mx-auto py-6">
        <h1 className="text-[#0466C1] uppercase font-semibold text-3xl mb-8">
          Perks & Incentives
        </h1>
        <div className="grid grid-cols-2 gap-3 md:flex md:flex-col">
          {benefits.map((benefit, index) => (
            <PerkCard
              id={index}
              key={index}
              title={benefit.title}
              points={benefit.points}
              color1={benefit.color1}
              color2={benefit.color2}
              colorWhite={benefit.colorWhite}
              image={benefit.iconSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerksPage;