var axios = require('axios');

var baseURL = 'http://api.openweathermap.org/data/2.5/';
var APIKEY = '&APPID=d13c09065dfdeed7cae5f2c41f2e9fa6';

function prepUrl (type, city) {
  return baseURL + type + '?q=' + city + '&type=accurate' + APIKEY;
}

function getCurrentWeather (city) {
  var url = prepUrl('weather', city);
  return axios.get(url)
    .then(function (currentWeatherData) {
      console.log(currentWeatherData.data);
    });
}

function getForcast (city) {
  var url = prepUrl('forecast/daily', city);
  return axios.get(url)
    .then(function (forecastData) {
      console.log(forecastData.data);
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForcast: getForcast
};
