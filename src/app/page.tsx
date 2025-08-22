import Header from "@/components/layout/Header";
import DirectWinPredictions from "@/components/sections/DirectWinPredictions";
import FootballPredictionTable from "@/components/sections/FootballPredictionTable";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <FootballPredictionTable />
      <DirectWinPredictions />
    </div>
  );
}
