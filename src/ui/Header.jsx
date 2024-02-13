import { useState } from "react";
import { NavLink } from "react-router-dom";

import LinkButton from "./LinkButton";
import Logo from "./Logo";

import { FaBars, FaX } from "react-icons/fa6";
import { links as linksApi } from "../data/NavLinksData";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const hoverClass =
    "hover:text-primary hover:scale-110 transition duration-300";

  const links = linksApi;

  return (
    <header className="mx-auto flex items-center justify-between h-24 z-50 bg-veryDark px-5 md:px-14 lg:px-28 relative">
      <nav className="hidden lg:inline-block">
        <ul className="flex space-x-12 items-center">
          {links.map((link) => (
            <li key={link.label} className={hoverClass}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Logo width="base" />

      {/* Mobile navigation */}
      {showNav && (
        <nav className="md:hidden absolute right-10 top-20 text-black bg-white p-2 rounded-sm w-48">
          <ul className="text-center space-y-2">
            {links.map((link) => (
              <li key={link.label} className={hoverClass}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="hidden space-x-3 md:block">
        <LinkButton type="login">Login</LinkButton>
        <LinkButton type="primary">Open an Account</LinkButton>
      </div>

      <div className="md:hidden">
        {!showNav && (
          <FaBars
            onClick={() => setShowNav((show) => !show)}
            className="cursor-pointer "
            size={24}
          />
        )}
        {showNav && (
          <FaX
            onClick={() => setShowNav((show) => !show)}
            size={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
