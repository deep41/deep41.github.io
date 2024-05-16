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
                      className="py-4 px-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition duration-100 ease-in-out rounded-md "
                      // onClick={(e) => {
                      //   e.preventDefault();
                      // }}
                      href={item.link}
                      target="_blank"
                    >
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
