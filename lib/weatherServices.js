export async function fetchWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    return {
      temperature: data.main.temp,
      condition: data.weather[0].main,
    };
  } catch (error) {
    console.error("Weather API Error:", error);
    return { temperature: null, condition: "Unknown" };
  }
}