import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Genes from './pages/Genes';
import GeneSearch from './pages/GeneSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/genes" component={Genes} />
        <Route exact path="/gene-search" component={GeneSearch} />
        <Route path="/" component={() => <>Hello</>} />
      </Switch>
    </Router>
  );
}

export default App;
