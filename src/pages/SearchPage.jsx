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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Function to fetch activities and trainers data
    const fetchData = async () => {
      try {
        // Fetch activities data
        const activitiesResponse = await fetch(
          "http://localhost:4000/api/v1/classes"
        );
        if (!activitiesResponse.ok) {
          throw new Error("Failed to fetch activities data");
        }
        const activitiesData = await activitiesResponse.json();
        setActivities(activitiesData);

        // Fetch popular trainers data
        const trainersResponse = await fetch(
          "http://localhost:4000/api/v1/trainers"
        );
        if (!trainersResponse.ok) {
          throw new Error("Failed to fetch trainers data");
        }
        const trainersData = await trainersResponse.json();
        setPopularTrainers(trainersData.slice(0, 4));

        // Set loading to false after fetching data successfully
        setLoading(false);
      } catch (error) {
        // Set error message if data fetching fails
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(); // Call fetchData function when component mounts
  }, []);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value); // Update searchQuery state with the entered value
  };

  // Filter activities based on search query
  const filteredActivities = searchQuery
    ? activities.filter((activity) =>
        activity.className.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activities;

  // Filter trainers based on search query
  const filteredTrainers = searchQuery
    ? popularTrainers.filter((trainer) =>
        trainer.trainerName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularTrainers;

  // Display loading spinner while data is being fetched
  if (loading) {
    return <Loading />;
  }

  // Display error message if data fetching fails
  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col p-4">
      <Navigation />
      <div className="p-2 my-2">
        <h1 className="text-2xl font-semibold mb-4">Search</h1>
        {/* Input field for search */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search classes"
          className="block w-full px-4 py-2 border rounded-3xl focus:outline-none focus:border-black"
        />
      </div>
      <h2 className="text-xl font-bold mt-6">Popular Classes</h2>
      {/* Display filtered activities */}
      <div className="flex overflow-x-auto mt-2 mb-8 no-scrollbar">
        {filteredActivities.map((classItem) => (
          <Link
            key={classItem.id}
            to={`/classdetails`}
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
      {/* Display filtered trainers */}
      <div className="flex flex-col mt-2">
        {filteredTrainers.map((trainer) => (
          <Link
            key={trainer.id}
            to={`/search`}
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
