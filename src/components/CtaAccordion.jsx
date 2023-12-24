import CtaAccordionHeadingTitle from "./CtaAccordionHeadingTitle";
import CtaAccordionHeadingContent from "./CtaAccordionHeadingContent";
import CtaAccordionMobile from "./CtaAccordionMobile";
import { accordionData } from "../data/AccordionData";

const CtaAccordion = () => {
  const accordionContent = accordionData;

  return (
    <div className="flex justify-center items-center flex-col p-2">
      {/* MEDIUM SCREEN UPWARD */}
      <div className="md:flex list-none gap-4 hidden bg-lightPurple w-fit py-2 px-3 rounded-full text-sm font-semibold mb-5 ">
        {accordionContent.map((content, i) => (
          <CtaAccordionHeadingTitle key={i} content={content} index={i} />
        ))}
      </div>
      <div className="w-[27.5rem] text-center text-[1rem] hidden md:flex font-normal bg-lightPurple rounded-2xl p-7">
        {accordionContent.map((content, i) => (
          <CtaAccordionHeadingContent key={i} index={i} content={content} />
        ))}
      </div>

      {/* MOBILE SCREEN */}
      <div className="md:hidden w-[95%] mx-auto">
        {accordionContent.map((content, i) => (
          <CtaAccordionMobile key={i} index={i} content={content} />
        ))}
      </div>
    </div>
  );
};

export default CtaAccordion;
