import React from 'react';

const WeatherMessage = React.createClass({
  render: function() {
    const {temp, location} = this.props;
    return(
      <div>
        <h3>It is {temp} degrees in {location}</h3>
      </div>
    );
  }
});

export default WeatherMessage;
