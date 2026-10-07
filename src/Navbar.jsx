import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-[#f8f7f4] border-b border-gray-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 bg-[#2b66f6] flex items-center justify-center rounded-sm relative">
            <div className="w-3 h-3 bg-[#f8f7f4] absolute top-1 right-1"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 flex items-baseline">
            forma<span className="text-xs ml-0.5 font-normal">®</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#2b66f6] border-b-2 border-[#2b66f6] pb-1'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center">
          <Link
            to="/contact"
            className="bg-[#2b66f6] hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile & Small Tablet) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-slate-900 focus:outline-none p-2 rounded-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f7f4] border-b border-gray-200 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#2b66f6] bg-blue-50/60'
                      : 'text-slate-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#2b66f6] hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;