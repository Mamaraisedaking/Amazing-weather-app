import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const { name, main, weather: weatherInfo } = weather;
    const { temp, temp_min, temp_max } = main;
    const [{ description, icon }] = weatherInfo;

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <div className="weather-icon">
                <img
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt={description}
                />
            </div>
            <div className="weather-info">
                <p>{description}</p>
                <p>Temperature: {temp}°C</p>
                <p>Min: {temp_min}°C | Max: {temp_max}°C</p>
            </div>
        </div>
    );
};

export default WeatherCard;
