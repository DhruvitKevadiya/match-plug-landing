import React from "react";
import Image from "next/image";

interface Expert {
  id: number;
  name: string;
  specialty: string;
  description: string;
  backgroundImage: string;
  achievements: string;
}

const StarRating: React.FC = () => (
  <div className="flex justify-center gap-0.5 mb-1">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="w-4 h-4">
        <svg fill="white" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ))}
  </div>
);

const ExpertCard: React.FC<{
  expert: Expert;
  className?: string;
  isOdd?: boolean;
}> = ({ expert, className = "", isOdd = false }) => (
  <div
    className={`relative flex flex-col max-w-48 justify-center items-center  gap-4 ${className} ${
      isOdd ? "pt-10" : "pb-10"
    }`}
  >
    {/* Black divider line at top */}
    <div className={`flex justify-center ${!isOdd && "hidden"} `}>
      <div className="w-30 h-[5px] bg-black"></div>
    </div>
    {/* Card */}
    <div className="relative ">
      {/* Background image */}
      <div
        className="w-36 h-36 rounded-3xl border overflow-hidden bg-cover bg-center relative"
        style={{ backgroundImage: `url(${expert.backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70  px-2 py-3">
          <StarRating />
          <p className="text-white text-xs text-center">
            {expert.achievements}
          </p>
        </div>
      </div>
    </div>{" "}
    <div className={`flex justify-center ${isOdd && "hidden"} `}>
      <div className="w-30 h-[5px] bg-black"></div>
    </div>
    {/* Content below image */}
    <div className=" text-center text-sm">
      <h3 className=" font-semibold text-black ">{expert.name}</h3>
      <p className=" text-black">{expert.description}</p>
    </div>
  </div>
);

const MeetOurExperts: React.FC = () => {
  const experts: Expert[] = [
    {
      id: 1,
      name: "NFL Specialist with 10+ Years Experience",
      specialty: "NFL",
      description: "NFL Specialist with 10+ Years Experience",
      backgroundImage: "/expert-nfl.jpg",
      achievements: "Predicted 500+ Wins Last Season",
    },
    {
      id: 2,
      name: "Soccer Predictor with 90% Win Rate",
      specialty: "Soccer",
      description: "NFL Specialist with 10+ Years Experience",
      backgroundImage: "/expert-soccer.jpg",
      achievements: "Predicted 500+ Wins Last Season",
    },
    {
      id: 3,
      name: "NBA/NCAA Specialist with 10+Years Experience",
      specialty: "Basketball",
      description: "NFL Specialist with 10+ Years Experience",
      backgroundImage: "/expert-basketball.jpg",
      achievements: "Predicted 500+ Wins Last Season",
    },
    {
      id: 4,
      name: "NHL Specialist with 10+ Years Experience",
      specialty: "Hockey",
      description: "NFL Specialist with 10+ Years Experience",
      backgroundImage: "/expert-hockey.jpg",
      achievements: "Predicted 500+ Wins Last Season",
    },
    {
      id: 5,
      name: "MLB Specialist with 10+ Years Experience",
      specialty: "Baseball",
      description: "NFL Specialist with 10+ Years Experience",
      backgroundImage: "/expert-baseball.jpg",
      achievements: "Predicted 500+ Wins Last Season",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F6FB]">
      <div className="container w-full flex flex-col items-center justify-center px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">
            Meet Our Experts Analysts
          </h2>
        </div>

        {/* Experts Grid */}
        <div className="relative  mx-auto">
          {/* Desktop Layout - Custom positioning to match design */}
          {/* <div className="hidden lg:block relative h-[426px]"> */}
          {/* Top row - 3 experts */}
          {/* <div className="absolute top-0 left-0">
              <ExpertCard expert={experts[0]} />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <ExpertCard expert={experts[2]} />
            </div>
            <div className="absolute top-0 right-0">
              <ExpertCard expert={experts[4]} />
            </div> */}

          {/* Bottom row - 2 experts (offset) */}
          {/* <div className="absolute top-16 left-[306px]">
              <ExpertCard expert={experts[1]} />
            </div>
            <div className="absolute top-16 right-[306px]">
              <ExpertCard expert={experts[3]} />
            </div> */}
          {/* </div> */}

          {/* Mobile/Tablet Layout - Simple grid */}
          <div className=" flex flex-wrap gap-8 justify-center items-center">
            {experts.map((expert, index) => (
              <ExpertCard
                key={expert.id}
                expert={expert}
                isOdd={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        {/* Subscription Button */}
        <div className="flex justify-center mt-16">
          <button className="border border-gray-300 rounded-full px-8 py-4 sm:text-lg text-black hover:bg-gray-50 transition-colors">
            Subscribe to Get Personalized Tips from Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurExperts;
