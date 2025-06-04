"use client";

import { useState } from "react";
import BudgetSlider from "./BudgetSlider";

const weatherOptions = [
  { value: "sunny", label: "Sunny" },
  { value: "rainy", label: "Rainy" },
  { value: "cloudy", label: "Cloudy" },
  { value: "snowy", label: "Snowy" },
  { value: "warm", label: "Warm (20°C+)" },
  { value: "cold", label: "Cold (below 10°C)" },
];

export default function FilterPanel({
  onWeatherChange,
  onBudgetChange,
  onInterestChange,
}) {
  const [activeWeather, setActiveWeather] = useState(null);
  const [activeInterest, setActiveInterest] = useState(null);

  const interests = ["beaches", "culture", "adventure", "nature", "shopping"];

  const handleWeatherSelect = (weather) => {
    const newWeather = activeWeather === weather ? null : weather;
    setActiveWeather(newWeather);
    onWeatherChange(newWeather);
  };

  const handleInterestClick = (interest) => {
    const newInterest = activeInterest === interest ? null : interest;
    setActiveInterest(newInterest);
    onInterestChange(newInterest);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Filter Destinations</h2>

      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Weather</h3>
        <div className="grid grid-cols-2 gap-2">
          {weatherOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleWeatherSelect(option.value)}
              className={`p-2 rounded text-sm ${
                activeWeather === option.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <BudgetSlider onChange={onBudgetChange} />
      </div>

      <div>
        <h3 className="text-md font-medium mb-2">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <button
              key={interest}
              onClick={() => handleInterestClick(interest)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeInterest === interest
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {interest.charAt(0).toUpperCase() + interest.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
