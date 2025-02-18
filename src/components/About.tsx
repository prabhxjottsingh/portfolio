import React from "react";
import { education as educationData } from "../data";
const About = () => {
  const skills = [
    "Angular",
    "Java",
    "Springboot",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
  ];

  const education = educationData;

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* About Text */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-blue-500/30 transition-colors duration-300">
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in
                building scalable web applications. My focus is on creating
                efficient, maintainable, and user-friendly solutions using
                modern technologies. I enjoy tackling complex problems and
                turning ideas into reality through clean and efficient code.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-blue-500/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="bg-blue-500/10 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900/50 text-blue-400 rounded-lg text-sm font-medium border border-gray-700 hover:border-blue-500/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-blue-500/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="bg-blue-500/10 p-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7"
                  />
                </svg>
              </span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`${
                    index !== 0 ? "pt-6 border-t border-gray-700" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-white mb-1">
                        {edu.school}
                      </p>
                      <p className="text-blue-400">{edu.degree}</p>
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                    </div>
                    <div className="bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700">
                      <p className="text-gray-400 text-sm mb-1">
                        {edu.score.label}
                      </p>
                      <p className="text-blue-400 font-semibold text-right">
                        {edu.score.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
