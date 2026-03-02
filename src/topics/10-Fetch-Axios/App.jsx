import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [location, setLocation] = useState({
    lat: 28.6139,
    lon: 77.209,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`,
        );

        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [location, refresh]);

  function handleWeather(e) {
    if (e === 0) return "Clear Sky ☀️";
    else if (e >= 1 && e <= 3) return "Cloudy 🌥️";
    else if (e >= 61 && e <= 65) return "Rainy 🌧️";
    else if (e >= 71 && e <= 75) return "Snowy ❄️";
    else if (e === 95) return "Thunderstorm ⛈️";
    else return "Unknown 🌈";
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <>
      <div>
        <p>Temperature: {data.current_weather.temperature}</p>
        <p>Wind Speed: {data.current_weather.windspeed}</p>
        <p>Weather Code: {handleWeather(data.current_weather.weathercode)}</p>
      </div>
      <div>
        <button onClick={() => setLocation({ lat: 28.6139, lon: 77.209 })}>
          Delhi
        </button>
        <button onClick={() => setLocation({ lat: 51.5074, lon: -0.1278 })}>
          London
        </button>
        <button onClick={() => setLocation({ lat: 35.6762, lon: 139.6503 })}>
          Tokyo
        </button>
        <button onClick={() => setLocation({ lat: 40.7128, lon: -74.006 })}>
          New York
        </button>
      </div>
      <button onClick={() => setRefresh(r => r + 1)}>Refresh</button>
    </>
  );
}
export default App;
