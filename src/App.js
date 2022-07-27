import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=770eed0e5b6e9d49eff72e6c8fd505e7&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          console.log(response.statusText);

          setData(response.data);
          console.log(response);
          setError("");
        })
        .catch((error) => {
          console.log(error.response);
          setError(error.response.data.message);
          setData("");
        });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location..."
        />
      </div>
      <div className="container">
        {error && <p>{error}</p>}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
