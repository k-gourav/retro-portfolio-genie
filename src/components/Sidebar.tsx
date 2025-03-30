
import React, { useState } from 'react';
import { Menu, Mail, Linkedin, Twitter, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work Experiences', path: '/experiences' },
    { name: 'CTO as a Service', path: '/cto-service' },
    { name: 'Free Tools', path: '/tools' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Articles', path: '/articles' },
  ];

  return (
    <>
      <button 
        onClick={toggle}
        className="fixed z-50 top-4 left-4 md:hidden bg-white p-2 border border-black"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64 h-full bg-white border-r-2 border-black bg-opacity-90 overflow-y-auto`}>
        <div className="p-4">
          <div className="mb-6 text-center">
            <img 
              src="/public/lovable-uploads/d53ac306-3a13-4573-b3c7-f9ba9f727980.png" 
              alt="Profile"
              className="w-16 h-16 mx-auto border border-black"
            />
            <h2 className="mt-2 font-retro text-2xl">Devin Smith</h2>
          </div>
          
          <nav className="mb-8">
            <h3 className="font-pixel text-sm mb-2 bg-retro-blue text-white p-1">MENU</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="block font-retro text-lg py-1 px-2 hover:bg-gray-200 border border-transparent hover:border-black"
                    onClick={() => window.innerWidth < 768 && toggle()}
                  >
                    › {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="border-t-2 border-black pt-4">
            <h3 className="font-pixel text-sm mb-2 bg-retro-blue text-white p-1">CONTACT</h3>
            <div className="space-y-2">
              <a href="mailto:contact@devinsmith.com" className="flex items-center font-retro text-lg gap-2 hover:bg-gray-200 p-1">
                <Mail size={16} />
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center font-retro text-lg gap-2 hover:bg-gray-200 p-1">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center font-retro text-lg gap-2 hover:bg-gray-200 p-1">
                <Twitter size={16} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center border-t-2 border-black pt-4">
            <div className="flex justify-center space-x-2">
              <img src="https://i.imgur.com/5YtR3mm.png" alt="Netscape Now" className="h-10 border border-black" />
              <img src="https://i.imgur.com/W2OPjdt.png" alt="IE Compatible" className="h-10 border border-black" />
            </div>
            <div className="mt-2">
              <img src="https://i.imgur.com/rVHwxol.png" alt="Made with Notepad" className="h-8 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
