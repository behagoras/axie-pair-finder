/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import pages from './pages';

function App() {
  return (
    <Router>
      <ul>
        {pages.map(({ path }) => (<li><Link to={path}>{path}</Link></li>))}
      </ul>
      <Switch>
        {pages.map(({ component, exact, path }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
          >
            {component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
