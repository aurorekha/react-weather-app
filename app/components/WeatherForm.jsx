import React from 'react';

const WeatherForm = React.createClass({
  onFormSubmit: function () {

  }
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

export default WeatherForm;
