import React, { Component } from 'react';
import './style/App.css';
import WeatherSearch from './components/WeatherSearch';
import WeatherInfo from './components/WeatherInfo';
import getWeather from './api/getWeather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDetails: '',
      lat: 0,
      lon: 0,
      ready: false,
      farenheit: true
    };

    navigator.geolocation.getCurrentPosition(
      this.geoSuccess.bind(this),
      this.geoError.bind(this)
    );

    this.handleCall = this.handleCall.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  geoSuccess(pos) {
    this.setState({
      lat: Math.floor(pos.coords.latitude),
      lon: Math.floor(pos.coords.longitude),
      ready: true
    });
  }

  geoError(err) {
    console.log(err);
  }

  changeType() {
    this.setState({ farenheit: !this.state.farenheit });
  }

  handleCall() {
    getWeather(this.state.lat, this.state.lon, this.setState.bind(this));
  }

  render() {
    return (
      <div>
        <WeatherSearch
          clickHandler={this.handleCall}
          ready={this.state.ready}
        />

        {this.state.weatherDetails && (
          <WeatherInfo
            click={this.changeType}
            details={this.state.weatherDetails}
            type={this.state.farenheit}
          />
        )}
      </div>
    );
  }
}

export default App;
