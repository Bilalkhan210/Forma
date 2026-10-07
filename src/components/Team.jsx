import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Maya Patel',
      role: 'Founder & Managing Director',
      bio: 'Connecting commercial ambition with purposeful creativity.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Daniel Brooks',
      role: 'Creative Director',
      bio: 'Building brands and experiences with clarity and character.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Elena Fischer',
      role: 'Technology Director',
      bio: 'Turning complex ideas into elegant, scalable products.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Sam Chen',
      role: 'Strategy Director',
      bio: 'Finding the human insights behind better business decisions.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-3">
            <p className="text-[11px] sm:text-xs tracking-widest text-[#2b66f6] uppercase font-semibold">
              THE PEOPLE BEHIND THE PROGRESS
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
              Good people. Different perspectives.
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Meet our leadership team, supported by a studio of 24 strategists, designers and technologists.
            </p>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Photo */}
              <div className="w-full h-[320px] sm:h-[360px] lg:h-[380px] overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#2b66f6]">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 pt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;