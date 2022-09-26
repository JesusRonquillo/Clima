import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import WeatherApp from "./components/WeatherApp";
import Loading from "./components/Loading";
function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useState(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(obj);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  useEffect(() => {
    if (coords) {
      const APIKEY = "5b4fbe265ce9d72c0ccf2c341dc823f6";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          setIsLoading(!isLoading);
        })
        .catch((err) => console.error(err));
    }
  }, [coords]);
  console.log(weather);
  return (
    <div className="App">
      {isLoading ? <Loading /> : <WeatherApp weather={weather} />}
    </div>
  );
}

export default App;
