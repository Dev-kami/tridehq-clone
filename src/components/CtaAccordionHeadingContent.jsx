import { useCta } from "../contexts/CtaContext";

const CtaAccordionHeadingContent = ({ content, index }) => {
  const { isActive } = useCta();
  const curContent = index === isActive;

  return <div>{curContent && content.text}</div>;
};

export default CtaAccordionHeadingContent;
