import axios from 'axios';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&APPID=6a01625213d51a5254a061d8879d0ae5&units=metric`;

// 6a01625213d51a5254a061d8879d0ae5

module.exports = {
  getTemp: function (location) {
    const encodeLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else  {
        return res.data.main.temp;
      }
     }, function(res) {
       throw new Error(res.data.message);
    });
  }
}
