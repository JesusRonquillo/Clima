import React, { useState } from "react";

const WeatherApp = ({ weather }) => {
  const cloudState = weather?.clouds.all;
  const [changeDegres, setchangeDegres] = useState(true);
  const change = () => {
    setchangeDegres(!changeDegres);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card__center">
          <h1>Wheather app</h1>
          {cloudState < 15 ? (
            <img
              src="src/utils/Soleado.webp"
              alt="sol"
              className="state__img"
            />
          ) : (
            <img src="src/utils/Nublado.png" alt="sol" className="state__img" />
          )}
          <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
          <h2>{`Wind speed: ${weather?.wind.speed} m/s`}</h2>
          <h2>{`Clouds: ${weather?.clouds.all} %`}</h2>
          <h2>{`Pressure; ${weather?.main.pressure} mb`}</h2>
          {changeDegres ? (
            <h2>{`Temp: ${Math.floor(weather?.main.temp)} °K`}</h2>
          ) : (
            <h2>{`Temp: ${Math.floor(weather?.main.temp - 273.15)} °C`}</h2>
          )}
          <button className="change_degress" onClick={change}>
            Change Degrees
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
