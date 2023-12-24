import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const LinkToGetStarted = () => {
  return (
    <Link
      className="text-primary w-fit mb-3 flex items-center gap-2 text-sm font-semibold hover:text-white transition duration-300"
      to="/"
    >
      Get Started
      <FaArrowRight fontSize="1rem" />
    </Link>
  );
};

export default LinkToGetStarted;
