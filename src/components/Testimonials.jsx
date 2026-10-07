import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Main Big Testimonial */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Subtitle */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-[11px] sm:text-xs tracking-widest text-slate-500 uppercase font-medium">
              GOOD PEOPLE. GREAT PARTNERSHIPS.
            </p>
          </div>

          {/* Main Quote */}
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.2] tracking-tight">
            “Forma didn’t just understand our business. They helped us see what it could become.”
          </blockquote>

          {/* Author Info */}
          <div className="pt-2">
            <h4 className="text-sm font-semibold text-slate-900">Emma Roberts</h4>
            <p className="text-xs text-slate-500">CEO, Northstar</p>
          </div>
        </div>

        {/* Right Secondary Testimonial Card */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
            
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 fill-[#2b66f6] text-[#2b66f6]"
                />
              ))}
            </div>

            {/* Small Quote */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              “Thoughtful, rigorous and genuinely collaborative. The team made an ambitious launch feel possible.”
            </p>

            {/* Author Info */}
            <div className="pt-2 border-t border-slate-100">
              <h4 className="text-sm font-semibold text-slate-900">James Walker</h4>
              <p className="text-xs text-slate-500">Founder, Veld</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;