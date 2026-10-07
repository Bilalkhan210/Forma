import React from 'react';

const Principles = () => {
  const principlesList = [
    {
      number: '01',
      title: 'Stay curious',
      description: 'Ask the extra question. Look beyond the obvious. Better answers begin with an open mind.',
    },
    {
      number: '02',
      title: 'Make it matter',
      description: 'Care about the details and the bigger picture. Create work that is useful, not just beautiful.',
    },
    {
      number: '03',
      title: 'Work as one',
      description: 'Share generously, challenge respectfully and leave egos at the door. We go further together.',
    },
    {
      number: '04',
      title: 'Own the outcome',
      description: 'Be honest, take responsibility and follow through. Trust is built in the everyday.',
    },
  ];

  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <p className="text-[11px] sm:text-xs tracking-widest text-[#2b66f6] uppercase font-semibold">
              WHAT GUIDES US
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              Principles, not just promises.
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              The way we think shapes the way we work. These are the commitments we bring to every partnership.
            </p>
          </div>
        </div>

        {/* 2x2 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-20">
          {principlesList.map((item) => (
            <div key={item.number} className="border-t border-gray-300/70 pt-8 space-y-4">
              <span className="text-sm font-medium text-[#2b66f6]">
                {item.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Principles;