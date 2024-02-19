import { Link } from "react-router-dom";
import WelcomeBackground from "../assets/welcome-background.jpg";
import WelcomeCenter from "../assets/welcome-center.jpg";

const Home = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <div className="flex-1">
        <img
          className="object-cover h-full w-full"
          src={WelcomeBackground}
          alt="Welcome Background"
        />

        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 mr-4 text-left">
          <h1 className="text-6xl font-bold text-[#F1C40E]">
            Believe Yourself
          </h1>
          <p className="text-lg mt-4 font-bold text-white">Train like a pro</p>
        </div>
      </div>

      <div className="flex-1">
        <img
          className="object-cover h-full w-full"
          src={WelcomeCenter}
          alt="Welcome Center"
        />
        <Link
          to="/"
          className="absolute bottom-12 left-24 bg-[#F1C40E] text-black font-semibold py-4 px-8 rounded-3xl"
        >
          START TRAINING
        </Link>
      </div>
    </div>
  );
};

export default Home;
