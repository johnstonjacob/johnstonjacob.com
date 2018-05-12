import React from 'react';

const WeatherInfo = props => (
  <div className="button__container">
    <img src={props.details.data.weather[0].icon} />
    <div>Location Name: {props.details.data.name}</div>
    <div>Description: {props.details.data.weather[0].description}</div>
    {props.type && (
      <div>
        Temp: {Math.floor(props.details.data.main.temp * (9 / 5) + 32)}{' '}
        {String.fromCharCode(8457)}
      </div>
    )}
    {!props.type && (
      <div>
        Temp: {Math.floor(props.details.data.main.temp)}{' '}
        {String.fromCharCode(8451)}
      </div>
    )}
    <button onClick={props.click} className="button">
      <span>
        Change to {props.type && 'Celcius'}
        {!props.type && 'Farenheit'}
      </span>
    </button>
  </div>
);

export default WeatherInfo;
