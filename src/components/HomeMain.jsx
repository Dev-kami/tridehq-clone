import LinkButton from "../ui/LinkButton";
import GtbLogo from "../assets/gtb-1.png";
import NdicLogo from "../assets/ndic-1.png";
import OverviewSkew from "../assets/Overview.png";
import Overview from "../assets/Overview-768x482.png";

const HomeMain = () => {
  return (
    <div className="lg:pl-28 md:pl-14 px-5 md:pt-28 pt-12 flex flex-col overflow-y-hidden">
      <div className="customMd:w-[50%] w-[95%]">
        <h1 className="md:text-[2.5rem] text-3xl font-semibold md:font-bold mb-5 leading-[2.8rem]">
          Banking made easy for churches and ministries.
        </h1>
        <p className="md:mb-16 mb-8 md:text-base text-sm font-normal">
          Tride helps you receive funds faster from your members and donors with
          dedicated bank accounts and online payment options.
        </p>

        <div className="md:space-x-4 mb-14 md:flex-row flex flex-col gap-y-4">
          <LinkButton type="primary">Open an account</LinkButton>
          <LinkButton type="secondary">Book a meeting with the team</LinkButton>
        </div>

        <div className="flex md:items-center md:flex-row flex-col items-start md:gap-x-10 gap-x-5 w-fit md:text-lg mb-14">
          <span className="flex items-center gap-2">
            <h3>Partner Bank:</h3>
            <img src={GtbLogo} alt="Gt bank logo" />
          </span>
          <span className="flex items-center gap-2">
            <h3>All deposits insured by:</h3>
            <img src={NdicLogo} alt="Ndic logo" />
          </span>
        </div>
      </div>

      <div>
        <picture>
          <source srcSet={OverviewSkew} media="(min-width: 1024px)" />
          <img
            className="customMd:absolute w-[95%] customMd:-top-5 customMd:-right-[30rem] customMd:-z-10 customLg:-top-16 customLg:-right-[35rem]"
            src={Overview}
            alt="Overview"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeMain;
