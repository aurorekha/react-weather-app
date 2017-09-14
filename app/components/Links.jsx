import React from 'react';
import {NavLink, IndexLink, Link} from 'react-router-dom';

const Links = React.createClass({
  render: function () {
    return (
        <div>
        <NavLink
          exact
          to="/"
          activeClassName="active"
          activeStyle={{fontWeight: 'bold', color: 'red'}}>
          Get Weather
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="active"
          activeStyle={{fontWeight: 'bold', color: 'red'}}>
          About
        </NavLink>
        <NavLink
          to="/examples"
          activeClassName="active"
          activeStyle={{fontWeight: 'bold', color: 'red'}}>
          Examples
        </NavLink>
      </div>
    )
  }
});

export default Links;
