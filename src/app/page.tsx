import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AmericanSportsSection from "@/components/sections/AmericanSportsSection";
import BetBuilderSection from "@/components/sections/BetBuilderSection";
import BetNowSection from "@/components/sections/BetNowSection";
import DirectWinPredictions from "@/components/sections/DirectWinPredictions";
import EmailSubscriptionSection from "@/components/sections/EmailSubscriptionSection";
import FAQSection from "@/components/sections/FAQSection";
import FootballPredictionTable from "@/components/sections/FootballPredictionTable";
import Hero from "@/components/sections/Hero";
import JoinWinningBettorsSection from "@/components/sections/JoinWinningBettorsSection";
import LatestNewsSection from "@/components/sections/LatestNewsSection";
import MeetOurExperts from "@/components/sections/MeetOurExperts";
import PricingPlans from "@/components/sections/PricingPlans";
import SureWinPredictionSection from "@/components/sections/SureWinPredictionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VipRecordsSection from "@/components/sections/VipRecordsSection";
import WhyMatchplug from "@/components/sections/WhyMatchplug";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <FootballPredictionTable />
      <AmericanSportsSection />
      <FootballPredictionTable />
      <DirectWinPredictions />
      <BetBuilderSection />
      <MeetOurExperts />
      <BetNowSection />
      <SureWinPredictionSection />
      <VipRecordsSection />
      <PricingPlans />
      <TestimonialsSection />
      <WhyMatchplug />
      <LatestNewsSection />
      <FAQSection />
      <EmailSubscriptionSection />
      <JoinWinningBettorsSection />
      <Footer />
    </div>
  );
}
