import React from 'react';

const ServicesHero = ({
  subtitle = "OUR SERVICES",
  title = "The right thinking. The right making.",
  description = "From defining your direction to bringing it to life, our connected disciplines help you move forward with purpose."
}) => {
  return (
    <section className="w-full bg-[#f8f7f4] py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtitle with small blue square dot */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
            <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-slate-600 uppercase">
              {subtitle}
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            {title}
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed pt-2 max-w-2xl">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;