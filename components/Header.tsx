
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, QUID_PLATFORM_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = "text-cyan-400";
  const inactiveLinkClass = "text-white hover:text-cyan-300 transition-colors";

  return (
    <header className="bg-[#0A2A5B] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl font-bold">
              {/* Using text logo, can be replaced with an <img> tag */}
              CAE
            </NavLink>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {link.name}
                </NavLink>
              ))}
               <a
                href={QUID_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white hover:bg-cyan-600 transition-colors px-4 py-2 rounded-md text-sm font-semibold ml-4"
              >
                Plataforma QUID
              </a>
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href={QUID_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white block hover:bg-cyan-600 transition-colors px-3 py-2 rounded-md text-base font-semibold mt-2"
              >
                Plataforma QUID
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
