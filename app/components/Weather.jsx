import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(
      function(temp){
        that.setState({
          isLoading: false,
          location: location,
          temp: temp
        });
      }, function (errorMessage) {
        that.setState({
          isLoading: false
        });
        alert(errorMessage);
      }
    )
  },
  render: function() {
    const {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather... </h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

export default Weather;
