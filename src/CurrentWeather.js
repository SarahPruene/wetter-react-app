import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherTemp from './WeatherTemp'
import FormatedDate from './FormatedDate'
import axios from 'axios'

import './styles/style.css'
import './styles/CurrentWeather.css'

export default function CurrentWeather(props) {
  function getLocation() {
    navigator.geolocation.getCurrentPosition(getLocalData)
  }

  function getLocalData(position) {
    let latitude = `lat=${position.coords.latitude}`;
    let longitude = `lon=${position.coords.longitude}`;
    let apiKey = '62be57f77de7b70c964aa5e2d8e17000';
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`
    axios
      .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
      .then(this.handleCityChange)

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`
    axios
      .get(`${apiUrl}${latitude}&${longitude}&appid=${apiKey}&units=${units}`)
      .then(this.handleForecastResponse)
  }
  return (
    <div className='CurrentWeather'>
      <div className='current-loti'>
        <h1 className='location'>{props.data.city}</h1>
        <FormatedDate date={props.data.date} />
        <p className='description'>{props.data.description}</p>
      </div>
      <div className='current-weather'>
        <WeatherIcon code={props.data.icon} />
        <WeatherTemp celsius={props.data.temperature} />
      </div>
      <div className='current-details'>
        <div className='cont'>
          <div className='det-inf'>Humidity:</div>
          <div className='det-info'>
            <span class='humidity'>{props.data.humidity}</span>%
          </div>
        </div>
        <div className='cont'>
          <div className='det-inf'>Wind:</div>
          <div className='det-info'>
            <span class='wind'>{props.data.wind}</span>km/h
          </div>
        </div>
        <div className='cont'>
          <button className='btn-current-location' onClick={getLocation}> Current Location</button>
        </div>
      </div>
    </div>
  )
}
