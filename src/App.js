import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';

const App = () => (
  <div className="container-style mx-auto">
    <Switch>
      <Route exact path="/">
        <div />
      </Route>
    </Switch>
  </div>
);

export default App;
