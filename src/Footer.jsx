import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#18252a] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-white flex items-center justify-center font-bold text-xs">
                F
              </div>
              <span className="text-xl font-semibold tracking-tight">forma<span className="text-xs align-top">®</span></span>
            </div>

            {/* Tagline */}
            <p className="text-slate-300 text-sm sm:text-base max-w-sm leading-relaxed">
              Clarity in strategy. Distinction in design. Impact through technology.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2">
              <a href="#linkedin" className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1">
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href="#instagram" className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1">
                Instagram <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase">
              EXPLORE
            </p>
            <ul className="space-y-2.5 text-sm font-normal text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase">
              SAY HELLO
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <p><a href="mailto:hello@forma.studio" className="hover:text-white transition-colors">hello@forma.studio</a></p>
              <p><a href="tel:+4402079460812" className="hover:text-white transition-colors">+44 (0)20 7946 0812</a></p>
            </div>

            <div className="pt-4 text-sm text-slate-400 space-y-1">
              <p>24 Charlotte Street</p>
              <p>London W1T 2ND, UK</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Bilal khan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-200 transition-colors">Privacy policy</a>
            <a href="#terms" className="hover:text-slate-200 transition-colors">Terms of use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;