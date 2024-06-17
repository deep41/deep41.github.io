import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';

type HeaderType = {
  headerName: string;
  navLinks?: { name: string; link: string }[];
};

const Header = (props: HeaderType) => {
  const { headerName, navLinks } = props;

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
    <>
      <header className="bg-gray-100 transition dark:bg-zinc-900">
        <div className="mx-auto px-4">
          <nav className="flex items-center justify-between">
            <a
              href="#"
              className="py-4 text-lg font-bold transition dark:text-white"
            >
              {headerName}
            </a>
            <ul className="flex space-x-1">
              {navLinks &&
                navLinks.map((item) => (
                  <li>
                    <a
                      className="flex flex-row items-center rounded-md px-4 py-2 text-gray-600 outline outline-gray-400 transition duration-100 ease-in-out hover:bg-gray-200 hover:text-gray-900 hover:outline-gray-700 focus:bg-gray-200 focus:text-gray-900 focus:outline-gray-700"
                      href={item.link}
                      target="_blank"
                    >
                      <span className="pr-2">
                        <IoMdDownload className="h-4 w-4" />
                      </span>
                      {item.name}
                    </a>
                  </li>
                ))}
              <button className="dark:text-white" onClick={toggleTheme}>
                <IoSunny className="block h-4 w-4 dark:hidden" />
                <FaMoon className="hidden h-4 w-4 dark:block" />
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
