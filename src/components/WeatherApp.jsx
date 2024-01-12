import { useState } from "react";
import { Link } from "react-router-dom";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchData = async () => {
    try {
      const apiKey = "3d0127aae395d29732194b42556cb818";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.error("Errore durante la richiesta API meteo:", error);
    }
  };

  const handleSearch = () => {
    if (city !== "") {
      fetchData();
    }
  };
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`; // ho trovato questa funzione su gitHub
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Benvenuti in AppMeteo</h1>

      <div className="mb-3">
        <label htmlFor="cityInput" className="form-label">
          Cerca la città che preferisci
        </label>
        <input
          type="text"
          className="form-control"
          id="cityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSearch}>
        Scopri le condizioni meteo
      </button>

      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex me-2">
              <h2 className="card-title">{weatherData.name}</h2>
              <img src={getWeatherIconUrl(weatherData.weather[0].icon)} alt="Weather Icon" />
            </div>
            <p className="card-text">Nazione: {weatherData.sys.country}</p>

            <p className="card-text">{weatherData.weather[0].description.toUpperCase()}</p>
            <p className="card-text">Temperatura minima: {weatherData.main.temp_min} K</p>
            <p className="card-text">Temperatura massima: {weatherData.main.temp_max} K</p>
            <Link to={`/CityDetails/${city}`} role="button" className="btn btn-info">
              Cliccami per altre info su questa località
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
