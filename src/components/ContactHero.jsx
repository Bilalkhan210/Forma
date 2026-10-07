import React from 'react';

const ContactHero = () => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Tag line with blue indicator */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
          <p className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
            GET IN TOUCH
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] max-w-4xl">
          Good things start with a conversation.
        </h2>

        {/* Description Paragraph */}
        <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl pt-2">
          A new idea, a big challenge or a simple question. We’d love to hear what’s on your mind.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;