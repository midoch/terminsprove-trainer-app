import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";

const SchedulePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userClasses, setUserClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating fetching data
        const userData = {
          classes: [
            {
              id: 1,
              className: "Yoga Flow Workout",
              classDay: "Monday",
              classTime: "10:00 AM",
            },
            {
              id: 2,
              className: "Lower Abs Workout",
              classDay: "Wednesday",
              classTime: "2:00 PM",
            },
            {
              id: 3,
              className: "Hip Workout",
              classDay: "Friday",
              classTime: "4:00 PM",
            },
            {
              id: 4,
              className: "Full Body Workout",
              classDay: "Saturday",
              classTime: "9:00 AM",
            },
            {
              id: 5,
              className: "Body Workout",
              classDay: "Sunday",
              classTime: "14:00 AM",
            },
          ],
        };

        setUserClasses(userData.classes || []);
        setIsLoggedIn(true);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <Navigation />
      </div>
      <h1 className="text-2xl">My Schedule</h1>

      {loading ? (
        <Loading />
      ) : isLoggedIn ? (
        userClasses.length > 0 ? (
          userClasses.map((classItem) => (
            <Link
              key={classItem.id}
              to={`/class/${classItem.id}`}
              className="block"
            >
              <div className="bg-white min-w-full h-20 p-4 mt-4 rounded border border-white flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{classItem.className}</h3>
                <p>
                  {classItem.classDay} - {classItem.classTime}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center mt-4">
            You are not enrolled in any classes.
          </p>
        )
      ) : (
        <div className="text-center mt-12">
          <p>You need to log in to see your schedule.</p>
          <Link to="/login">
            <button className="bg-[#F1C40E] p-4 rounded-full mt-4 w-full font-bold">
              LOG IN
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
