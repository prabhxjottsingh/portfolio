import React, { useState, useEffect } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match this with animation duration
  };

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      handleMenuClose();
    } else {
      setIsMenuOpen(true);
    }
  };

  // Close menu when route changes
  useEffect(() => {
    if (isMenuOpen) {
      handleMenuClose();
    }
  }, [location]);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <RouterLink to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
              Prabhjot
            </span>
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/about" isActive={location.pathname === "/about"}>
              About
            </NavLink>
            <NavLink
              to="/experience"
              isActive={location.pathname === "/experience"}
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              isActive={location.pathname === "/projects"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/achievements"
              isActive={location.pathname === "/achievements"}
            >
              Achievements
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {(isMenuOpen || isClosing) && (
        <div
          className={`
            md:hidden 
            bg-gray-900 
            border-t 
            border-gray-800
            ${isClosing ? "animate-slide-up" : "animate-slide-down"}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink
              to="/"
              isActive={location.pathname === "/"}
              onClick={() => handleMenuClose()}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/about"
              isActive={location.pathname === "/about"}
              onClick={() => handleMenuClose()}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              to="/experience"
              isActive={location.pathname === "/experience"}
              onClick={() => handleMenuClose()}
            >
              Experience
            </MobileNavLink>
            <MobileNavLink
              to="/projects"
              isActive={location.pathname === "/projects"}
              onClick={() => handleMenuClose()}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              to="/achievements"
              isActive={location.pathname === "/achievements"}
              onClick={() => handleMenuClose()}
            >
              Achievements
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <RouterLink
    to={to}
    className={`
      relative
      text-gray-300 
      hover:text-blue-400 
      px-3 
      py-2 
      text-sm 
      font-medium 
      transition-colors 
      duration-200
      group
      ${isActive ? "text-blue-400" : ""}
    `}
  >
    {children}
    <span
      className={`
        absolute 
        -bottom-0.5 
        left-3 
        right-3 
        h-0.5 
        bg-blue-400 
        transform 
        origin-left
        transition-transform 
        duration-300 
        ease-out
        ${isActive ? "scale-x-100" : "scale-x-0"}
        group-hover:scale-x-100
      `}
    />
  </RouterLink>
);

// Mobile NavLink component
const MobileNavLink = ({
  to,
  children,
  isActive,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <RouterLink
    to={to}
    onClick={onClick}
    className={`
      block 
      px-3 
      py-2 
      text-base 
      font-medium 
      hover:bg-gray-800 
      rounded-md 
      transition-colors 
      duration-200
      ${isActive ? "bg-gray-800" : ""}
    `}
  >
    <span
      className={`
      relative 
      inline-block
      text-gray-300
      hover:text-blue-400
      transition-colors
      duration-200
      ${isActive ? "text-blue-400" : ""}
    `}
    >
      {children}
      <span
        className={`
          absolute 
          bottom-0 
          left-0 
          right-0 
          h-0.5 
          bg-blue-400 
          transform 
          origin-left
          transition-transform 
          duration-300 
          ease-out
          ${isActive ? "scale-x-100" : "scale-x-0"}
        `}
      />
    </span>
  </RouterLink>
);

export default Navbar;
