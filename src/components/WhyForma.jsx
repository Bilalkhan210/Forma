import React from 'react';
import { Users, MessageSquare, Accessibility, TrendingUp } from 'lucide-react';

const WhyForma = () => {
  const features = [
    {
      icon: Users,
      title: "One connected team",
      description: "Strategy, design and engineering working together from day one. Fewer handovers. Better decisions."
    },
    {
      icon: MessageSquare,
      title: "Clarity at every stage",
      description: "Shared plans, weekly check-ins and honest conversations. You'll always know where we are and what's next."
    },
    {
      icon: Accessibility,
      title: "Built for real people",
      description: "Accessible, useful experiences shaped by research and tested with the people who will use them."
    },
    {
      icon: TrendingUp,
      title: "Value beyond launch",
      description: "Clear measures of success, practical handover and support to keep your business moving forward."
    }
  ];

  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div className="space-y-3 max-w-2xl">
            <p className="text-[11px] sm:text-xs font-bold tracking-widest text-[#2b66f6] uppercase">
              WHY FORMA
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              More than a supplier. A real partner.
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            A thoughtful team, a transparent process and a commitment to outcomes that last.
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/60 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center text-[#2b66f6]">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyForma;