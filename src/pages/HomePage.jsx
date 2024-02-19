import { Link } from "react-router-dom";
import Activities from "../components/Activities";
import BurgerMenu from "../components/BurgerMenu";

const HomePage = () => {
  return (
    <main className="">
      <BurgerMenu />
      <div className="">
        <h3 className="">Popular classes</h3>
      </div>
      <div className="">
        <Activities />
        <h4 className="">Classes for you</h4>
        <div className="">
          <Activities />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
