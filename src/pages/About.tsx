
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          About Me
        </h1>
      </div>
      
      <div className="retro-section">
        <h2 className="text-3xl font-retro text-retro-red mb-4">Who is Devin Smith?</h2>
        
        <div className="mb-6">
          <img 
            src="/public/lovable-uploads/d53ac306-3a13-4573-b3c7-f9ba9f727980.png" 
            alt="Devin Smith" 
            className="w-32 h-32 float-left mr-4 border-2 border-black"
          />
          
          <p className="font-mono mb-4">
            I've been coding since the early days of the internet. My journey started with basic HTML pages in Notepad, 
            and over the years I've evolved with the web, mastering everything from PHP to the latest JavaScript frameworks.
          </p>
          
          <p className="font-mono mb-4">
            With over 25 years of experience in technology, I've built systems that scale to millions of users and mentored 
            dozens of developers who have gone on to lead their own teams.
          </p>
        </div>
        
        <div className="clear-both">
          <h3 className="text-xl font-retro text-retro-blue border-b-2 border-retro-blue mb-2">My Philosophy</h3>
          <p className="font-mono mb-4">
            I believe technology should solve real problems for real people. Every line of code I write is aimed at making someone's life better or easier.
          </p>
          
          <h3 className="text-xl font-retro text-retro-blue border-b-2 border-retro-blue mb-2">Technical Skills</h3>
          <ul className="list-disc pl-5 font-mono mb-4">
            <li>Full-stack JavaScript (React, Node.js, Express)</li>
            <li>Mobile Development (iOS, Android, React Native)</li>
            <li>Database Design (SQL, NoSQL)</li>
            <li>Web3 & Blockchain Technologies</li>
            <li>AI & Machine Learning Integration</li>
            <li>System Architecture</li>
            <li>DevOps & Cloud Infrastructure</li>
            <li>UI/UX Design</li>
          </ul>
          
          <h3 className="text-xl font-retro text-retro-blue border-b-2 border-retro-blue mb-2">Career Highlights</h3>
          <ul className="list-disc pl-5 font-mono mb-4">
            <li>Co-founded ae.studio, a product development company</li>
            <li>Scaled systems to handle millions of users</li>
            <li>Mentored over 50 developers throughout my career</li>
            <li>Launched 20+ successful products from concept to market</li>
            <li>Presented at international technology conferences</li>
          </ul>
        </div>
      </div>
      
      <div className="font-mono text-center mt-6">
        <div className="inline-block border border-black px-2 py-1 bg-gray-200">
          <span className="text-sm">Last Updated: 06/15/2023</span>
        </div>
      </div>
    </div>
  );
};

export default About;
