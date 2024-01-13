import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CityDetails = () => {
  const { city } = useParams();
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "3d0127aae395d29732194b42556cb818";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setCityWeather(data);
      } catch (error) {
        console.error("Errore durante la richiesta API meteo:", error);
      }
    };

    fetchData();
  }, [city]);

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-warning">Dettagli della città</h1>
      <Link to="/" role="button" className="btn btn-info">
        Torna su Home
      </Link>
      {cityWeather && cityWeather.weather && cityWeather.weather.length > 0 && (
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex me-2">
              <h2 className="card-title">{cityWeather.name}</h2>
              <img src={getWeatherIconUrl(cityWeather.weather[0].icon)} alt="Weather Icon" />
            </div>
            <p className="align-item-center">
              Longitudine: {cityWeather.coord.lon} & Latitudine: {cityWeather.coord.lat}
            </p>
            <p className="card-text">Nazione: {cityWeather.sys.country}</p>
            <p className="card-text">{cityWeather.weather[0].description.toUpperCase()}</p>
            <p className="card-text">Temperatura minima: {cityWeather.main.temp_min} K</p>
            <p className="card-text">Temperatura massima: {cityWeather.main.temp_max} K</p>
            <p className="card-text">Umidità: {cityWeather.main.humidity}%</p>
            <p className="card-text">Vento soffia a: {cityWeather.wind.speed}mph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDetails;
