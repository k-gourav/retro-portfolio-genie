
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      
      <div 
        className={`flex-1 transition-all duration-300 md:ml-64 bg-repeat min-h-screen`}
        onClick={() => sidebarOpen && window.innerWidth < 768 && setSidebarOpen(false)}
      >
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
