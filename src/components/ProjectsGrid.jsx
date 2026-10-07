import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All projects');

  // Categories List
  const categories = [
    'All projects',
    'Brand strategy',
    'Digital products',
    'Web experiences'
  ];

  // Total 6 Projects Data
  const projects = [
    {
      id: 1,
      categoryTag: 'DIGITAL PRODUCTS',
      categorySlug: 'Digital products',
      title: 'Northstar',
      description: 'A clearer way to take control of your finances.',
      tags: 'Strategy · Product design · Development',
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 2,
      categoryTag: 'BRAND STRATEGY',
      categorySlug: 'Brand strategy',
      title: 'Veld',
      description: 'A naturally distinctive brand for a better everyday.',
      tags: 'Positioning · Identity · E-commerce',
      imageSrc: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 3,
      categoryTag: 'WEB EXPERIENCES',
      categorySlug: 'Web experiences',
      title: 'Kinetix',
      description: 'Interactive web application built for modern teams.',
      tags: 'UI/UX Design · Webflow · Animation',
      imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 4,
      categoryTag: 'DIGITAL PRODUCTS',
      categorySlug: 'Digital products',
      title: 'Aura Health',
      description: 'Mobile app and web platform for holistic wellness.',
      tags: 'React Native · Node.js · Product Design',
      imageSrc: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 5,
      categoryTag: 'BRAND STRATEGY',
      categorySlug: 'Brand strategy',
      title: 'Lumina Studio',
      description: 'Visual identity system and packaging design for luxury goods.',
      tags: 'Brand Identity · Art Direction · Guidelines',
      imageSrc: 'https://images.unsplash.com/photo-1542744094-3a31216994c4?q=80&w=1200&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 6,
      categoryTag: 'WEB EXPERIENCES',
      categorySlug: 'Web experiences',
      title: 'Nexus Flow',
      description: 'High-performance marketing website with seamless 3D visuals.',
      tags: 'Next.js · Tailwind CSS · Three.js',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      link: '#'
    }
  ];

  // Filter Logic
  const filteredProjects = activeCategory === 'All projects'
    ? projects
    : projects.filter(project => project.categorySlug === activeCategory);

  return (
    <section className="w-full bg-[#f8f7f4] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Category Filters Bar & Project Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2b66f6] text-white shadow-sm'
                      : 'bg-[#f0efe9] text-slate-700 hover:bg-slate-200 border border-slate-300/40'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Counter */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {filteredProjects.length} selected project{filteredProjects.length !== 1 ? 's' : ''}
          </p>

        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group block space-y-4"
            >
              {/* Image Container */}
              <div className="w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-200 shadow-sm border border-slate-200/60">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  {project.categoryTag}
                </p>

                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 inline-flex items-center gap-2 group-hover:text-[#2b66f6] transition-colors">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                <p className="text-slate-600 text-sm sm:text-base">
                  {project.description}
                </p>

                <p className="text-xs text-slate-400 font-medium pt-1">
                  {project.tags}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsGrid;