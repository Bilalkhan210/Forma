import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

const ServiceDetailSection = ({
  categoryNumber = "01",
  categoryName = "STRATEGY & POSITIONING",
  title = "Start with the right questions.",
  description = "Clarity is a competitive advantage. We combine customer insight, market understanding and business ambition to define where you can win — and how to get there.",
  features = [],
  outcome = "A shared direction. A practical plan. A team ready to move.",
  buttonText = "Discuss your project",
  buttonLink = "#",
  imageSrc = "",
  imageAlt = "Service image",
  isReversed = false // true hone par Image Left aur Content Right aayega
}) => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Box */}
          <div className={`lg:col-span-6 space-y-8 ${isReversed ? 'lg:order-last' : 'lg:order-first'}`}>
            
            {/* Category Tagline */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
              <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {categoryNumber} / {categoryName}
              </p>
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {description}
              </p>
            </div>

            {/* Check List */}
            {features && features.length > 0 && (
              <ul className="space-y-3 pt-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-800">
                    <Check className="w-4 h-4 text-slate-600 shrink-0 stroke-[2.5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Outcome Badge */}
            <div className="bg-[#edf3ff] p-5 sm:p-6 rounded-xl border border-blue-100/50 space-y-1">
              <p className="text-[11px] sm:text-xs font-bold tracking-widest text-[#2b66f6] uppercase">
                THE OUTCOME
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-800">
                {outcome}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={buttonLink}
                className="inline-flex items-center justify-center gap-3 bg-[#f0efe9] hover:bg-slate-200 text-slate-900 font-medium text-sm px-6 py-3.5 rounded-lg border border-slate-300/60 transition-all duration-200 group"
              >
                <span>{buttonText}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

          {/* Image Box */}
          <div className={`lg:col-span-6 ${isReversed ? 'lg:order-first' : 'lg:order-last'}`}>
            <div className="w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-sm bg-gray-200">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;