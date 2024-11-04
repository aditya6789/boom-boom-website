import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// import ContainerWrapper from "@/utils/container_wrapper";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container border-gray-300">
      {/* <ContainerWrapper> */}
        <div className="container flex justify-between items-center py-4 px-5">
          <Link to="/">
            {/* <img src={Logo} alt="Logo" className="h-[5rem] w-[5rem]" /> */}
            <h2 className="container text-2xl font-serif md:pl-10 text-black">Boom Boom</h2>

          </Link>

          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="h-8 w-8 text-gray-800" /> : <FaBars className="h-8 w-8 text-gray-800" />}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`text-lg font-medium hover:text-pink-500 p-2 ${
                  pathname === link.href ? "text-black" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center gap-5 mt-5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`${
                  pathname === link.href ? "text-black" : "text-gray-400"
                } text-lg hover:bg-gray-100 p-3 hover:text-pink-500
                 rounded-lg`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        )}
      {/* </ContainerWrapper> */}
    </nav>
  );
}
