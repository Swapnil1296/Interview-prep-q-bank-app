import React from "react";

const Header = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-gray-600 py-16">
        <div className="container mx-auto px-4">
          {/* On mobile: text-3xl, on small and above: text-5xl */}
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 font-sans animate-fade-in">
            Interview Preparation Guide
          </h1>
          {/* On mobile: text-base, on small and above: text-xl */}
          <p className="text-base sm:text-sm font-light tracking-wide">
            Master your technical interviews with comprehensive answers and
            examples
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
