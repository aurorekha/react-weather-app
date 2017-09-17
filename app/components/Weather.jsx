import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Manchester',
      temp: 11
    }
  },
  handleSearch: function(location) {
    var that = this;
    openWeatherMap.getTemp(location).then(
      function(temp){
        that.setState({
          location: location,
          temp: temp
        });
      }, function (errorMessage) {
        alter(errorMessage);
      }
    )
  },
  render: function() {
    const {temp, location} = this.state;
    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

export default Weather;
