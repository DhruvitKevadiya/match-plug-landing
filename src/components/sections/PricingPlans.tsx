"use client";
import React, { useState } from "react";

interface PricingFeature {
  icon: React.ReactNode;
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  accuracy: string;
  features: PricingFeature[];
  backgroundColor: string;
  isBestValue?: boolean;
  guarantee: string;
}

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-5 h-5 flex items-center justify-center">{children}</div>
);

const GlobeIcon = () => (
  <FeatureIcon>
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  </FeatureIcon>
);

const MailIcon = () => (
  <FeatureIcon>
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  </FeatureIcon>
);

const UserIcon = () => (
  <FeatureIcon>
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </FeatureIcon>
);

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className="relative">
    {plan.isBestValue && (
      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white border border-gray-200 shadow-lg rounded-full px-6 py-4">
          <span className="text-xl font-bold text-black">Best Value</span>
        </div>
      </div>
    )}

    <div
      className={`relative rounded-[51px] p-8  flex flex-col border border-gray-300`}
      style={{ backgroundColor: plan.backgroundColor }}
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h3 className="text-3xl font-bold text-black mb-3">{plan.name}</h3>
        <p className="text-base text-black">{plan.guarantee}</p>{" "}
      </div>
      <div className="flex justify-center mb-5">
        <div className="w-20 h-px bg-black"></div>
      </div>
      {/* Features */}
      <div className="flex-1 space-y-4 items-center flex justify-center flex-col">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            {feature.icon}
            <span className=" text-black">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Accuracy Badge */}
      <div className="flex justify-center mb-6 mt-6">
        <div className="border border-black px-6 py-2">
          <span className="text-base text-black">{plan.accuracy}</span>
        </div>
      </div>

      {/* Price */}
      <div className="text-center mb-12">
        <span className="text-4xl font-bold text-black">{plan.price}</span>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-white rounded-full px-8 py-3 text-xl font-bold text-black hover:opacity-90 transition-opacity">
          Get Started
        </button>
        <p className="text-base font-medium text-black mt-3">Cancel Anytime</p>
      </div>
    </div>
  </div>
);

const ToggleButton: React.FC<{
  options: string[];
  activeOption: string;
  onChange: (option: string) => void;
}> = ({ options, activeOption, onChange }) => (
  <div
    className="flex bg-white gap-2
    rounded-full"
  >
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onChange(option)}
        className={`px-6 py-2  rounded-full transition-all border border-black/50 ${
          activeOption === option
            ? "bg-[#455DBD] text-white font-bold"
            : "text-black hover:bg-gray-50"
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

const PricingPlans: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState("Monthly");
  const [currency, setCurrency] = useState("NGN");

  const plans: PricingPlan[] = [
    {
      id: "basic",
      name: "Basic Package",
      price: "N 5,000",
      accuracy: "Over 80% Accuracy",
      backgroundColor: "#F3F4E9",
      guarantee: "Money-Back Guarantee on First Month",
      features: [
        { icon: <GlobeIcon />, text: "Site Access" },
        { icon: <MailIcon />, text: "Daily E-mails of 3 Sure Games" },
        {
          icon: <div className="text-xl">📈</div>,
          text: "Access to Basic package markets",
        },
        {
          icon: <div className="text-xl">🎯</div>,
          text: "2 Odds to 3 Odds daily",
        },
      ],
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "N 7,500",
      accuracy: "Over 85% Accuracy",
      backgroundColor: "#F9EFEF",
      isBestValue: true,
      guarantee: "Money-Back Guarantee on First Month",
      features: [
        { icon: <GlobeIcon />, text: "Site Access" },
        { icon: <MailIcon />, text: "Daily E-mails of 3 Sure Games" },
        {
          icon: <div className="text-xl">📈</div>,
          text: "Access to Basic package markets",
        },
        {
          icon: <div className="text-xl">🎯</div>,
          text: "5 Odds to 30 Odds daily",
        },
      ],
    },
    {
      id: "vip",
      name: "VIP Package",
      price: "N 20,000",
      accuracy: "Over 95% Accuracy",
      backgroundColor: "#EDEBF1",
      guarantee: "Money-Back Guarantee on First Month",
      features: [
        { icon: <UserIcon />, text: "Personal account VIP manager" },
        {
          icon: <div className="text-xl">💎</div>,
          text: "Highest return on Investment (ROI)",
        },
        {
          icon: <div className="text-xl">🎯</div>,
          text: "1.8 Odds to 3 Odds daily",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Pricing & Plans
          </h2>
          <p className="text-2xl text-black max-w-2xl mx-auto">
            Subscribe to any of our plans. We have suitable plans for your
            budget.
          </p>
        </div>

        {/* Controls */}
        <div className="flex   w-full lg:flex-row justify-between items-center gap-6 mb-16 max-w-6xl mx-auto">
          {/* <div className="flex-1"></div> */}

          {/* Billing Period Toggle */}
          <ToggleButton
            options={["Monthly", "Annually"]}
            activeOption={billingPeriod}
            onChange={setBillingPeriod}
          />

          {/* Currency Selector */}
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-white border border-gray-300 rounded-full px-6 py-2 text-black appearance-none pr-12 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="NGN">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Compare Plans Button */}
        <div className="text-center">
          <button className="border border-gray-300 rounded-full px-8 py-4 text-xl text-black hover:bg-gray-50 transition-colors">
            Compare Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
