import React from 'react';

const ProjectsHero = () => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Tagline with Blue Dot */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-slate-500 uppercase">
            OUR WORK
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] max-w-4xl">
          Different challenges. <br />
          Meaningful outcomes.
        </h2>

        {/* Subtitle Description */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal pt-1">
          A selection of partnerships that connect clear thinking, distinctive design and useful technology.
        </p>

      </div>
    </section>
  );
};

export default ProjectsHero;