
import React from 'react';
import { Wrench, Joystick, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
      image: "https://placehold.co/300x200/222222/00FFFF?text=API+Validator"
    },
    {
      title: "Color Palette Generator",
      description: "Generate harmonious color schemes for your web projects based on color theory.",
      link: "#",
      tags: ["Design", "CSS", "Colors"],
      image: "https://placehold.co/300x200/222222/FF00FF?text=Color+Tool"
    },
    {
      title: "Regex Tester",
      description: "Test and debug regular expressions with a visual interface and explanation engine.",
      link: "#",
      tags: ["Regex", "JavaScript", "Testing"],
      image: "https://placehold.co/300x200/222222/FFFF00?text=Regex+Tester"
    },
    {
      title: "Code Snippet Library",
      description: "A collection of useful code snippets for common programming tasks across languages.",
      link: "#",
      tags: ["Snippets", "Code", "Reference"],
      image: "https://placehold.co/300x200/222222/00FF00?text=Code+Snippets"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-retro text-retro-blue mb-4 border-b-4 border-retro-blue pb-2 inline-block">
          <Joystick className="inline-block mr-2" />
          DEVELOPER TOOLS
          <Joystick className="inline-block ml-2" />
        </h1>
        
        <p className="text-gray-700 max-w-xl mx-auto font-mono">
          Carefully crafted tools to streamline your development workflow and enhance productivity.
        </p>
      </div>
      
      <div className="mb-8 bg-retro-cream border-2 border-black rounded-none p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Wrench className="inline-block mr-2 text-retro-blue" />
        <span className="text-gray-800 font-pixel text-sm">OPEN SOURCE AND FREE TO USE</span>
        <Wrench className="inline-block ml-2 text-retro-blue" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <Card 
            key={index} 
            className="border-2 border-black rounded-none bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <div className="overflow-hidden border-b-2 border-black">
              <img 
                src={tool.image} 
                alt={tool.title} 
                className="w-full h-40 object-cover"
              />
            </div>
            
            <CardContent className="p-4">
              <h3 className="text-xl font-retro text-retro-blue mb-2">{tool.title}</h3>
              <p className="text-gray-700 mb-4 font-mono text-sm">{tool.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-black text-xs text-white font-mono rounded-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={tool.link} 
                className="block w-full text-center px-4 py-2 bg-retro-blue text-white rounded-none border-2 border-black font-retro hover:bg-blue-700 transition-colors retro-button"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} className="inline-block mr-2" />
                EXPLORE TOOL
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center bg-retro-cream border-2 border-black rounded-none p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-retro text-retro-blue mb-4">HAVE A TOOL SUGGESTION?</h3>
        <p className="text-gray-700 mb-6 font-mono">
          If you have an idea for a developer tool that could help the community, 
          I'm always open to hearing new suggestions.
        </p>
        <a 
          href="/contact" 
          className="px-6 py-2 bg-retro-blue text-white rounded-none border-2 border-black font-retro hover:bg-blue-700 transition-colors retro-button"
        >
          SHARE YOUR IDEA
        </a>
      </div>
    </div>
  );
};

export default Tools;
