import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BurgerMenu from "./BurgerMenu";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <Link to="/home">
        <ArrowLeft size={32} className="mr-4" />
      </Link>
      <div className="flex items-center">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Navigation;
