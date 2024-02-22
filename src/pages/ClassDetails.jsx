import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Navigation from "../components/Navigation";

const ClassDetails = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <>
      <Navigation />

      <div className="class-details-container p-4">
        <h1 className="text-3xl px-10 font-bold mb-4 text-[#F1C40E]">
          Flow Yoga Workout
        </h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`w-4 h-4 mr-1 cursor-pointer ${
                  star <= rating ? "text-[#F1C40E]" : "text-gray-300"
                }`}
                onClick={() => handleRating(star)}
              />
            ))}
          </div>

          <button
            onClick={() => handleRating(5)}
            className="bg-transparent text-[#F1C40E] border-2 border-[#F1C40E] py-2 px-6 rounded-full"
          >
            RATE
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-2">Monday - 19.30</h2>

        <p className="text-sm mb-4">
          We learn a few easy yoga positions for a better posture and
          well-being.
        </p>

        <h3 className="font-bold text-lg">Trainer</h3>
        <div className="flex items-center mb-4">
          <img
            src="instructor-image-url"
            alt="Instructor"
            className="min-w-36 min-h-40 rounded-xl object-cover rounded-br-none"
          />

          <p className="text-lg font-semibold">Davina Jones</p>
        </div>

        <button className="block w-full px-4 py-4 font-semibold text-black bg-[#F1C40E] rounded-3xl">
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default ClassDetails;
