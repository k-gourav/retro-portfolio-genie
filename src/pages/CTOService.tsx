
import React from 'react';
import { Code, Users, BarChart, Database, Globe, Shield } from 'lucide-react';

const CTOService: React.FC = () => {
  const services = [
    {
      title: "Technical Leadership",
      description: "Strategic guidance for your technical teams and product development roadmap.",
      icon: <Users className="text-retro-blue" size={32} />
    },
    {
      title: "Architecture Design",
      description: "Building scalable, secure, and maintainable system architectures for your products.",
      icon: <Code className="text-retro-blue" size={32} />
    },
    {
      title: "Technology Audits",
      description: "Comprehensive review of your tech stack, identifying risks and opportunities.",
      icon: <BarChart className="text-retro-blue" size={32} />
    },
    {
      title: "Legacy Modernization",
      description: "Transforming outdated systems into modern, efficient, and scalable solutions.",
      icon: <Database className="text-retro-blue" size={32} />
    },
    {
      title: "Digital Transformation",
      description: "Guiding your organization through technological change and adoption.",
      icon: <Globe className="text-retro-blue" size={32} />
    },
    {
      title: "Security Compliance",
      description: "Ensuring your systems meet industry standards and best practices for security.",
      icon: <Shield className="text-retro-blue" size={32} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          CTO as a Service
        </h1>
      </div>
      
      <div className="retro-section mb-8">
        <h2 className="text-3xl font-retro text-retro-red mb-4 text-center">Fractional CTO Services</h2>
        
        <p className="font-mono mb-4">
          Not every company needs a full-time CTO, but every company needs technical leadership. I offer flexible, 
          on-demand CTO services tailored to your organization's specific needs and growth stage.
        </p>
        
        <p className="font-mono italic text-center border border-dashed border-black p-3 bg-yellow-50">
          With 25+ years of experience across various industries and technologies, I bring a wealth of expertise 
          to help your company navigate technical challenges and opportunities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {services.map((service, index) => (
          <div key={index} className="retro-section hover:border-retro-blue transition-colors">
            <div className="flex items-start">
              <div className="mr-4">{service.icon}</div>
              <div>
                <h3 className="font-retro text-xl text-retro-blue mb-2">{service.title}</h3>
                <p className="font-mono">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="retro-section mb-8">
        <h2 className="text-2xl font-retro text-retro-blue mb-4">How It Works</h2>
        
        <div className="space-y-4 font-mono">
          <div className="flex">
            <div className="font-retro text-xl bg-retro-blue text-white w-8 h-8 flex items-center justify-center mr-4 border border-black">1</div>
            <div>
              <h3 className="font-retro text-lg">Initial Consultation</h3>
              <p>We'll discuss your current technical challenges, goals, and how I can help.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="font-retro text-xl bg-retro-blue text-white w-8 h-8 flex items-center justify-center mr-4 border border-black">2</div>
            <div>
              <h3 className="font-retro text-lg">Assessment & Planning</h3>
              <p>I'll review your systems, teams, and processes to create a tailored action plan.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="font-retro text-xl bg-retro-blue text-white w-8 h-8 flex items-center justify-center mr-4 border border-black">3</div>
            <div>
              <h3 className="font-retro text-lg">Implementation</h3>
              <p>Working with your team, we'll implement the strategic and tactical changes needed.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="font-retro text-xl bg-retro-blue text-white w-8 h-8 flex items-center justify-center mr-4 border border-black">4</div>
            <div>
              <h3 className="font-retro text-lg">Ongoing Support</h3>
              <p>I'll provide continued guidance based on the engagement model that works for you.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <a href="/contact" className="retro-button font-retro text-xl inline-block">Schedule a Consultation</a>
      </div>
    </div>
  );
};

export default CTOService;
