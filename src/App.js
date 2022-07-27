import axios from "axios";
import { useState } from "react";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=accra&appid=770eed0e5b6e9d49eff72e6c8fd505e7`;
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Accra</p>
          </div>
          <div className="temp">
            <h1>40C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>35C</p>
          </div>
          <div className="humidity">15%</div>
          <div className="wind">9 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
