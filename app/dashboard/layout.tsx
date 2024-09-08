'use client';
import SideNav from '../ui/dashboard/sidenav';
import React from 'react';
import { useState, useEffect } from 'react';


export default function Layout({ children }: { children: React.ReactNode }) {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct state based on initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-[#1e1e1e] flex-col md:flex-row md:overflow-hidden">
      <SideNav isOpen={isOpen} toggleSidenav={toggleSidenav} />
      <main className={`flex-grow bg-[#1e1e1e] transition-all duration-300 ${isOpen ? 'ml-[280px]' : 'ml-0'}`}>
        {!isOpen && <div className="m-4">
          <button onClick={toggleSidenav}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z" clipRule="evenodd"></path></svg>
            </div>
          </button>
        </div>}
        {children}
      </main>
    </div>
  );
}