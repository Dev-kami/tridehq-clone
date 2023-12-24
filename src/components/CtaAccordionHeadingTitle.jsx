import { useCta } from "../contexts/CtaContext";

const CtaAccordionHeadingTitle = ({ content, index }) => {
  const { isActive, setIsActive } = useCta();
  const currentlySelectedTab = isActive === index && "bg-primary text-white";

  return (
    <>
      <li
        onClick={() => setIsActive(index)}
        className={`${currentlySelectedTab} px-3.5 py-2 rounded-full cursor-pointer text-black hover:bg-primary hover:text-white transition duration-300`}
      >
        {content.title}
      </li>
    </>
  );
};

export default CtaAccordionHeadingTitle;
