import React from 'react';
import { Compass, PenTool, Layers, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Compass className="w-6 h-6 text-[#2b66f6]" />,
      title: 'Strategy & positioning',
      description:
        'Find your direction. Align your business, brand and customer experience around a clear, compelling purpose.',
      tags: 'Research · Positioning · Roadmaps',
    },
    {
      icon: <PenTool className="w-6 h-6 text-[#2b66f6]" />,
      title: 'Brand & experience',
      description:
        'Make every touchpoint matter. Build distinctive identities and intuitive digital experiences people choose.',
      tags: 'Identity · UX/UI · Websites',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#2b66f6]" />,
      title: 'Digital & technology',
      description:
        'Turn ambition into something real. Launch scalable platforms and products built to move your business forward.',
      tags: 'Development · Platforms · Optimisation',
    },
  ];

  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#2b66f6] font-semibold mb-4">
            WHAT WE DO
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              Built around your next move.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
              One connected team. Three complementary disciplines. A better way forward.
            </p>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center mb-8 bg-[#f8f7f4]">
                  {service.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Taglines */}
                <p className="text-xs text-slate-400 font-medium mb-6">
                  {service.tags}
                </p>

                {/* Explore Service Link */}
                <a
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#2b66f6] group-hover:text-blue-700 transition-colors"
                >
                  <span>Explore service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;