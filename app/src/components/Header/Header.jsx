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
        className={`fixed z-30 w-full bg-white  backdrop-blur-lg backdrop-filter transition-all duration-500 ${
          isHeaderVisible ? "top-0" : "-top-full"
        }`}
      >
        <nav className="flex justify-between items-center py-3 px-4 md:px-8">
          <picture className="flex flex-1 items-center gap-2">
            <img
              src={menu}
              alt="Menu Hamburger"
              className="w-10 h-10 cursor-pointer"
              onClick={handleClick}
            />
            <p className="text-xl md:text-2xl font-medium">
              Explore Ivaí
            </p>
          </picture>

          <div className="flex flex-1 justify-end">
            <input
              type="text"
              placeholder="O que você procura?"
              className="bg-gray-100 rounded-full py-3 px-6"
            />
          </div>
        </nav>
      </header>

      <Navigation isOpen={showNavigation} onClose={handleCloseNavigation} />
    </>
  );
}

export default Header;
