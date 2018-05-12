import axios from 'axios';

const getWeather = function(lat, lon, cb) {
  console.log(lat, lon);
  axios
    .get('https://fcc-weather-api.glitch.me/api/current', {
      params: {
        // id: "524901",
        // APPID: "2f31fa65ea85b36a705719f0a716ae1f",
        lat: lat,
        lon: lon
        // units: 'imperial'
      }
    })
    .then(response => {
      console.log(response);
      cb({ weatherDetails: response });
    });
};

export default getWeather;
