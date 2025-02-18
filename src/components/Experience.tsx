import React from "react";
import {
  experiences as experienceData,
  achievements as achievementData,
} from "../data";

const Experience = () => {
  const experiences = experienceData;

  const achievements = achievementData;

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <div className="mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-gray-400 mt-1 md:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc mb-6 space-y-3 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed ml-5">
                      <span className="relative-left-2">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 text-blue-400 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {skill}
                    </span>
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
