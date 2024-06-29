import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const isScrolledToTop = currentScrollPosition < 200;
      setIsHeaderVisible(
        isScrolledToTop || lastScrollPosition > currentScrollPosition
      );
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShowNavigation(!showNavigation);
  };

  const handleCloseNavigation = () => {
    setShowNavigation(false);
  };

  return (
    <>
      <header
        className={`fixed z-30 w-full bg-white backdrop-blur-lg backdrop-filter shadow-lg transition-all duration-300 ${
          isHeaderVisible ? "top-0" : "-top-full"
        }`}
      >
        <nav className="flex justify-between items-center py-4 px-6 md:px-10 lg:px-12">
          <div className="flex items-center gap-4 md:gap-6">
            
            <Link to="/" className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Explore Ivaí
            </Link>
          </div>
          <div className="">
            <button
              onClick={handleClick}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <Navigation isOpen={showNavigation} onClose={handleCloseNavigation} />
    </>
  );
}

export default Header;
