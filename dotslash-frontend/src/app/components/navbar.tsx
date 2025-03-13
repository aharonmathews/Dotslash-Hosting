"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

import logo from "../assets/navbar_logo.svg"; // Make sure the path is correct

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#C49A32] text-black py-3 px-6 flex items-center justify-between transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={180} height={180} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-lg font-medium">
        <a href="#events" className="hover:underline font-unbounded">Events</a>
        <a href="#gallery" className="hover:underline font-unbounded">Gallery</a>
        <button className="bg-black text-[#C49A32] px-10 py-2 rounded-full font-medium font-unbounded hover:opacity-80">
            <a href="#collaboration">Collaborate</a>
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-2/3 h-screen bg-[#C49A32] flex flex-col gap-6 items-center text-lg font-medium pt-10 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <a href="#events" className="hover:underline font-unbounded" onClick={() => setMenuOpen(false)}>Events</a>
        <a href="#gallery" className="hover:underline font-unbounded" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a
  href="#collaboration"
  className="bg-black text-[#C49A32] px-10 py-2 rounded-full font-medium font-unbounded hover:opacity-80 inline-block"
  onClick={() => setMenuOpen(false)} // Close menu on mobile
>
  Collaborate
</a>

      </div>
    </nav>
  );
};

export default Navbar;