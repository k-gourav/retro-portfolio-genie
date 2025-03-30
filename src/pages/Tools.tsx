
import React from 'react';
import { Tool, ExternalLink } from 'lucide-react';

interface FreeToolItem {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
}

const Tools: React.FC = () => {
  const tools: FreeToolItem[] = [
    {
      title: "API Response Validator",
      description: "A simple tool to validate API responses against a schema or expected format.",
      link: "#",
      tags: ["API", "JSON", "Validation"],
      image: "https://placehold.co/300x200/teal/white?text=API+Validator"
    },
    {
      title: "Color Palette Generator",
      description: "Generate harmonious color schemes for your web projects based on color theory.",
      link: "#",
      tags: ["Design", "CSS", "Colors"],
      image: "https://placehold.co/300x200/purple/white?text=Color+Tool"
    },
    {
      title: "Regex Tester",
      description: "Test and debug regular expressions with a visual interface and explanation engine.",
      link: "#",
      tags: ["Regex", "JavaScript", "Testing"],
      image: "https://placehold.co/300x200/blue/white?text=Regex+Tester"
    },
    {
      title: "Code Snippet Library",
      description: "A collection of useful code snippets for common programming tasks across languages.",
      link: "#",
      tags: ["Snippets", "Code", "Reference"],
      image: "https://placehold.co/300x200/green/white?text=Code+Snippets"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          Free Developer Tools
        </h1>
      </div>
      
      <div className="mb-8 retro-section">
        <h2 className="text-3xl font-retro text-retro-red mb-4 text-center">Useful Tools For Developers</h2>
        
        <p className="font-mono text-center mb-4">
          I've created these free tools to help other developers with common tasks.
          Feel free to use them in your projects!
        </p>
        
        <div className="border border-dashed border-black p-3 bg-yellow-50 font-mono text-center">
          <Tool className="inline-block mr-2" />
          <span>All tools are open source and free to use</span>
          <Tool className="inline-block ml-2" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {tools.map((tool, index) => (
          <div key={index} className="retro-section hover:border-retro-blue transition-colors">
            <div className="mb-3 border border-black">
              <img 
                src={tool.image} 
                alt={tool.title} 
                className="w-full h-40 object-cover"
              />
            </div>
            
            <h3 className="font-retro text-xl text-retro-blue mb-2">{tool.title}</h3>
            <p className="font-mono mb-3">{tool.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {tool.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs font-mono bg-gray-200 border border-black px-1 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href={tool.link} 
              className="flex items-center justify-center w-full retro-button no-underline text-black font-retro text-sm"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} className="mr-1" />
              Try This Tool
            </a>
          </div>
        ))}
      </div>
      
      <div className="retro-section text-center">
        <h3 className="font-retro text-xl mb-4">Have a tool suggestion?</h3>
        <p className="font-mono mb-4">
          If you have an idea for a useful developer tool that you'd like to see built,
          let me know! I'm always looking for new project ideas.
        </p>
        <a href="/contact" className="retro-button font-retro inline-block">Suggest a Tool</a>
      </div>
    </div>
  );
};

export default Tools;
