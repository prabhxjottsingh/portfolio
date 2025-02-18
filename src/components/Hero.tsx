import React from "react";
import { useNavigate } from "react-router-dom";
import TypewriterEffect from "./TypeWriterEffect";
import { Briefcase, Telescope } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleViewResume = () => {
    // Direct download link from Google Drive
    const fileId = "file/d/1Ztz9E5HFmbj0BAq4xP2AQxmusZ7ggGRO/view";
    const resumeUrl = `https://drive.google.com/${fileId}`;

    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full text-center">
        <p className="text-xl text-gray-400 mb-6">
          Building innovative solutions through code
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          <TypewriterEffect
            html={
              "Hey, I'm Prabhjot Singh - Software <span class='text-blue-400'> Engineer</span>"
            }
            speed={50}
          />
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/experience")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span>View Experiences</span>
            <Briefcase className="w-4 h-4" />
          </button>
          <button
            onClick={handleViewResume}
            className="border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>View Resume</span>
            <Telescope className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
