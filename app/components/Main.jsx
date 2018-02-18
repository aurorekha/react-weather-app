import React from 'react';
import Nav from 'Nav';
import {NavLink, IndexLink, Link} from 'react-router-dom';

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default Main;
