import React from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="max-w-6xl w-full text-center">
        <p className="text-xl text-gray-400 mb-6">
          Building innovative solutions through code
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Hey, I'm Prabhjot Singh - Software Engineer
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/experience")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Experiences
          </button>
          <button
            onClick={handleViewResume}
            className="border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>View Resume</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
