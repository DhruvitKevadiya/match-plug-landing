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

interface YesterdayMatch {
  league?: string;
  homeTeam: Team;
  awayTeam: Team;
  prediction: string;
  result: string;
}

interface PredictionData {
  today: Match[];
  tomorrow: Match[];
  yesterday: YesterdayMatch[];
}

const FootballPredictionTable = ({ title }: { title: string }) => {
  const [activeTab, setActiveTab] = useState<
    "today" | "tomorrow" | "yesterday"
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
    tomorrow: [
      {
        league: "English Premier League",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png",
          name: "Arsenal",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
          name: "Liverpool",
        },
        prediction: "2",
      },
      {
        league: "La Liga",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Atletico-Madrid-Logo.png",
          name: "Atletico Madrid",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Valencia-Logo.png",
          name: "Valencia",
        },
        prediction: "1",
      },
      {
        league: "Bundesliga",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/RB-Leipzig-Logo.png",
          name: "RB Leipzig",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Bayer-Leverkusen-Logo.png",
          name: "Bayer Leverkusen",
        },
        prediction: "1x",
      },
      {
        league: "Serie A",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Inter-Milan-Logo.png",
          name: "Inter Milan",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Napoli-Logo.png",
          name: "Napoli",
        },
        prediction: "2",
      },
      {
        league: "Ligue 1",
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Lyon-Logo.png",
          name: "Lyon",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Monaco-Logo.png",
          name: "Monaco",
        },
        prediction: "1",
      },
    ],
    yesterday: [
      {
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png",
          name: "Chelsea",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
          name: "Manchester United",
        },
        prediction: "2",
        result: "2-1",
      },
      {
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
          name: "Real Madrid",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
          name: "Barcelona",
        },
        prediction: "1",
        result: "3-2",
      },
      {
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png",
          name: "Bayern Munich",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Borussia-Dortmund-Logo.png",
          name: "Borussia Dortmund",
        },
        prediction: "1x",
        result: "1-1",
      },
      {
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png",
          name: "Juventus",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/AC-Milan-Logo.png",
          name: "AC Milan",
        },
        prediction: "2",
        result: "0-2",
      },
      {
        homeTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png",
          name: "Paris Saint-Germain",
        },
        awayTeam: {
          logo: "https://logos-world.net/wp-content/uploads/2020/06/Olympique-de-Marseille-Logo.png",
          name: "Olympique Marseille",
        },
        prediction: "1",
        result: "4-0",
      },
    ],
  };

  const getCurrentData = () => predictionData[activeTab];
  const displayData = getCurrentData().slice(currentIndex, currentIndex + 6);

  const handleTabChange = (tab: "today" | "tomorrow" | "yesterday") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const TeamCell: React.FC<{ team: Team }> = ({ team }) => (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 py-3">
      <div className="w-6 h-6 sm:w-8 sm:h-8 relative flex-shrink-0">
        <img
          src={team.logo}
          alt={`${team.name} logo`}
          width={32}
          height={32}
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEyIDggOSAxMSA5IDE1QzkgMTkgMTIgMjIgMTYgMjJDMjAgMjIgMjMgMTkgMjMgMTVDMjMgMTEgMjAgOCAxNiA4WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
          }}
        />
      </div>
      <span className="text-gray-800 font-medium text-xs sm:text-sm text-center sm:text-left">
        {team.name}
      </span>
    </div>
  );

  const renderTableHeaders = () => {
    if (activeTab === "yesterday") {
      return (
        <tr>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Home Team
          </th>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Away Team
          </th>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Prediction
          </th>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-1.5 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Result
          </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            League
          </th>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Home Team
          </th>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Away Team
          </th>
          <th className="text-left py-3 border border-white/50 sm:py-4 px-1.5 sm:px-6 text-white text-xs sm:text-sm font-bold  bg-[#455DBF] h-full  w-full">
            Prediction
          </th>
        </tr>
      );
    }
  };

  const renderTableRows = () => {
    return displayData.map((match, index) => {
      const isLastRow = index === displayData.length - 1;
      const firstTdClass = isLastRow ? "rounded-bl-full" : "";
      const lastTdClass = isLastRow ? "rounded-br-full" : "";

      return (
        <tr
          key={index}
          className={`border-b border-x border-gray-500 hover:bg-gray-50 transition-colors duration-150`}
        >
          {activeTab === "yesterday" ? (
            <>
              <td
                className={`px-3 sm:px-6 bg-[#F4F6FB] text-xs sm:text-sm ${firstTdClass}`}
              >
                <TeamCell team={match.homeTeam} />
              </td>
              <td className="px-3 sm:px-6 bg-[#EDF0F9] text-xs sm:text-sm">
                <TeamCell team={match.awayTeam} />
              </td>
              <td className="text-center py-3 px-3 sm:px-6 bg-[#F4F6FB]">
                <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {match.prediction}
                </span>
              </td>
              <td
                className={`text-center py-3  sm:px-6 bg-[#EDF0F9] ${lastTdClass}`}
              >
                <span className="inline-block bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {(match as YesterdayMatch).result}
                </span>
              </td>
            </>
          ) : (
            <>
              <td
                className={`py-3 px-3 sm:px-6 text-xs sm:text-sm text-black font-medium bg-[#EDF0F9] ${firstTdClass}`}
              >
                {(match as Match).league}
              </td>
              <td className="px-3 sm:px-6 bg-[#F4F6FB] text-xs sm:text-sm">
                <TeamCell team={match.homeTeam} />
              </td>
              <td className="px-3 sm:px-6 bg-[#EDF0F9] text-xs sm:text-sm">
                <TeamCell team={match.awayTeam} />
              </td>
              <td
                className={`text-center py-3  sm:px-6 bg-[#F4F6FB] ${lastTdClass}`}
              >
                <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {match.prediction}
                </span>
              </td>
            </>
          )}
        </tr>
      );
    });
  };

  return (
    <section className="bg-[#F4F6FB] py-12 sm:py-24">
      <div className="max-w-6xl mx-auto sm:px-4 px-2">
        {/* Header with Navigation Arrows */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 gap-5 sm:gap-20">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
              {title}
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg max-w-xl">
              Sure Tips and Football Super Tips From The Experts
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="flex gap-2 sm:gap-3 items-center justify-center flex-wrap">
            <button
              onClick={() => handleTabChange("yesterday")}
              className={`px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "yesterday"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white hover:text-gray-800"
              }`}
            >
              Yesterday
            </button>{" "}
            <button
              onClick={() => handleTabChange("tomorrow")}
              className={`px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "tomorrow"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white hover:text-gray-800"
              }`}
            >
              Tomorrow
            </button>
            <button
              onClick={() => handleTabChange("today")}
              className={`px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border border-black/10 ${
                activeTab === "today"
                  ? "bg-[#455DBD] text-white"
                  : "text-gray-600 bg-white hover:text-gray-800"
              }`}
            >
              Today
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <div className="w-full">
            <table className="w-full overflow-hidden">
              <thead>{renderTableHeaders()}</thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootballPredictionTable;
