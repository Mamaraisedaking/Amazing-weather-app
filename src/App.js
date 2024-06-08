import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');

    const fetchWeather = async (location) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d9e742065dc29485f648336dcfb321d7&units=metric`);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeather(null);  // Clear weather data on error
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (location.trim() !== '') {
            fetchWeather(location);
        }
    };

    const getBackgroundImage = () => {
        if (!weather) return 'default.jpg';
        const main = weather.weather[0].main.toLowerCase();
        switch (main) {
            case 'clear':
                return 'sunny.jpg';

             case 'clear sky':
                  return 'sunny.jpg';    

            case 'mist':
                    return 'mist.jpg';          
            case 'clouds':
                return 'cloudy.jpg';
            case 'rain':
                return 'rainy.jpg'; 
            default:
                return 'default.jpg';
        }
    };

    const backgroundImage = getBackgroundImage();

    return (
        <div className="app" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})` }}>
            <div className="content">
                <div className="search-container">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    weather && <WeatherCard weather={weather} />
                )}
            </div>
        </div>
    );
};

export default App;
