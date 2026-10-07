import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CtaBanner = ({
  subtitle = "YOUR NEXT CHAPTER",
  title = "What could we build together?",
  description = "Bring us your biggest questions. We’ll help you find the right next step.",
  buttonText = "Start a conversation",
  onButtonClick,
  buttonLink
}) => {
  const handleButtonClick = (e) => {
    if (onButtonClick) {
      onButtonClick(e);
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className="w-full bg-[#2563eb] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        
        {/* Left Side Content */}
        <div className="max-w-2xl space-y-4">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-blue-200 uppercase">
            {subtitle}
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            {title}
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-normal pt-1">
            {description}
          </p>
        </div>

        {/* Right Side CTA Button */}
        <div className="shrink-0">
          <button 
            onClick={handleButtonClick}
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-medium text-sm px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm group cursor-pointer"
          >
            <span>{buttonText}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CtaBanner;