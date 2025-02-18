import React from "react";
import { achievements as achievementData } from "../data";

const Achievement = () => {
  const achievements = achievementData;

  return (
    <section id="achievement" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex items-start gap-4">
                {/* Achievement icon */}
                <div className="flex-shrink-0 bg-gray-900 rounded-lg p-3 border border-gray-700 group-hover:border-blue-400/50 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Achievement content */}
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {achievement}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-400/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default Achievement;
