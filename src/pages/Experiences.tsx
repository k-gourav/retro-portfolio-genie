
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experiences: React.FC = () => {
  const experiences = [
    {
      position: "Director of Technology Innovation",
      company: "ae.studio",
      period: "2015 - Present",
      description: "Leading technology innovation, managing development teams, and providing strategic direction for client projects.",
      technologies: ["React", "Node.js", "AWS", "GraphQL", "Web3"]
    },
    {
      position: "Lead Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2012 - 2015",
      description: "Led development of enterprise-scale applications and mentored junior developers.",
      technologies: ["PHP", "MySQL", "JavaScript", "Angular"]
    },
    {
      position: "Senior Developer",
      company: "Digital Solutions Group",
      period: "2008 - 2012",
      description: "Developed and maintained web applications for clients in finance, healthcare, and retail sectors.",
      technologies: ["Java", "Spring", "JavaScript", "SQL"]
    },
    {
      position: "Web Developer",
      company: "CreativeTech",
      period: "2005 - 2008",
      description: "Created responsive websites and implemented content management systems for clients.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          Work Experience
        </h1>
      </div>
      
      <div className="mb-6 retro-section">
        <h2 className="text-3xl font-retro text-retro-red mb-4 text-center">My Professional Journey</h2>
        <p className="font-mono text-center mb-6">
          Over 25+ years of experience building software and leading teams
        </p>
        
        <div className="relative border-l-2 border-black ml-4 pl-8 py-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-11 top-0 w-6 h-6 bg-retro-blue border-2 border-black flex items-center justify-center">
                <Briefcase size={12} className="text-white" />
              </div>
              
              <div className="border-2 border-black bg-white p-4 hover:border-retro-blue transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-retro text-xl text-retro-blue">{exp.position}</h3>
                  <div className="flex items-center text-sm font-mono border border-black px-1 bg-gray-100">
                    <Calendar size={12} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="font-retro text-lg mb-2">{exp.company}</div>
                <p className="font-mono mb-3">{exp.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-mono bg-gray-200 border border-black px-1 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8 font-mono">
        <p>For more details, please download my full resume</p>
        <button className="retro-button mt-2 font-retro">Download CV</button>
      </div>
    </div>
  );
};

export default Experiences;
