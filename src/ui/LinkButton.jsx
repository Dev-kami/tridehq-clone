import { Link } from "react-router-dom";
const LinkButton = ({ children, type }) => {
  const base = "py-3.5 px-6 font-semibold text-sm rounded-[5px] text-center";

  const style = {
    login: base + " border border-stone-500",
    primary: base + " bg-white text-black",
    secondary: base + " bg-primary ",
  };
  return (
    <Link to="/" className={style[type]}>
      {children}
    </Link>
  );
};

export default LinkButton;
