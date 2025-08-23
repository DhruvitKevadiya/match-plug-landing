import React from "react";
import Link from "next/link"; // If using Next.js, otherwise use regular anchor tags
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-gray-800">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium underline decoration-2 underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/predictions"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Predictions
            </Link>
            <Link
              href="/betting-tips"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Betting tips
            </Link>
            <Link
              href="/match-previews"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Match Previews
            </Link>
            <Link
              href="/news"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              News
            </Link>
          </nav>

          {/* Login Button */}
          <div className="flex items-center">
            <Link href="/login">
              <button className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
