import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import axios from 'axios'
import './styles/App.css'
import './styles/Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    search()
  }

  function handleCityChange(e) {
    setCity(e.target.value)
  }

  function search() {
    const apiKey = '62be57f77de7b70c964aa5e2d8e17000'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(getLocalData)
  }

  function getLocalData(position) {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let apiKey = '3e43755f9b9e49aaa25fe2da226ada2b'
        let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'

        axios
          .get(
            `${apiUrl}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          )
          .then(handleResponse)

        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <form onSubmit={handleSubmit}>
          <input
            type='search'
            placeholder='Enter a city...'
            className='search-city'
            autoFocus='on'
            onChange={handleCityChange}
          />
          <button type='submit' className='btn'>
            <img
              src='https://img.icons8.com/cotton/64/000000/search--v1.png'
              alt='submit button'
              rel='stylesheet'
            />
          </button>
          <button onClick={getLocation} className='btn'>
            <img
              src='https://img.icons8.com/cotton/64/000000/search--v1.png'
              alt='submit button'
              rel='stylesheet'
            />
          </button>
        </form>
        <CurrentWeather data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    )
  } else {
    search()
    return ' Loading'
  }
}
