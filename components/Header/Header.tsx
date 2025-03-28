"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll para mudar o fundo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">TRS</div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-gray-300 transition">
            About
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition">
            Contact
          </a>
          <a href="#services" className="text-white hover:text-gray-300 transition">
            Services
          </a>
        </nav>

        {/* Botão do Menu Hambúrguer (Mobile) */}
        <button
          className={`md:hidden text-white focus:outline-none text-3xl ${
            isOpen ? "invisible" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-6 right-6 text-3xl hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <a href="#about" className="hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#contact" className="hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <a href="#services" className="hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>
          Services
        </a>
      </nav>
    </header>
  );
};

export default Header;
