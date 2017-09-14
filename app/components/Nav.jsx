import React from 'react';
import {NavLink, IndexLink, Link} from 'react-router-dom';
import Links from 'Links';

const Nav = React.createClass({
  render: function() {
    return(
      <div>
        <h2>Nav Component</h2>
        <Links/>
      </div>
    )
  }
});

export default Nav;
