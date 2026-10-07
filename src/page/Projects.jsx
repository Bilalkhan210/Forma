import React from 'react'
import ProjectsHero from '../components/ProjectsHero'
import ProjectsGrid from '../components/ProjectsGrid'
import ProjectFocusSection from '../components/ProjectFocusSection'
import ProjectResultsSection from '../components/ProjectResultsSection'
import CtaBanner from '../components/CtaBanner'
const Projects = () => {
    const handleCtaClick = () => {
    // Apne hisab se click handler add karein (e.g. scroll to contact section / open modal)
    console.log('CTA Button Clicked!');
  }
  return (
<>
<ProjectsHero/>
<ProjectsGrid/>
<ProjectFocusSection />
<ProjectResultsSection/>
  <CtaBanner 
        subtitle="YOUR NEXT CHAPTER"
        title="Your next chapter starts here."
        description="tell us about your biggest questions. We’ll help you find the right next step."
        buttonText="Start a conversation"
        onButtonClick={handleCtaClick}
      />
</>

  )
}

export default Projects