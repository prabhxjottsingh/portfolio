import React from "react";
import {
  experiences as experienceData,
  achievements as achievementData,
} from "../data";
import { Briefcase, Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = experienceData;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <section id="experience" className="py-5 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <span>Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20 transition-all duration-300 hover:border-blue-400/40"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <span>{exp.title}</span>
                    </h3>
                    <p className="text-blue-400 font-medium flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-gray-400 mt-1 md:mt-0 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </p>
                </div>
                <ul className="list-disc mb-6 space-y-3 text-gray-100">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed ml-5">
                      <span className="relative-left-2">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-colors duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6"
                        onError={handleImageError}
                      />
                      <span className="text-blue-400 text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
