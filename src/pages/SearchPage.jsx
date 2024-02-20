import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
import Navigation from "../components/Navigation";

const SearchPage = () => {
  const [activities, setActivities] = useState([]);
  const [popularTrainers, setPopularTrainers] = useState([]);
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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    fetch("http://localhost:4000/api/v1/trainers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch trainers data");
        }
        return response.json();
      })
      .then((data) => setPopularTrainers(data.slice(0, 4)))
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
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
        <h1 className="text-2xl font-semibold">Search</h1>
      </div>
      <h2 className="text-xl font-bold mt-6">Popular Classes</h2>
      <div className="flex overflow-x-auto mt-2 mb-8 no-scrollbar">
        {activities.map((classItem) => (
          <Link
            key={classItem.id}
            to={`/class/${classItem.id}`}
            className="m-2 relative"
          >
            <img
              src={classItem.asset.url}
              alt={classItem.className}
              className=" min-w-32 min-h-36 rounded-xl object-cover"
            />
            <p className="absolute bottom-0 left-0 font-bold text-xs bg-[#F1C40E] w-32 h-12 p-2 rounded-tr-3xl rounded-bl-md">
              {classItem.className}
            </p>
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-bold">Popular Trainers</h2>
      <div className="flex flex-col mt-2">
        {popularTrainers.map((trainer) => (
          <Link
            key={trainer.id}
            to={`/trainer/${trainer.id}`}
            className="m-2 flex items-center"
          >
            <img
              src={trainer.asset.url}
              alt={trainer.trainerName}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <p className="font-semibold ml-2">{trainer.trainerName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
