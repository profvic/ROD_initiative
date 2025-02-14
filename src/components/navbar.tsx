import React, { useState } from 'react';
import { Menu, X, ChevronDownIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen, ] = React.useState(false);
  const[isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/ROD2.png" alt="Company Logo" className="h-8 w-8 mr-2" />
            <span className="ml-2 text-xl font-bold text-gray-800">ROD Africa Initiative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#About" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            {/* Dropdown Container */}
            <div className="relative">
              {/* Dropdown Button */}
              <button 
                className="flex items-center text-gray-700 hover:text-green-500 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Projects <ChevronDownIcon className="ml-1 w-4 h-4" />
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                  <a href="#programs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Programs/Initiative</a>
                  <a href="#events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Events</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</a>
                </div>
              )}
            </div>
            <button className="md:hidden text-gray-700 focus:outline-none">
            ☰
          </button>            
            <a href="#ourteam" className="text-gray-700 hover:text-green-600 transition-colors">Our Team</a>
            
            <a 
              href="#donate" 
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
            >
              Donate Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Home</a>
            <a href="#About" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">About Us</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Projects</a>
            <a href="#ourteam" className="text-gray-700 hover:text-green-600 transition-colors">Our Team</a>
            <a href="#donate" className="block px-3 py-2 text-green-600 font-medium hover:bg-green-50 rounded-md transition-colors">Donate Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}