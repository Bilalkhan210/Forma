import React from 'react';
import { Compass, PenTool, Layers, ArrowUpRight } from 'lucide-react';

const ServiceCards = ({ services }) => {
  // Default data agar parent se prop na mile
  const defaultServices = [
    {
      icon: Compass,
      title: 'Strategy & positioning',
      description: 'Find your direction. Align your business, brand and customer experience around a clear, compelling purpose.',
      tags: ['Research', 'Positioning', 'Roadmaps'],
      link: '#',
    },
    {
      icon: PenTool,
      title: 'Brand & experience',
      description: 'Make every touchpoint matter. Build distinctive identities and intuitive digital experiences people choose.',
      tags: ['Identity', 'UX/UI', 'Websites'],
      link: '#',
    },
    {
      icon: Layers,
      title: 'Digital & technology',
      description: 'Turn ambition into something real. Launch scalable platforms and products built to move your business forward.',
      tags: ['Development', 'Platforms', 'Optimisation'],
      link: '#',
    },
  ];

  const servicesList = services || defaultServices;

  return (
    <section className="w-full bg-[#f8f7f4] pb-20 lg:pb-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-6">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-[#2b66f6]">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <p className="text-xs text-slate-400 font-normal pt-2">
                    {Array.isArray(service.tags) ? service.tags.join(' · ') : service.tags}
                  </p>
                </div>

                {/* Explore Link Button */}
                <div className="pt-8">
                  <a
                    href={service.link || '#'}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2b66f6] hover:text-blue-700 transition-colors group"
                  >
                    <span>Explore service</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;