
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="retro-header">
        <h1 className="text-2xl font-pixel">404 Error</h1>
      </div>
      
      <div className="retro-section">
        <div className="font-mono text-6xl mb-4">404</div>
        <h2 className="font-retro text-2xl text-retro-red mb-4">Page Not Found</h2>
        
        <div className="border-2 border-black p-4 bg-yellow-100 mb-6">
          <p className="font-mono mb-2">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <p className="font-mono">Please check the URL or return to the homepage.</p>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="retro-button font-retro text-xl no-underline text-black flex items-center"
          >
            <Home className="mr-2" size={18} />
            Back to Homepage
          </Link>
        </div>
      </div>
      
      <div className="mt-6 opacity-50">
        <img src="https://i.imgur.com/JnnyJYe.gif" alt="Under Construction" className="h-12 mx-auto" />
      </div>
    </div>
  );
};

export default NotFound;
