import React from 'react';
import {NavLink, IndexLink, Link} from 'react-router-dom';

class Links extends React.Component{
  onSearch(e) {
      e.preventDefault();
      alert('Not wired up!')
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>
                Get Weather
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/examples"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>
                Examples
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather"/>
              </li>
              <li>
                <input type="submit"  className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
};

export default Links;
