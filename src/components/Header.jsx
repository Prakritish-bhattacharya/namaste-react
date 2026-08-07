import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="images-removebg-preview.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10 font-semibold ">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
              { name: "Cart", path: "/cart" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="
                    relative
                    text-gray-800
                    transition-all
                    duration-300
                    hover:text-orange-500

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[3px]
                    after:w-0
                    after:bg-orange-500
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  ">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
