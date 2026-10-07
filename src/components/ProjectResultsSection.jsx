import React, { useState, useEffect, useRef } from 'react';

// Custom lightweight counter hook / component
const AnimatedNumber = ({ value, decimals = 0, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseFloat(value);
          const totalFrames = Math.round((duration / 1000) * 60);
          const increment = end / totalFrames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            start += increment;
            if (currentFrame >= totalFrames) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
};

const ProjectResultsSection = () => {
  const steps = [
    {
      tag: 'THE CHALLENGE',
      title: 'Bring clarity to complexity.',
      description: 'Northstar needed to turn a fragmented finance platform into a product people could understand, trust and use every day.'
    },
    {
      tag: 'OUR APPROACH',
      title: 'Start with real people.',
      description: 'We interviewed customers, simplified key journeys and built a shared design system before developing a faster, more intuitive experience.'
    },
    {
      tag: 'THE RESULT',
      title: 'A more confident customer.',
      description: 'A unified product that makes money management feel simple, supported by a scalable platform and a clear roadmap for growth.'
    }
  ];

  const metrics = [
    {
      endNumber: 42,
      suffix: '%',
      decimals: 0,
      label: 'Increase in onboarding completion'
    },
    {
      endNumber: 2.1,
      suffix: '×',
      decimals: 1,
      label: 'More weekly active users'
    },
    {
      endNumber: 8,
      suffix: ' weeks',
      decimals: 0,
      label: 'From prototype to pilot'
    }
  ];

  return (
    <section className="w-full bg-[#f8f7f4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
                <p className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
                  {step.tag}
                </p>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Metrics Box */}
        <div className="w-full bg-[#edf1fe] rounded-2xl p-8 sm:p-12 lg:p-14 border border-blue-100/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                
                <h4 className="text-5xl sm:text-6xl font-semibold text-[#2b66f6] tracking-tight">
                  <AnimatedNumber
                    value={metric.endNumber}
                    decimals={metric.decimals}
                    duration={2500}
                  />
                  {metric.suffix}
                </h4>

                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  {metric.label}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectResultsSection;