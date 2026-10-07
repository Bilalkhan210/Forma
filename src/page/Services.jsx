import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServiceCards from '../components/ServiceCards';
import ServiceDetailSection from '../components/ServiceDetailSection';
import WhyForma from '../components/WhyForma';
import CtaBanner from '../components/CtaBanner';

const Services = () => {

     const handleCtaClick = () => {
    // Apne hisab se click handler add karein (e.g. scroll to contact section / open modal)
    console.log('CTA Button Clicked!');
  };
  // Dynamic Services Details Data
  const servicesData = [
    {
      categoryNumber: "01",
      categoryName: "STRATEGY & POSITIONING",
      title: "Start with the right questions.",
      description: "Clarity is a competitive advantage. We combine customer insight, market understanding and business ambition to define where you can win — and how to get there.",
      features: [
        "Customer & stakeholder research",
        "Brand positioning & value proposition",
        "Business and digital roadmaps",
        "Experience audits & opportunity mapping"
      ],
      outcome: "A shared direction. A practical plan. A team ready to move.",
      buttonText: "Discuss your project",
      buttonLink: "#",
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Team strategy meeting",
      isReversed: false // Image Right Side
    },
    {
      categoryNumber: "02",
      categoryName: "BRAND & EXPERIENCE",
      title: "Be distinct. Be easy to choose.",
      description: "We shape how your business looks, feels and works. From your identity to your digital touchpoints, every detail tells one clear story and helps people take the next step.",
      features: [
        "Brand identity & verbal expression",
        "User research & experience design",
        "Websites & digital product design",
        "Design systems & brand guidelines"
      ],
      outcome: "A distinctive brand and an experience that feels effortless.",
      buttonText: "Discuss your project",
      buttonLink: "#",
      imageSrc: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Brand cosmetics product design",
      isReversed: true // Image Left Side
    },
    {
      categoryNumber: "03",
      categoryName: "DIGITAL & TECHNOLOGY",
      title: "Build for what comes next.",
      description: "Great ideas need great execution. Our design and development teams work side by side to create fast, accessible and adaptable digital products that are ready to grow.",
      features: [
        "React websites & web applications",
        "Content platforms & integrations",
        "E-commerce & digital services",
        "Performance, accessibility & ongoing support"
      ],
      outcome: "Reliable technology. Confident launches. Room to evolve.",
      buttonText: "Discuss your project",
      buttonLink: "#",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Laptop and mobile displaying financial dashboard",
      isReversed: false // Image Right Side
    }
  ];

  return (
    <>
      <ServicesHero />
      <ServiceCards />
      
      {/* Loop through all detailed services */}
      {servicesData.map((service, index) => (
        <ServiceDetailSection key={index} {...service} />
      ))}

      <WhyForma />
       <CtaBanner 
        subtitle="YOUR NEXT CHAPTER"
        title="Your ambition. our starting point."
        description="Have a big question? We’ll help you find the right next step."
        buttonText="Start a conversation"
        onButtonClick={handleCtaClick}
      />
    </>
  );
};

export default Services;