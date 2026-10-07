import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutFeature = () => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side Image */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[4/3] lg:aspect-[1.15/1] w-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Team sitting around a table discussing work"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
          
          {/* Top Subtitle */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-xs sm:text-sm tracking-widest text-slate-500 uppercase font-medium">
              THE FORMA WAY
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.15] tracking-tight">
            Big-picture thinkers. <br />
            Hands-on partners.
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              We're an independent team of strategists, designers and technologists. Since 2014, we've helped organisations turn complex challenges into meaningful progress.
            </p>
            <p>
              No silos. No jargon. Just the right people, asking better questions and making things that make a difference.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="bg-[#f0eee9] hover:bg-slate-200 border border-slate-300/60 text-slate-900 text-sm font-medium px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center gap-2">
              <span>Meet Forma</span>
              <ArrowUpRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFeature;