import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SelectedWork = () => {
  const projects = [
    {
      category: 'DIGITAL PRODUCTS',
      title: 'Northstar',
      description: 'A clearer way to take control of your finances.',
      tags: 'Strategy · Product design · Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      link: '#northstar',
    },
    {
      category: 'BRAND STRATEGY',
      title: 'Veld',
      description: 'A naturally distinctive brand for a better everyday.',
      tags: 'Positioning · Identity · E-commerce',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
      link: '#veld',
    },
  ];

  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#2b66f6] font-semibold mb-4">
              SELECTED WORK
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              Ideas made meaningful.
            </h2>
          </div>

          {/* View All Projects Button */}
          <div>
            <button className="bg-[#f0eee9] hover:bg-slate-200 border border-slate-300/60 text-slate-900 text-sm font-medium px-5 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
              <span>View all projects</span>
              <ArrowUpRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              
              {/* Project Image Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full bg-stone-200 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {project.category}
                </p>

                <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-[#2b66f6] transition-colors">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="text-slate-600 text-sm sm:text-base font-normal">
                  {project.description}
                </p>

                <p className="text-xs text-slate-400 pt-1">
                  {project.tags}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;