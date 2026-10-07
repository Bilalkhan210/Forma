import React, { useState, useEffect, useRef } from 'react';

// Single Counter Component
const CounterItem = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // 2 seconds animation time
          const steps = 50;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-start">
      <span className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-3">
        {count}{suffix}
      </span>
      <p className="text-slate-400 text-xs sm:text-sm font-normal">
        {label}
      </p>
    </div>
  );
};

// Main Section Component
const AnimatedStats = () => {
  const statsData = [
    { target: 12, suffix: '+', label: 'Years of experience' },
    { target: 80, suffix: '+', label: 'Projects delivered' },
    { target: 24, suffix: '', label: 'Curious minds' },
    { target: 96, suffix: '%', label: 'Client satisfaction' },
  ];

  return (
    <section className="w-full bg-[#18252a] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
          {statsData.map((stat, index) => (
            <CounterItem
              key={index}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;