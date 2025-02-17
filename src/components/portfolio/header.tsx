import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import { Link } from 'react-router';

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

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-4 shadow-sm transition dark:bg-black">
      <nav className="mx-auto flex max-w-[1000px] items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Your Name
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300">
            Home
          </Link>
          <Link to="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">
            Blog
          </Link>
          <li>
            <a
              href="/about"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </div>
        <div>
          <button
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800"
            onClick={toggleTheme}
          >
            <IoSunny className="block h-5 w-5 dark:hidden" />
            <FaMoon className="hidden h-5 w-5 dark:block" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
