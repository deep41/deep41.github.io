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
    <header className="sticky top-0 z-50 bg-stone-100 px-4 py-4 transition dark:bg-stone-900">
      <nav className="mx-auto flex max-w-[1000px] items-center justify-between">
        <div className="flex flex-1 items-center space-x-12 font-['JetBrains_Mono']">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition hover:scale-110 hover:text-emerald-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            /home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 transition hover:scale-110 hover:text-emerald-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            /about
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium text-gray-700 transition hover:scale-110 hover:text-emerald-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            /projects
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 transition hover:scale-110 hover:text-emerald-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            /contact
          </Link>
        </div>
        <button
          className="rounded-md p-2 font-['JetBrains_Mono'] text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800"
          onClick={toggleTheme}
        >
          <IoSunny className="block h-5 w-5 dark:hidden" />
          <FaMoon className="hidden h-5 w-5 dark:block" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
