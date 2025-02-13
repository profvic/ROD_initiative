import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/ROD2.png" alt="Company Logo" className="h-8 w-8 mr-2" />
            <span className="ml-2 text-xl font-bold text-gray-800">ROD Africa Initiative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#mission" className="text-gray-700 hover:text-green-600 transition-colors">Our Mission</a>
            <a href="#ourteam" className="text-gray-700 hover:text-green-600 transition-colors">Our Team</a>
            <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors">Projects</a>
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
            <a href="#mission" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Our Mission</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Projects</a>
            <a href="#donate" className="block px-3 py-2 text-green-600 font-medium hover:bg-green-50 rounded-md transition-colors">Donate Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}