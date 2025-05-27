import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import { Link, useLocation } from 'react-router';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      return userPrefersDark ? 'dark' : 'light';
    }
  });

  const location = useLocation();

  useEffect(() => {
    console.log('darkMode', darkMode);
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  // toggle dark mode
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode('light');
    } else {
      setDarkMode('dark');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 px-4 py-4 transition-all duration-300">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex flex-1 items-center space-x-8 font-medium text-base">
          <Link
            to="/"
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Home
            {isActive('/') && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            )}
          </Link>
          <Link
            to="/about"
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive('/about') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            About
            {isActive('/about') && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            )}
          </Link>
          <Link
            to="/projects"
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive('/projects') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Projects
            {isActive('/projects') && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            )}
          </Link>
          <Link
            to="/contact"
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive('/contact') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Contact
            {isActive('/contact') && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            )}
          </Link>
        </div>
        <button
          className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
          onClick={toggleTheme}
        >
          <IoSunny className="block h-5 w-5 dark:hidden transition-transform group-hover:rotate-12" />
          <FaMoon className="hidden h-5 w-5 dark:block transition-transform group-hover:-rotate-12" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
