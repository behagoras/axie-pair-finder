/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import pages from './pages';

function App() {
  return (
    <Router>
      <NavBar />
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
