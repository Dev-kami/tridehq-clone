import Cta from "../components/Cta";
import HomeMain from "../components/HomeMain";
import Transactions from "../components/Transactions";

const HomePage = () => {
  return (
    <section>
      <HomeMain />
      <Transactions />
      <Cta />
    </section>
  );
};

export default HomePage;
