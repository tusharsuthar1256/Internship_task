import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      
      <div className={`transition-all duration-300 overflow-hidden ${showTopBar ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex justify-between items-center px-3 sm:px-4 md:px-20 py-2 text-gray-600 border-b text-xs sm:text-sm">
          <span className="truncate w-2/3 sm:w-auto">World's Largest Medical Equipment Market Place</span>
          <div className="flex-shrink-0 text-xs sm:text-sm">
            <a href="#" className="hover:underline">My account</a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-3 bg-white">
        
        <img src="/nav-logo.png" alt="1MDM Logo" className="h-8 sm:h-10 md:h-14" />

        <div className="hidden md:flex gap-8 text-gray-400 ml-auto">
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Our Story</a>
          <a href="#" className="hover:text-black">Sell on 1MDM</a>
          <a href="#" className="hover:text-black">Pricing</a>
        </div>

        <button 
          className="md:hidden text-2xl text-gray-600 ml-auto" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3 text-gray-600 text-base">
          <a href="#" className="block hover:text-black">About Us</a>
          <a href="#" className="block hover:text-black">Our Story</a>
          <a href="#" className="block hover:text-black">Sell on 1MDM</a>
          <a href="#" className="block hover:text-black">Pricing</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
