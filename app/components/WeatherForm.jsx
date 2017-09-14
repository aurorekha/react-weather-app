import React from 'react';

const WeatherForm = React.createClass({
  render: function() {
    return(
      <div>
        <form>
          <input type="text"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

export default WeatherForm;
