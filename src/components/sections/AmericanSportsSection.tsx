import React from "react";

const AmericanSportsSection: React.FC = () => {
  const sportsCategories = ["NBA PICKS", "NFL PICKS", "NHL PICKS", "MLB PICKS"];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/sport.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center space-y-5">
          {/* Main Heading */}
          <h2 className="text-2xl font-bold text-white">
            Unlock sure picks and Parlays wins with expert predictions -{" "}
            <span className="text-green-500">Lets Go!!</span>
          </h2>

          {/* Sports Categories */}
          <div className="text- text-white">{sportsCategories.join(" | ")}</div>

          {/* Accuracy Badge */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-6 py-2">
              <span className=" text-black">80% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmericanSportsSection;
