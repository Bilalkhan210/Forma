import React from 'react';

const AboutHero = () => {
  return (
    <section className="w-full bg-[#f8f7f4] pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-14">
        
        {/* Header Text Content */}
        <div className="max-w-3xl space-y-4">
          {/* Subtitle Tag */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-[11px] sm:text-xs tracking-widest text-slate-500 uppercase font-medium">
              ABOUT FORMA
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Independent minds. Shared purpose.
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed pt-2 max-w-2xl">
            We’re a 24-person team helping ambitious businesses make their next chapter their best one yet.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" 
            alt="Forma Team Working Together"
            className="w-full h-[320px] sm:h-[480px] lg:h-[600px] object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;