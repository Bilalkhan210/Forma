import React from 'react'
import AboutHero from '../components/AboutHero'
import OurStory from '../components/OurStory'
import Principles from '../components/Principles'
import AnimatedStats from '../components/AnimatedStats'
import Team from '../components/Team'
import HowWeWork from '../components/HowWeWork';
import MissionVision from '../components/MissionVision'
import CtaBanner from '../components/CtaBanner';


// Steps data definition for About page
const howWeWorkSteps = [
  {
    number: '01',
    title: 'Stay curious',
    description: 'Listen closely, ask better questions and uncover the opportunity.',
  },
  {
    number: '02',
    title: 'Make it matter',
    description: 'Connect insight and imagination to make the right ideas real.',
  },
  {
    number: '03',
    title: 'Work as one',
    description: 'Launch with confidence, learn from real people and keep improving.',
  },
  {
    number: '04',
    title: 'Own the outcome',
    description: 'Launch with confidence, learn from real people and keep improving.',
  },
];

const About = () => {
    const handleCtaClick = () => {
    // Apne hisab se click handler add karein (e.g. scroll to contact section / open modal)
    console.log('CTA Button Clicked!');
  };
  return (
    <div>
      <AboutHero />
      <OurStory />
    <MissionVision/>
        <HowWeWork 
        subtitle="HOW WE WORK"
        title="Principles, not just promises.."
        description="The way we think shapes the way we work. These are the commitments we bring to every partnership."
        steps={howWeWorkSteps}
      />

      {/* <Principles/> */}
      <AnimatedStats/>
      <Team/>
       <CtaBanner 
        subtitle="YOUR NEXT CHAPTER"
        title="A good partnership starts here."
        description="tell us about your biggest questions. We’ll help you find the right next step."
        buttonText="Start a conversation"
        onButtonClick={handleCtaClick}
      />
    </div>
  )
}

export default About