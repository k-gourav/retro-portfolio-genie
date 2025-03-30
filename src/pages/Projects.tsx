
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  year: string;
  technologies: string[];
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Created a real-time analytics platform with AI-driven insights for e-commerce businesses.",
      year: "2023",
      technologies: ["React", "Node.js", "TensorFlow.js", "AWS"],
      image: "https://placehold.co/300x200/teal/white?text=AI+Analytics",
      link: "#"
    },
    {
      title: "Blockchain Voting System",
      description: "Developed a secure, transparent voting system using blockchain technology for organizational governance.",
      year: "2022",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
      image: "https://placehold.co/300x200/blue/white?text=Blockchain+Voting",
      link: "#"
    },
    {
      title: "Health & Fitness Mobile App",
      description: "Built a cross-platform mobile application that tracks fitness activities and provides personalized coaching.",
      year: "2021",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      image: "https://placehold.co/300x200/green/white?text=Fitness+App",
      link: "#"
    },
    {
      title: "E-Learning Platform",
      description: "Created an interactive learning management system with video courses, quizzes, and certifications.",
      year: "2020",
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
      image: "https://placehold.co/300x200/purple/white?text=E-Learning",
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          My Projects
        </h1>
      </div>
      
      <div className="mb-6 retro-section">
        <p className="font-mono mb-4 text-center">
          Below are some of the recent projects I've worked on. Each combines cutting-edge technology with practical solutions for real-world problems.
        </p>
        
        <p className="font-mono text-center italic text-sm mb-4">
          <span className="animate-blink inline-block">■</span> Some projects are under NDA and cannot be shared publicly <span className="animate-blink inline-block">■</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="retro-section hover:border-retro-blue transition-colors">
            <div className="mb-3 border border-black">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover"
              />
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-retro text-retro-blue">{project.title}</h3>
              <span className="font-mono text-sm border border-black px-1">{project.year}</span>
            </div>
            
            <p className="font-mono mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs font-mono bg-gray-200 border border-black px-1 py-0.5">
                  {tech}
                </span>
              ))}
            </div>
            
            {project.link && (
              <a 
                href={project.link} 
                className="flex items-center justify-center w-full retro-button no-underline text-black font-retro text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} className="mr-1" />
                Visit Project
              </a>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8 retro-section">
        <h3 className="font-retro text-xl">More Projects Coming Soon!</h3>
        <div className="border-t border-dotted border-black mt-2 pt-2">
          <p className="font-mono text-sm">Under construction... Check back later!</p>
          <div className="flex justify-center mt-2">
            <div className="h-4 w-20 bg-gray-300 border border-black overflow-hidden relative">
              <div className="absolute inset-0 bg-retro-blue w-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
