import Card from "../components/Card";
import Menubar from "./Menubar"
import PizzasList from "./Pizzaslist";
import Banner from "../views/Banner";

const Home = () => {
  return (
    <>
      <Menubar />
      <Banner />
      <PizzasList>
        <Card />
      </PizzasList>
    </>
  );
};

export default Home;
