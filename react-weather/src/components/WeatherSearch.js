import React from 'react';

const WeatherSearch = props => (
  <div className="button__container">
    {props.ready && (
      <button className="button" onClick={props.clickHandler}>
        <span>Get Weather</span>
      </button>
    )}
    {!props.ready && (
      <button className="button notready">
        <span>Loading...</span>
      </button>
    )}
  </div>
);

export default WeatherSearch;
//    <input className='userField' type='text-field'/>
