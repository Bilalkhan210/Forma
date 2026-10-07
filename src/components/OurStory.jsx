import React from 'react';

const OurStory = () => {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Heading Content */}
        <div className="lg:col-span-6 space-y-4">
          {/* Subtitle / Tag */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b66f6]"></span>
            <p className="text-[11px] sm:text-xs tracking-widest text-slate-500 uppercase font-medium">
              OUR STORY
            </p>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Built on curiosity. Growing through trust.
          </h2>
        </div>

        {/* Right Column: Story Paragraphs */}
        <div className="lg:col-span-6 space-y-6 pt-2">
          <p className="text-slate-900 text-lg sm:text-xl font-medium leading-relaxed">
            Forma began in London in 2014 with a simple belief: the best work happens when strategy, design and technology share the same table.
          </p>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Today, our independent studio brings together 24 curious minds. We partner with founders, growing businesses and established organisations to make change feel clear, practical and full of possibility.
          </p>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            From your first question to your next big launch, we work as an extension of your team. Your ambition becomes ours.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;