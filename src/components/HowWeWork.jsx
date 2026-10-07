import React from 'react';

const HowWeWork = ({ 
  subtitle = "HOW WE WORK", 
  title = "Clear thinking. Tangible progress.", 
  description = "A focused, collaborative process that keeps your ambition at the centre.", 
  steps = [] 
}) => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#2b66f6] font-semibold mb-4">
              {subtitle}
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Dynamic Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="pt-6 border-t border-slate-300/80 flex flex-col space-y-4 group transition-all duration-300"
            >
              <span className="text-xs font-semibold text-[#2b66f6]">
                {step.number || `0${index + 1}`}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight group-hover:text-[#2b66f6] transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;