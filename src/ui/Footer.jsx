import { Link } from "react-router-dom";
import Logo from "./Logo";
import LaunchingSoonButton from "./LaunchingSoonButton";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="customMd:w-[88%] md:w-[93%]  md:flex-wrap mx-auto py-20 px-5">
      <Logo width="base" />
      <h5 className="mt-3 mb-7 font-normal text-gray-300">
        Banking made easy for churches and ministries
      </h5>

      <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-5 flex-wrap text-sm border-b border-b-stone-700 pb-10">
        <ul className="customMd:flex-[.4] md:w-[20rem] p-2 space-y-4">
          <h5 className="font-bold">Company</h5>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms to use</Link>
          </li>
        </ul>

        <ul className="customMd:flex-[1] md:w-[20rem] p-2 space-y-4">
          <h5 className="font-bold">Solutions</h5>
          <li>
            <Link to="/">Bank Accounts</Link>
          </li>
          <li>
            <Link className="space-x-3" to="/">
              <span>Payment pages</span>
              <LaunchingSoonButton />
            </Link>
          </li>
          <li>
            <Link className="space-x-3" to="/">
              <span>Foreign bank accounts</span>
              <LaunchingSoonButton />
            </Link>
          </li>
        </ul>

        <ul className="customMd:flex-[.7] md:w-full p-2 space-y-4">
          <h5 className="font-bold">Resources</h5>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <ul className="customMd:flex-[.55] md:w-full p-2 space-y-3">
          <h4 className="font-bold text-base">Got Question?</h4>
          <h4 className="font-semibold">Call/WhatsApp</h4>

          <span className="font-normal">+234 81 6432 6733</span>
          <h4 className="font-semibold">Send a mail</h4>
          <span className="font-normal">hello@tridehq.com</span>

          <div className="space-x-4">
            <SocialIcons name="facebook" />
            <SocialIcons name="instagram" />
            <SocialIcons name="linkedin" />
            <SocialIcons name="x" />
          </div>
        </ul>
      </div>

      <div className="tracking-tight">
        <p className="text-stone-400 text-sm my-6">
          &copy;2023 GoTrideTech Limited. All rights reserved.
        </p>

        <h4 className="text-sm mb-2">
          Tride is a not a bank! All our financial and banking services are
          provided by our partner banks who are duly licensed by the CBN
        </h4>
        <h4 className="text-sm">
          Tride is a product of GoTrideTech Nigeria Limited, a company
          registered with the Corporate Affairs Commission with RC Number:
          6948618.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
