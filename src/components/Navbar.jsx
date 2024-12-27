import { useState } from "react";
import Logo from "../assets/Logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offSetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offSetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileNavOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop View */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between items-center gap-7">
            <div>
              <a href="">
                <img
                  src={Logo}
                  alt="logo"
                  width={50}
                  className="rounded-full"
                />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img
                  src={Logo}
                  alt="logo"
                  width={60}
                  className="rounded-full m-2"
                />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={handleToggle}
              >
                {isMobileNavOpen ? (
                  <FaTimes className="h-6 w-5 m-2" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileNavOpen && (
            <ul className="flex  gap-4 backdrop-blur-md flex-col">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index} className="mx-5">
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
