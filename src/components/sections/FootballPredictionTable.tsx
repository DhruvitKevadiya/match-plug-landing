"use client";
import React, { useState } from "react";

interface Team {
  logo: string;
  name: string;
}

interface Match {
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  prediction: string;
}

interface PredictionData {
  today: Match[];
  yesterday: Match[];
  lastWeek: Match[];
}

const FootballPredictionTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "today" | "yesterday" | "lastWeek"
  >("today");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy data - replace with API later
  const predictionData: PredictionData = {
    today: [
      {
        league: "CONMEBOL Sudamericana",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Atletico-Mineiro-Logo.png",
          name: "Atletico-MG",
        },
        awayTeam: {
          logo: "https://logoeps.com/wp-content/uploads/2014/03/godoy-cruz-vector-logo.png",
          name: "Godoy Cruz",
        },
        prediction: "1x",
      },
      {
        league: "UEFA Europa Conference League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2021/04/Santa-Clara-Logo.png",
          name: "Santa Clara",
        },
        awayTeam: {
          logo: "https://logoeps.com/wp-content/uploads/2013/03/larne-vector-logo.png",
          name: "Larne",
        },
        prediction: "1",
      },
      {
        league: "UEFA Europa Conference League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Austria-Vienna-Logo.png",
          name: "Austria Vienna",
        },
        awayTeam: {
          logo: "https://logoeps.com/wp-content/uploads/2013/03/banik-ostrava-vector-logo.png",
          name: "Baník Ostrava",
        },
        prediction: "1x",
      },
      {
        league: "UEFA Europa Conference League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Besiktas-Logo.png",
          name: "Besiktas",
        },
        awayTeam: {
          logo: "https://logoeps.com/wp-content/uploads/2013/03/st-patricks-athletic-vector-logo.png",
          name: "St Patrick's Athl.",
        },
        prediction: "1x",
      },
      {
        league: "UEFA Europa League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Utrecht-Logo.png",
          name: "Utrecht",
        },
        awayTeam: {
          logo: "https://logoeps.com/wp-content/uploads/2013/03/servette-vector-logo.png",
          name: "Servette FC",
        },
        prediction: "1x",
      },
      {
        league: "UEFA Europa Conference League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Besiktas-Logo.png",
          name: "Besiktas",
        },
        awayTeam: {
          logo: "https://logoeps.com/wp-content/uploads/2013/03/st-patricks-athletic-vector-logo.png",
          name: "St Patrick's Athl.",
        },
        prediction: "1x",
      },
    ],
    yesterday: [
      {
        league: "English Premier League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png",
          name: "Chelsea",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
          name: "Manchester United",
        },
        prediction: "2",
      },
      {
        league: "La Liga",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
          name: "Real Madrid",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
          name: "Barcelona",
        },
        prediction: "1",
      },
      {
        league: "Bundesliga",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png",
          name: "Bayern Munich",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Borussia-Dortmund-Logo.png",
          name: "Borussia Dortmund",
        },
        prediction: "1x",
      },
      {
        league: "Serie A",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png",
          name: "Juventus",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/AC-Milan-Logo.png",
          name: "AC Milan",
        },
        prediction: "2",
      },
      {
        league: "Ligue 1",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png",
          name: "Paris Saint-Germain",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Olympique-de-Marseille-Logo.png",
          name: "Olympique Marseille",
        },
        prediction: "1",
      },
    ],
    lastWeek: [
      {
        league: "English Championship",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Leeds-United-Logo.png",
          name: "Leeds United",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Burnley-Logo.png",
          name: "Burnley",
        },
        prediction: "1",
      },
      {
        league: "MLS",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/LA-Galaxy-Logo.png",
          name: "LA Galaxy",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Seattle-Sounders-Logo.png",
          name: "Seattle Sounders",
        },
        prediction: "2",
      },
      {
        league: "Eredivisie",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Ajax-Logo.png",
          name: "Ajax",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/PSV-Eindhoven-Logo.png",
          name: "PSV Eindhoven",
        },
        prediction: "1x",
      },
      {
        league: "Super Lig",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Besiktas-Logo.png",
          name: "Besiktas",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Fenerbahce-Logo.png",
          name: "Fenerbahçe",
        },
        prediction: "1",
      },
      {
        league: "Primeira Liga",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/FC-Porto-Logo.png",
          name: "Porto",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Benfica-Logo.png",
          name: "Benfica",
        },
        prediction: "1x",
      },
    ],
  };

  const getCurrentData = () => predictionData[activeTab];
  const displayData = getCurrentData().slice(currentIndex, currentIndex + 6);

  const handlePrevious = () => {
    const totalData = getCurrentData().length;
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, totalData - 6) : Math.max(0, prev - 1)
    );
  };

  const handleNext = () => {
    const totalData = getCurrentData().length;
    setCurrentIndex((prev) => (prev + 6 >= totalData ? 0 : prev + 1));
  };

  const handleTabChange = (tab: "today" | "yesterday" | "lastWeek") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const TeamCell: React.FC<{ team: Team }> = ({ team }) => (
    <div className="flex items-center gap-3 py-3">
      <div className="w-8 h-8 relative flex-shrink-0">
        <img
          src={team.logo}
          alt={`${team.name} logo`}
          width={32}
          height={32}
          className="w-8 h-8 object-contain rounded"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEyIDggOSAxMSA5IDE1QzkgMTkgMTIgMjIgMTYgMjJDMjAgMjIgMjMgMTkgMjMgMTVDMjMgMTEgMjAgOCAxNiA4WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
          }}
        />
      </div>
      <span className="text-gray-800 font-medium text-sm">{team.name}</span>
    </div>
  );

  return (
    <section className="bg-[#F4F6FB] py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Navigation Arrows */}
        <div className="flex items-center justify-center mb-6  sm:gap-10 gap-5">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors duration-200 "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              FOOTBALL PREDICTION FOR TODAY
            </h2>
            <p className="text-gray-600  md:text-lg max-w-2xl">
              Sure Tips and Football Super Tips From The Experts
            </p>
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors duration-200 "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-3 items-center justify-center flex-wrap">
            <button
              onClick={() => handleTabChange("today")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "today"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              Today
            </button>
            <button
              onClick={() => handleTabChange("yesterday")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "yesterday"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              Yesterday
            </button>
            <button
              onClick={() => handleTabChange("lastWeek")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "lastWeek"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white bla hover:text-gray-800"
              }`}
            >
              Last Week
            </button>
          </div>
        </div>

        {/* Table */}
        <div className=" overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full rounded-3xl overflow-hidden">
              <thead>
                <tr className="border-b border-black ">
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm  rounded-t-3xl bg-white ">
                    League
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm rounded-t-3xl bg-white">
                    Home Team
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm rounded-t-3xl bg-white">
                    Away Team
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-800 text-sm rounded-t-3xl bg-white">
                    Prediction
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((match, index) => (
                  <tr
                    key={index}
                    className={`border-b border-x border-gray-300 hover:bg-gray-50 transition-colors duration-150  ${
                      index === displayData.length - 1
                        ? "rounded-full bg-red-500"
                        : ""
                    }`}
                  >
                    <td className="py-3 px-6 text-sm text-gray-700 bg-[#EDF0F9]">
                      {match.league}
                    </td>
                    <td className="px-6 bg-[#F4F6FB]">
                      <TeamCell team={match.homeTeam} />
                    </td>
                    <td className="px-6 bg-[#EDF0F9]">
                      <TeamCell team={match.awayTeam} />
                    </td>
                    <td className="text-center py-3 px-6 bg-[#F4F6FB]">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {match.prediction}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootballPredictionTable;
