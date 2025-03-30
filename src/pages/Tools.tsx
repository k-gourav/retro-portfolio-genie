
import React from 'react';
import { Wrench, ExternalLink } from 'lucide-react';

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
      image: "https://placehold.co/300x200/f5f5f5/333333?text=API+Validator"
    },
    {
      title: "Color Palette Generator",
      description: "Generate harmonious color schemes for your web projects based on color theory.",
      link: "#",
      tags: ["Design", "CSS", "Colors"],
      image: "https://placehold.co/300x200/f0f0f0/444444?text=Color+Tool"
    },
    {
      title: "Regex Tester",
      description: "Test and debug regular expressions with a visual interface and explanation engine.",
      link: "#",
      tags: ["Regex", "JavaScript", "Testing"],
      image: "https://placehold.co/300x200/f8f8f8/222222?text=Regex+Tester"
    },
    {
      title: "Code Snippet Library",
      description: "A collection of useful code snippets for common programming tasks across languages.",
      link: "#",
      tags: ["Snippets", "Code", "Reference"],
      image: "https://placehold.co/300x200/fafafa/111111?text=Code+Snippets"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-retro text-gray-800 mb-4">
          Developer Tools
        </h1>
        
        <p className="text-gray-600 max-w-xl mx-auto">
          Carefully crafted tools to streamline your development workflow and enhance productivity.
        </p>
      </div>
      
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
        <Wrench className="inline-block mr-2 text-gray-600" />
        <span className="text-gray-700">Open source and free to use</span>
        <Wrench className="inline-block ml-2 text-gray-600" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4 overflow-hidden rounded-t-lg">
              <img 
                src={tool.image} 
                alt={tool.title} 
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={tool.link} 
                className="block w-full text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} className="inline-block mr-2" />
                Explore Tool
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl text-gray-800 mb-4">Have a Tool Suggestion?</h3>
        <p className="text-gray-600 mb-6">
          If you have an idea for a developer tool that could help the community, 
          I'm always open to hearing new suggestions.
        </p>
        <a 
          href="/contact" 
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Share Your Idea
        </a>
      </div>
    </div>
  );
};

export default Tools;
