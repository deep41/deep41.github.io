import { useEffect } from "react";
import { IoMdDownload } from "react-icons/io";

type HeaderType = {
  headerName: string;
  navLinks?: { name: string; link: string }[];
};

const Header = (props: HeaderType) => {
  const { headerName, navLinks } = props;

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    }
  }, []);



  return (
    <>
      <header className="bg-gray-100 dark:bg-zinc-900">
        <div className="mx-auto px-4">
          <nav className="flex items-center justify-between">
            <a href="#" className="py-4 text-lg font-bold dark:text-white">
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
