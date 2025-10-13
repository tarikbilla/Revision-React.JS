import { Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

export default function WeatherApp() {
  const [searchLocation, setSearchLocation] = useState("");
  const [suggestlocation, setSuggestLocation] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // Function to get location details based on city name
  function getLocation(cityName) {
    setSearchLocation(cityName);
    const locationAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&language=en&count=5&format=json`;
    fetch(locationAPI)
      .then(response => response.json())
      .then(data => {
        setSuggestLocation(data.results || []);
        const latitude = data?.results[0]?.latitude || null;
        const longitude = data?.results[0]?.longitude || null;
        setLatitude(latitude);
        setLongitude(longitude);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  }

  // Function to get weather data based on latitude and longitude
  useEffect(() => {
    if (latitude && longitude) {
      const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`;
      fetch(weatherAPI)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [latitude, longitude]);

  // Get current location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          getWeather(latitude, longitude); // Fetch weather based on the current location
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  console.log({ latitude, longitude, weatherData });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Weather is already fetched using useEffect once latitude and longitude are set.
  };

  // Function to format the time to a more readable 12-hour format
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">My Weather Application</h1>
        <p className="mt-4 text-lg text-gray-600">
          This page helps you find your location for weather updates.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">Find Your Location</h2>
        <p className="mt-4 text-lg text-gray-600">
          Enter your city or allow location access to get weather updates.
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            type="search"
            value={searchLocation}
            onChange={(e) => getLocation(e.target.value)}
            placeholder="Enter your city"
            className="border border-gray-300 p-2 rounded w-2/3"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Get Weather
          </button>
        </form>

        <div className="mt-4 text-sm m-auto text-gray-500 max-w-3xl">
          {/* Suggestions List */}
          {suggestlocation.length > 0 && (
            <ul className="mt-4 text-left text-sm text-gray-600 max-w-5xl">
              {suggestlocation.map((suggestion, index) => (
                <li key={index} className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                  onClick={() => {
                    setSearchLocation(`${suggestion.name}, ${suggestion.admin3}, ${suggestion.country}`);
                    getLocation(`${suggestion.name}, ${suggestion.country}`);
                    setLatitude(suggestion.latitude);
                    setLongitude(suggestion.longitude);
                  }}
                >
                  <p>{suggestion.name}, {suggestion.admin3}, {suggestion.country}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Card className="max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl font-bold mb-4">Weather Now</h3>
        {latitude ? (
          <div>
            <div className='grid grid-cols-2 gap-4'>
              <div className="mb-4 p-4 rounded">
                <p className="text-3xl font-semibold">
                  {searchLocation}
                  {suggestlocation[0]?.country && !searchLocation.toLowerCase().includes(suggestlocation[0]?.country.toLowerCase()) ? `, ${suggestlocation[0]?.country}` : ''}
                </p>

                <p className="text-lg">Latitude: {latitude}</p>
                <p className="text-lg">Longitude: {longitude}</p>
              </div>
              <div className="mb-4 p-4 rounded">
                <p className='text-right'>Time: {formatTime(weatherData?.current_weather?.time)}</p>
                <p className='text-8xl text-right font-semibold'>{weatherData?.current_weather?.temperature}°C</p>

                <p className='text-right'>Wind Speed: {weatherData?.current_weather?.windspeed} km/h</p>
                <p className='text-right'>Wind Direction: {weatherData?.current_weather?.winddirection}°</p>
              </div>
            </div>

            {weatherData && (
              <>
                <div className="mt-4 text-left">
                  <p className="mt-4 text-sm text-gray-500 my-3">Today Temperature ( 24 hours):</p>
                  <ul className="list-disc list-inside grid grid-cols-12 gap-1 list-none text-center">
                    {weatherData?.hourly?.time.slice(0, 24).map((time, index) => (
                      <li key={index} className='border p-1 rounded col-span-1 hover:bg-yellow-200'>
                        <p className='text-sm'>{formatTime(time)}</p>
                        <p className=''>{weatherData.hourly.temperature_2m[index]}°C</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 text-left">
                  <p className="mt-4 text-sm text-gray-500 my-3">Tomorrow Temperature (next 24 hours):</p>
                  <ul className="list-disc list-inside grid grid-cols-12 gap-1 list-none text-center">
                    {weatherData?.hourly?.time.slice(24, 48).map((time, index) => (
                      <li key={index} className='border p-1 rounded col-span-1 hover:bg-yellow-200'>
                        <p className='text-sm'>{formatTime(time)}</p>
                        <p className=''>{weatherData.hourly.temperature_2m[index + 24]}°C</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ) : (
          <p className="text-gray-600">No location selected.</p>
        )}
      </Card>
    </>
  );
}
