
import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          Welcome to the official<br />website of
        </h1>
      </div>
      
      <h1 className="text-5xl sm:text-6xl font-retro text-retro-red mb-6">
        Devin Smith
      </h1>
      
      <div className="mb-8">
        <img 
          src="/public/lovable-uploads/d53ac306-3a13-4573-b3c7-f9ba9f727980.png" 
          alt="Devin Smith" 
          className="w-40 h-40 md:w-60 md:h-60 mx-auto border-2 border-black"
        />
      </div>
      
      <div className="mb-6 font-mono">
        <p className="mb-2 text-lg">
          Director of Technology Innovation & co-founder{' '}
          <a href="https://ae.studio" className="retro-link font-bold">@ae.studio</a>{' '}
          with over 25 years of experience in tech.
        </p>
        
        <p className="text-lg">
          Expert full stack Javascript, PHP, NoSQL,<br />
          React, Next.js, iOS, Android, Web3, AI<br />
          developer, mentor & leader. Passionate<br />
          product manager, UI/UX designer and<br />
          creative lead.
        </p>
      </div>
      
      <div className="mb-10">
        <button className="retro-button font-retro text-xl uppercase">
          <a href="#" className="flex items-center no-underline text-black">
            <Download className="mr-2" />
            Download My Resume
          </a>
        </button>
      </div>
      
      <div className="retro-section mb-8">
        <p className="font-mono italic">
          This website is UNDER CONSTRUCTION.<br />
          Please come back soon.
        </p>
      </div>
      
      <div className="mb-10">
        <Link to="/contact" className="flex items-center justify-center retro-button font-retro text-xl no-underline text-black mx-auto w-fit">
          <Mail className="mr-2" />
          SEND ME AN EMAIL
        </Link>
      </div>
      
      <div className="flex justify-center space-x-4 mb-4">
        <img src="https://i.imgur.com/5YtR3mm.png" alt="Netscape Now" className="h-10" />
        <img src="https://i.imgur.com/W2OPjdt.png" alt="IE Compatible" className="h-10" />
      </div>
      
      <div className="mb-4">
        <img src="https://i.imgur.com/rVHwxol.png" alt="Made with Notepad" className="h-8 mx-auto" />
      </div>
      
      <div className="font-mono text-center">
        <div className="inline-block border border-black px-2 py-1 bg-gray-200">
          <span className="text-lg">Visitors: 0000481</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
