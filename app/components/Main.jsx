import React from 'react';
import Nav from 'Nav';
import {NavLink, IndexLink, Link} from 'react-router-dom';


const Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Main;
