import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, IndexRoute, hashHistory, Switch } from 'react-router-dom';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require ('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

ReactDOM.render(
  <HashRouter history={hashHistory}>
    <Main>
      <Switch>
        <Route path="/" exact component={Weather} />
        <Route path="/about" component={About} />
        <Route path="/examples" component={Examples} />
      </Switch>
    </Main>
  </HashRouter>,
  document.getElementById('app'));
