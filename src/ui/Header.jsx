import { NavLink } from "react-router-dom";
import LinkButton from "./LinkButton";
import Logo from "./Logo";

const Header = () => {
  const hoverClass =
    "hover:text-primary hover:scale-[1.2] transition duration-300";

  return (
    <header className="mx-auto flex items-center justify-between h-24 z-50 bg-veryDark px-5 md:px-14 lg:px-28">
      <nav className="hidden lg:inline-block">
        <ul className="flex space-x-12 items-center">
          <li className={hoverClass}>
            <NavLink to="/solutions">Solutions</NavLink>
          </li>
          <li className={hoverClass}>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li className={hoverClass}>
            <NavLink to="/fees">Fees</NavLink>
          </li>
          <li className={hoverClass}>
            <NavLink to="/blogs">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <Logo width="base" />

      <div className="hidden space-x-3 md:block">
        <LinkButton type="login">Login</LinkButton>
        <LinkButton type="primary">Open an Account</LinkButton>
      </div>
    </header>
  );
};

export default Header;
