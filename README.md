

# 🌤️ Amazing Weather App 🌍

Welcome to the Amazing Weather App! Instantly access the weather conditions for any location around the world with our easy-to-use interface.

## Features

- **Real-time Weather Data:** Get the most up-to-date weather information.
- **Location Search:** Simply enter any location to retrieve current weather conditions.
- **Dynamic Backgrounds:** Enjoy visually appealing backgrounds that change according to the weather.

## How to Use

1. **Enter Location:** Type the name of the city or location you want to check the weather for in the search bar.
2. **Click Search:** Hit the search button to fetch the latest weather information.
3. **View Results:** See the current weather details displayed beautifully on your screen.

## Live Preview

Here's a quick preview of our app in action!
![Weather App Preview](public/web.gif)



## Live Demo

Check out the live demo of the Amazing Weather App [here](https://deploy-preview-1--amaazing-weather-app.netlify.app).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/amazing-weather-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd amazing-weather-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **OpenWeatherMap API:** A service to get current weather data.

## Code Overview

Here's a brief overview of the main code components:

- **App Component:** Handles the main functionality, including fetching weather data and managing state.
- **WeatherCard Component:** Displays the weather information.
- **App.css:** Contains styling for the app.

```javascript
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
            setWeather(null);
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
```

## Contributing

We welcome contributions to improve this project! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy using the Amazing Weather App! 🌦️

