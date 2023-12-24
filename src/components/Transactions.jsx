import Transaction from "./Transaction";
import dedicatedAccountImg from "../assets/dedicated-account.png";
import spendOnlyImg from "../assets/spend-only.png";
import assignSignatoriesImg from "../assets/assign-signatories.png";
import LinkToGetStarted from "../ui/LinkToGetStarted";

const Transactions = () => {
  return (
    <div className="customMd:grid customMd:grid-cols-2 flex flex-col mx-auto my-14 gap-y-5 p-5 customLg:w-[90%]">
      <div className="customMd:mr-5">
        <Transaction imgName={dedicatedAccountImg}>
          <h2 className="font-bold text-lg md:text-[1.4rem] leading-7 mb-2 mt-5 customMd:mt-0">
            Get separate account numbers for <br /> offerings, donations, and
            projects.
          </h2>
          <p
            className="mb-6 leading-5 font-normal text-gray-300
          "
          >
            Avoid the hassle of visiting the bank solely for setting up a single
            program or project account. Our platform allows you to efficiently
            create multiple bank accounts with just one click, providing you
            with the flexibility you need.
          </p>
          <LinkToGetStarted />
        </Transaction>
      </div>
      <div>
        <Transaction imgName={spendOnlyImg}>
          <h2 className="font-bold text-lg md:text-[1.4rem] leading-7 mb-2 mt-5 customMd:mt-0">
            Keep accurate record of money spent
          </h2>
          <p
            className="mb-6 leading-5 font-normal text-gray-300
          "
          >
            Transparency and accountability are vital for non-profits. With
            Tride, you can effortlessly maintain precise financial records,
            ensuring complete transparency in your operations. Elevate your
            non-profit&apos;s financial integrity with our record-keeping
            feature.
          </p>
          <LinkToGetStarted />
        </Transaction>
      </div>
      <div className="col-span-3">
        <Transaction imgName={assignSignatoriesImg} flex="flex">
          <h2 className="font-bold text-lg md:text-[1.4rem] leading-7 mb-2 mt-5 customMd:mt-0">
            Get funds for your projects approved faster with digital signatures
            on your accounts.
          </h2>
          <p
            className="mb-6 leading-5 font-normal text-gray-300
          "
          >
            With our digital signatory feature, you can add authorized users to
            your accounts via email, and watch as approvals go from days to mere
            minutes. No more paperwork, no more delays.
          </p>
          <LinkToGetStarted />
        </Transaction>
      </div>
    </div>
  );
};

export default Transactions;
