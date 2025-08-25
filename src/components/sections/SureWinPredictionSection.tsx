"use client";
import React, { useState } from "react";

interface Match {
  id: number;
  tournament: string;
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  date: string;
  time: string;
  venue: string;
  weather: string;
  odds: {
    home: string;
    draw: string;
    away: string;
  };
}

interface Prediction {
  tip: string;
  bookmaker: string;
  // odds: string;
  confidence: string;
  additional?: string;
}

const OddsButton: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => (
  <div className="text-center">
    <div className=" font-semibold text-black">{label}</div>
    <div className=" text-black">{value}</div>
  </div>
);

const PredictionRow: React.FC<{
  label: string;
  isHeader?: boolean;
}> = ({ label, isHeader = false }) => (
  <div
    className={`py-2 text-center text-lg ${
      isHeader ? "bg-[#455DBD] text-white rounded-t-lg" : "text-black"
    }`}
  >
    {label}
  </div>
);

const SureWinPredictionSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("2025-08-16");

  // Dummy data - will be replaced with API calls
  const todaysMatch: Match = {
    id: 1,
    tournament: "AFCON",
    homeTeam: {
      name: "Arsenal",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
    },
    awayTeam: {
      name: "Leeds",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
    },
    date: "2022/01/26",
    time: "17:00",
    venue: "Stade omnisport de Douala",
    weather: "Partly Sunny",
    odds: {
      home: "2.35",
      draw: "2.95",
      away: "3.60",
    },
  };

  const Prediction: Prediction = {
    tip: "1x",
    bookmaker: "Betking 1.28",
    confidence: "70% Expert Confidence",
    additional: "?",
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #455DBD, #455DBD), url(/bg5.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "screen",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}

        <div className="text-center flex flex-col items-center justify-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-1 max-w-xl">
            Sure Win Prediction Today
          </h2>
          <p className="text-white/80 md:text-lg max-w-xl">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla.
          </p>
        </div>

        {/* Tip of The Day Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white capitalize mb-4">
              Tip of The Day
            </h3>
            <div className="w-96 h-px bg-white/70 mx-auto"></div>
          </div>

          {/* Prediction Card */}
          <div
            className="bg-white/70 backdrop-blur-sm rounded-[51px] px-8 py-10 shadow-lg flex flex-col gap-8 md:gap-0"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="flex w-full items-center justify-evenly flex-col md:flex-row md:gap-0 gap-6 ">
              {" "}
              <img
                src={todaysMatch.homeTeam.logo}
                alt={todaysMatch.homeTeam.name}
                width={120}
                height={120}
                className="object-cover w-32 h-32"
              />
              <div className="flex flex-col">
                {" "}
                <div className="flex flex-col">
                  {/* Match Header */}
                  <div className="text-center mb-4">
                    <h4 className="text-2xl font-bold text-black ">
                      {todaysMatch.tournament}
                    </h4>
                    <h5 className="text-lg font-bold text-black mb-2">
                      {todaysMatch.homeTeam.name}
                      <span className="font-normal"> vs </span>{" "}
                      {todaysMatch.awayTeam.name}
                    </h5>
                    <div className="w-72 h-px bg-black mb-2 mx-auto"></div>

                    <div className="text-sm text-black space-y-1">
                      <p>
                        {todaysMatch.date} {todaysMatch.time}
                      </p>
                      <p className="font-bold">{todaysMatch.venue}</p>
                      <p className="font-bold">{todaysMatch.weather}</p>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-px bg-black mb-4 mx-auto"></div>
                {/* Team Logos and Odds */}
                <div className="flex items-start justify-between mb-4">
                  {/* Home Team Logo */}
                  {/* <div className="w-32">
                  <img
                    src={todaysMatch.homeTeam.logo}
                    alt={todaysMatch.homeTeam.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div> */}

                  {/* Odds */}
                  <div className="flex-1 mx-8 ">
                    <div className="  ">
                      <div className="flex gap-10 mx-auto w-fit">
                        <OddsButton label="1" value={todaysMatch.odds.home} />
                        <OddsButton label="X" value={todaysMatch.odds.draw} />
                        <OddsButton label="2" value={todaysMatch.odds.away} />
                      </div>
                    </div>
                  </div>

                  {/* Away Team Logo */}
                  {/* <div className="w-32">
                  <img
                    src={todaysMatch.awayTeam.logo}
                    alt={todaysMatch.awayTeam.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div> */}
                </div>{" "}
              </div>{" "}
              <img
                src={todaysMatch.homeTeam.logo}
                alt={todaysMatch.homeTeam.name}
                width={120}
                height={120}
                className="object-cover w-32 h-32"
              />
            </div>
            {/* Prediction Details */}
            <div className="bg-white/50 rounded-3xl max-w-xl mx-auto overflow-hidden w-full">
              <PredictionRow label="Tip" isHeader />
              <div className="border-b border-black">
                <PredictionRow label={Prediction.tip} />
              </div>
              <div className="border-b border-black">
                <PredictionRow label={Prediction.bookmaker} />
              </div>
              <div className="border-b border-black">
                <PredictionRow label={Prediction.confidence} />
              </div>
              <PredictionRow label={Prediction.additional || ""} />
            </div>
          </div>
        </div>

        {/* Records Section */}
        <div className="text-center mt-8 w-full ">
          <div className="inline-flex items-center gap-4  rounded-full px-6 py-3">
            <span className="text-lg text-white">Records</span>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white border rounded-full border-gray-300 px-6 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SureWinPredictionSection;
