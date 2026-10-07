import React from 'react';

const ProjectFocusSection = ({
  categoryTag = "IN FOCUS / NORTHSTAR",
  title = "Making finance feel human again.",
  client = "Northstar",
  sector = "Financial services",
  services = "Strategy, product design, development",
  year = "2025",
  imageSrc = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Northstar dashboard on laptop and mobile"
}) => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Tagline & Main Title */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
              <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {categoryTag}
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight max-w-2xl">
              {title}
            </h2>
          </div>

          {/* Right Side: Metadata List */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-6 text-xs sm:text-sm">
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                CLIENT
              </p>
              <p className="font-medium text-slate-800">{client}</p>
            </div>

            <div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                SECTOR
              </p>
              <p className="font-medium text-slate-800">{sector}</p>
            </div>

            <div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                SERVICES
              </p>
              <p className="font-medium text-slate-800">{services}</p>
            </div>

            <div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                YEAR
              </p>
              <p className="font-medium text-slate-800">{year}</p>
            </div>
          </div>

        </div>

        {/* Showcase Image Banner */}
        <div className="w-full h-[380px] sm:h-[500px] lg:h-[620px] rounded-2xl overflow-hidden bg-slate-200 shadow-sm border border-slate-200/60">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};

export default ProjectFocusSection;