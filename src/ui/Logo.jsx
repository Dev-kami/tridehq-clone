import { Link } from "react-router-dom";
import TrideLogo from "../assets/logo.png";

const Logo = ({ width }) => {
  const style = {
    base: "w-[7rem]",
  };

  if (width === "base")
    return (
      <Link to="/" className="w-fit">
        <img className={style[width]} src={TrideLogo} alt="Tride logo" />
      </Link>
    );

  return (
    <Link to="/">
      <img src={TrideLogo} alt="Tride logo" />
    </Link>
  );
};

export default Logo;
