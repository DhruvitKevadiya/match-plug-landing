import React from "react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Bokeh/Light effects */}
      <div className="absolute inset-0">
        {/* Large bokeh lights */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-amber-400/30 rounded-full blur-md"></div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-yellow-400/25 rounded-full blur-lg"></div>
        <div className="absolute top-60 left-1/4 w-12 h-12 bg-orange-400/35 rounded-full blur-md"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-amber-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-60 left-16 w-14 h-14 bg-yellow-500/30 rounded-full blur-md"></div>
        <div className="absolute top-40 right-1/4 w-18 h-18 bg-orange-300/25 rounded-full blur-lg"></div>
        <div className="absolute top-80 left-1/2 w-10 h-10 bg-amber-400/40 rounded-full blur-sm"></div>
        <div className="absolute bottom-80 right-1/3 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>

        {/* Small scattered lights */}
        <div className="absolute top-24 left-64 w-4 h-4 bg-amber-400/60 rounded-full blur-sm"></div>
        <div className="absolute top-44 right-48 w-3 h-3 bg-yellow-300/70 rounded-full blur-xs"></div>
        <div className="absolute top-72 left-32 w-5 h-5 bg-orange-400/50 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-64 w-4 h-4 bg-amber-500/60 rounded-full blur-sm"></div>
        <div className="absolute bottom-48 left-48 w-3 h-3 bg-yellow-400/80 rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center sm:text-start">
        <div className=" max-w-3xl mx-auto flex flex-col sm:gap-7 gap-5 ">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl font-bold text-white  ">
            <span className="">
              Unlock Sure Wins with Expert Predictions -{" "}
            </span>
            <span className=""> </span>
            <span className="  font-medium mt-4">
              Subscribe Now and Turn Bets into Profit
            </span>
          </h1>

          {/* Stats/Features Text */}
          <p className=" sm:text-lg lg:text-xl text-white   max-w-5xl  bg-white/50">
            80% Accuracy in VIP Tips | Daily Free Predictions | Start Winning
            Today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-4  ">
            <Button>Subscribe Now</Button>
            <Button variant="secondary">Get Free Tips</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
