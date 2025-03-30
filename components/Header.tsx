"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
      aria-label="Main Navigation Header"
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* "Logo" minimalista */}
        <Link
          href="#hero"
          className="text-white text-xl font-bold tracking-tight hover:text-gray-300 transition"
        >
          Tomelis Rig Services
        </Link>

        {/* Menu Desktop simplificado */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-white hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#services" className="text-white hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#experience" className="text-white hover:text-gray-300 transition">
            Experience
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          aria-label="Toggle Mobile Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Mobile (com as mesmas seções) */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <Link href="#hero" className="hover:text-gray-300 transition" onClick={handleLinkClick}>
          Home
        </Link>
        <Link href="#about" className="hover:text-gray-300 transition" onClick={handleLinkClick}>
          About
        </Link>
        <Link href="#services" className="hover:text-gray-300 transition" onClick={handleLinkClick}>
          Services
        </Link>
        <Link href="#experience" className="hover:text-gray-300 transition" onClick={handleLinkClick}>
          Experience
        </Link>
        <Link href="#contact" className="hover:text-gray-300 transition" onClick={handleLinkClick}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
