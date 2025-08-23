"use client";
import React, { useState } from "react";
import Logo from "../layout/Logo";

interface PredictionCard {
  id: string;
  title: string;
  subtitle: string;
  accuracy: string;
  backgroundImage: string;
}

interface PredictionData {
  footballBettingTips: PredictionCard[];
  riskyTipsMarkets: PredictionCard[];
  specialTipsMarkets: PredictionCard[];
  americaSportsPicks: PredictionCard[];
}

const DirectWinPredictions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    | "footballBettingTips"
    | "riskyTipsMarkets"
    | "specialTipsMarkets"
    | "americaSportsPicks"
  >("footballBettingTips");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy data - replace with API later
  const predictionData: PredictionData = {
    footballBettingTips: [
      {
        id: "1",
        title: "Over 2.5 Goals",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "78% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "2",
        title: "BTTS / GG",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "78% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "3",
        title: "Mix Chance",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "78% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "4",
        title: "Goal First Half",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "78% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "5",
        title: "Straight Win",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "78% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    riskyTipsMarkets: [
      {
        id: "6",
        title: "High Risk Combo",
        subtitle: "4-5 Wins from the last 7 games",
        accuracy: "65% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "7",
        title: "Correct Score",
        subtitle: "3-4 Wins from the last 7 games",
        accuracy: "55% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "8",
        title: "Half Time Score",
        subtitle: "4-5 Wins from the last 7 games",
        accuracy: "62% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "9",
        title: "Double Chance",
        subtitle: "4-5 Wins from the last 7 games",
        accuracy: "68% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    specialTipsMarkets: [
      {
        id: "10",
        title: "VIP Special",
        subtitle: "6-7 Wins from the last 7 games",
        accuracy: "85% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "11",
        title: "Premium Pick",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "80% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "12",
        title: "Expert Choice",
        subtitle: "6-6 Wins from the last 7 games",
        accuracy: "88% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "13",
        title: "Guaranteed Win",
        subtitle: "7-7 Wins from the last 7 games",
        accuracy: "92% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    americaSportsPicks: [
      {
        id: "14",
        title: "NFL Picks",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "75% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "15",
        title: "NBA Picks",
        subtitle: "4-5 Wins from the last 7 games",
        accuracy: "72% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "16",
        title: "MLB Picks",
        subtitle: "5-6 Wins from the last 7 games",
        accuracy: "76% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "17",
        title: "NHL Picks",
        subtitle: "4-5 Wins from the last 7 games",
        accuracy: "70% Accurate",
        backgroundImage:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  };

  const getCurrentData = () => predictionData[activeTab];
  const displayData = getCurrentData();

  const handlePrevious = () => {
    const totalData = getCurrentData().length;
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, totalData - 4) : Math.max(0, prev - 1)
    );
  };

  const handleNext = () => {
    const totalData = getCurrentData().length;
    setCurrentIndex((prev) => (prev + 4 >= totalData ? 0 : prev + 1));
  };

  const handleTabChange = (
    tab:
      | "footballBettingTips"
      | "riskyTipsMarkets"
      | "specialTipsMarkets"
      | "americaSportsPicks"
  ) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const PredictionCard: React.FC<{ card: PredictionCard }> = ({ card }) => (
    <div className="relative w-64 h-fit rounded-4xl overflow-hidden flex-shrink-0 group cursor-pointer transform transition-all duration-300">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${card.backgroundImage})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 px-6 py-10 h-full flex flex-col items-center justify-between text-white">
        {/* Top section with logo */}

        {/* Bottom section with content */}
        <div className="space-y-4  flex items-center justify-center flex-col text-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Logo className="w-13" />
            <h3 className="text-lg underline text-gray-200 ">{card.title}</h3>
            <p className="text-gray-200 text-sm max-w-40 text-center">
              {card.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-white font-semibold text-lg">{card.accuracy}</p>
            <button className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-full text-sm transition-all duration-200 transform hover:scale-105">
              Bet Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className=" py-16 relative">
      <div className="absolute inset-0 z-0">
        <img src="/bg1.png" alt="" className="h-full w-full bg-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        {/* Header with Navigation Arrows */}
        <div className="flex items-center justify-center mb-6  sm:gap-10 gap-5 z-10 relative">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Direct Win Predictions For Today
            </h2>
            <p className="text-gray-600  md:text-lg max-w-2xl">
              Matchplug is the worlds most wanted hot prediction site with over{" "}
              <br className="hidden md:block" />
              30 free betting tips markets.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-3 flex-wrap items-center justify-center">
            <button
              onClick={() => handleTabChange("footballBettingTips")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "footballBettingTips"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              Football Betting Tips
            </button>
            <button
              onClick={() => handleTabChange("riskyTipsMarkets")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "riskyTipsMarkets"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              Risky Tips Markets
            </button>
            <button
              onClick={() => handleTabChange("specialTipsMarkets")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "specialTipsMarkets"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              Special Tips Markets
            </button>
            <button
              onClick={() => handleTabChange("americaSportsPicks")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "americaSportsPicks"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              America Sports Picks
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {displayData.map((card) => (
              <PredictionCard key={card.id} card={card} />
            ))}
          </div>

          {/* Fade out effect on right */}
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default DirectWinPredictions;
