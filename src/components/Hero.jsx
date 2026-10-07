import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-[#f8f7f4] min-h-[calc(100vh-80px)] py-12 lg:py-20 px-4 sm:px-6 lg:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Text Content */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
          
          {/* Top Subtitle */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-xs sm:text-sm tracking-widest text-slate-500 uppercase font-medium">
              INDEPENDENT THINKING. SHARED AMBITION.
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
            A clearer path. <br />
            A stronger <br />
            business.
          </h1>

          {/* Description Paragraph */}
          <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
            We bring strategy, design and technology together to help ambitious
            businesses move forward with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#2b66f6] hover:bg-blue-700 text-white text-sm font-medium px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm">
              <span>Let's build what's next</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button className="bg-transparent hover:bg-slate-200/50 border border-slate-300 text-slate-800 text-sm font-medium px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center gap-2">
              <span>Explore our work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Small Tagline */}
          <div className="flex items-center gap-2 pt-4 sm:pt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <p className="text-xs sm:text-sm text-slate-500">
              London studio. Global perspective.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-col w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[4/3] lg:aspect-[1.1/1] w-full">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Office space with team collaboration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Image Footer Caption */}
          <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-1">
            <span>Good work starts with good conversations.</span>
            <span className="font-medium tracking-wider">FORMA / 01</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;