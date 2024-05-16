import { IoMdDownload } from "react-icons/io";

type HeaderType = {
  headerName: string;
  navLinks?: { name: string; link: string }[];
};

const Header = (props: HeaderType) => {
  const { headerName, navLinks } = props;
  return (
    <>
      <header className="bg-gray-100">
        <div className="px-4 mx-auto">
          <nav className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold py-4">
              {headerName}
            </a>
            <ul className="flex space-x-1">
              {navLinks &&
                navLinks.map((item) => (
                  <li>
                    <a
                      className="py-2 px-4 text-gray-600 flex flex-row items-center rounded-md outline hover:text-gray-900 hover:bg-gray-200 transition duration-100 ease-in-out outline-gray-400 hover:outline-gray-700 "
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
