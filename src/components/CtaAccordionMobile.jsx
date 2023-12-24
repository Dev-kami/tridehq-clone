import { useCta } from "../contexts/CtaContext";

const CtaAccordionMobile = ({ content, index }) => {
  const { isActive, setIsActive } = useCta();

  const curContent = index === isActive && "bg-primary text-white";

  return (
    <ul>
      <button
        onClick={() => setIsActive(index)}
        className={`${curContent} bg-lightPurple p-1.5 text-center text-sm rounded-full font-semibold mb-2 w-full transition duration-300`}
      >
        {content.title}
      </button>

      {curContent && (
        <ul className="flex items-center justify-center py-3 mt-5 text-center text-[.9rem] font-normal">
          <li className="bg-lightPurple p-5 rounded-xl w-[27rem]">
            {content.text}
          </li>
        </ul>
      )}
    </ul>
  );
};

export default CtaAccordionMobile;
