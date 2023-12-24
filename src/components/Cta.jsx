import LinkButton from "../ui/LinkButton";
import CtaAccordion from "./CtaAccordion";
import ExcludeImg from "../assets/Exclude-150x150.png";

const Cta = () => {
  return (
    <div className="bg-white text-stone-900 py-8">
      <div className="text-center mt-7 mb-12">
        <h1 className="text-3xl font-bold mb-1">
          Non Profit Organizations that need Tride
        </h1>
        <p className="font-normal">
          Tride is a perfect fit for non-profit organizations of every kind
        </p>
      </div>

      <CtaAccordion />

      <div className="bg-veryDark text-white w-[95%] relative customLg:w-[85%] mx-auto my-10 md:p-14 p-5 rounded-2xl">
        <div>
          <h2 className="md:text-2xl text-[1.2rem] customMd:w-[70%] leading-6 font-semibold customMd:mb-10 mb-7">
            Start collecting seeds and donations better, and keep accurate
            record of your organization finances.
          </h2>

          <div className="space-y-3 mb-3 flex flex-col md:flex-row md:space-y-0 md:space-x-3">
            <LinkButton type="primary">Create an account today</LinkButton>
            <LinkButton type="secondary">
              Book a meeting with the team
            </LinkButton>
          </div>
        </div>

        <img
          className="hidden customMd:flex customMd:absolute customMd:bottom-0 customMd:right-0"
          src={ExcludeImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Cta;
