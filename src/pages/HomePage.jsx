import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
import Navigation from "../components/Navigation";

const HomePage = () => {
  const [activities, setActivities] = useState([]);
  const [randomActivity, setRandomActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/classes");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setActivities(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomActivity(data[randomIndex]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col p-4">
      <Navigation />
      <div className="flex justify-between p-2 my-6">
        <h1 className="text-2xl font-semibold">Popular Classes</h1>
      </div>

      <div className="relative mb-16 flex justify-center">
        {randomActivity && (
          <Link to={`/home`}>
            <img
              className="w-82 h-96 object-cover rounded-2xl"
              src={randomActivity.asset.url}
              alt="Large"
            />
            <h2 className="absolute bg-[#F1C40E] bottom-0 left-1 right-0 text-base font-bold p-3 w-52 h-16 rounded-tr-lg rounded-bl-2xl flex-wrap text-start">
              {randomActivity.className}
            </h2>
          </Link>
        )}
      </div>

      <h2 className="text-xl font-bold">Classes for you</h2>
      <div className="flex no-scrollbar overflow-x-auto">
        {activities.map((activity) => (
          <Link key={activity.id} to={`/home`} className="m-2 relative">
            <img
              src={activity.asset.url}
              alt={activity.className}
              className="min-w-36 min-h-40 rounded-xl object-cover rounded-br-none"
            />
            <p className="absolute bg-[#F1C40E] bottom-0 left-0 font-bold text-xs w-36 h-12 p-2 rounded-tr-lg rounded-bl-xl">
              {activity.className}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
