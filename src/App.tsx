/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import pages from './pages';
import store from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
