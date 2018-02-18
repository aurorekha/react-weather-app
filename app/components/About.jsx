import React from 'react';

const About =  (props)  => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a Weather app built in react. I have built this app to practice react
      </p>
      <p>
        Here are some of the tools i used.
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> -
            This is the JS framework used
          </li>
          <li>
            <a href="http://openweathermap.org">Open weather Map</a> -
            To search for weather data by city name api from here.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default About;
