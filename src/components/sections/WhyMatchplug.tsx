"use client";
import React from "react";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  borderColor: string;
}

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center mb-6">
    {children}
  </div>
);

const FileIcon = () => (
  <FeatureIcon>
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
    </svg>
  </FeatureIcon>
);

const GlobeIcon = () => (
  <FeatureIcon>
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      className="w-full h-full"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  </FeatureIcon>
);

const HeadsetIcon = () => (
  <FeatureIcon>
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 17,1 12,1Z" />
    </svg>
  </FeatureIcon>
);

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div
    className="border rounded-[51px] p-8 h-[193px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow"
    style={{ borderColor: feature.borderColor }}
  >
    {feature.icon}
    <h3 className="text-2xl text-black">{feature.title}</h3>
  </div>
);

const WhyMatchplug: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <FileIcon />,
      title: "AI-Powered Predictions",
      borderColor: "#455DBD",
    },
    {
      id: 2,
      icon: <GlobeIcon />,
      title: "Global Coverage",
      borderColor: "#C7CC95",
    },
    {
      id: 3,
      icon: <HeadsetIcon />,
      title: "24/7 Support",
      borderColor: "#8D7BB0",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Why Matchplug?</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMatchplug;
