import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import "./App.css";
import About from "./components/About";
import Achievement from "./components/Achievement";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl" />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/achievements" element={<Achievement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
