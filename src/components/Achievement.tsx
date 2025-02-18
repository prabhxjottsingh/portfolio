import React from "react";
import { achievements as achievementData } from "../data";
import { Trophy } from "lucide-react";

const Achievement = () => {
  const achievements = achievementData;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <section id="achievements" className="py-5 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
          <Trophy className="w-8 h-8 text-blue-400" />
          <span>Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20 transition-all duration-300 hover:border-blue-400/40 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900/50 rounded-lg p-2 flex items-center justify-center">
                  <img
                    src={achievement.image}
                    alt=""
                    className="w-8 h-8 object-contain"
                    onError={handleImageError}
                  />
                </div>
                <p className="text-gray-100 leading-relaxed">
                  {achievement.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
