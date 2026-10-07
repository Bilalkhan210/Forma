import React from 'react';
import { Compass, Telescope } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="w-full bg-[#f8f7f4] pb-16 lg:pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Mission Card */}
        <div className="bg-[#f3f2ed] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col space-y-6">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center bg-transparent text-[#2b66f6]">
            <Compass className="w-5 h-5 stroke-[1.5]" />
          </div>

          {/* Subtitle / Tag */}
          <div className="flex items-center gap-2 pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-[11px] sm:text-xs tracking-widest text-slate-500 uppercase font-medium">
              OUR MISSION
            </p>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Make progress possible.
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed pt-2">
            We turn complexity into clarity, helping businesses create brands, experiences and products that make a meaningful difference.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#f3f2ed] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col space-y-6">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center bg-transparent text-[#2b66f6]">
            <Telescope className="w-5 h-5 stroke-[1.5]" />
          </div>

          {/* Subtitle / Tag */}
          <div className="flex items-center gap-2 pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-[11px] sm:text-xs tracking-widest text-slate-500 uppercase font-medium">
              OUR VISION
            </p>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Better business. Better everyday.
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed pt-2">
            A world where thoughtful design and useful technology help ambitious organisations grow responsibly and improve people’s lives.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;