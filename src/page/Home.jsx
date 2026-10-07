import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import AboutFeature from '../components/AboutFeature';
import SelectedWork from '../components/SelectedWork';
import AnimatedStats from '../components/AnimatedStats';
import Testimonials from '../components/Testimonials';
import HowWeWork from '../components/HowWeWork';
import CtaBanner from '../components/CtaBanner';

const Home = () => {
  // Steps data definition for Home page
  const howWeWorkSteps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Listen closely, ask better questions and uncover the opportunity.',
    },
    {
      number: '02',
      title: 'Create',
      description: 'Connect insight and imagination to make the right ideas real.',
    },
    {
      number: '03',
      title: 'Move forward',
      description: 'Launch with confidence, learn from real people and keep improving.',
    },
  ];

  const handleCtaClick = () => {
    // Apne hisab se click handler add karein (e.g. scroll to contact section / open modal)
    console.log('CTA Button Clicked!');
  };

  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <AboutFeature />
      <SelectedWork />
      <AnimatedStats />
      <Testimonials />
      
      {/* Pass props to HowWeWork component */}
      <HowWeWork 
        subtitle="HOW WE WORK"
        title="Clear thinking. Tangible progress."
        description="A focused, collaborative process that keeps your ambition at the centre."
        steps={howWeWorkSteps}
      />
      
      {/* Dynamic CtaBanner component */}
      <CtaBanner 
        subtitle="YOUR NEXT CHAPTER"
        title="What could we build together?"
        description="Bring us your biggest questions. We’ll help you find the right next step."
        buttonText="Start a conversation"
        onButtonClick={handleCtaClick}
      />
    </>
  );
};

export default Home;