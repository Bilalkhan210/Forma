import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'northstar', className: 'font-bold tracking-tight lowercase text-xl sm:text-2xl' },
    { name: 'VELD', className: 'font-light tracking-widest uppercase text-xl sm:text-2xl' },
    { name: 'ATLAS HOUSE', className: 'font-medium tracking-wider uppercase text-base sm:text-lg' },
    { name: 'orbit', className: 'font-semibold tracking-tight lowercase text-xl sm:text-2xl' },
    { name: 'common ground', className: 'font-normal tracking-normal lowercase text-base sm:text-lg' },
    { name: 'MERIDIAN', className: 'font-bold tracking-wider uppercase text-lg sm:text-xl' },
  ];

  return (
    <section className="w-full bg-[#f8f7f4] border-t border-b border-gray-200/80 py-10 lg:py-14 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Tagline */}
        <p className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-medium mb-8">
          A PARTNER TO AMBITIOUS TEAMS
        </p>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 items-center justify-items-start sm:justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center text-slate-800 transition-opacity duration-200 hover:opacity-70 cursor-pointer select-none"
            >
              <span className={partner.className}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;