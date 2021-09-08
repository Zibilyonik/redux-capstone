import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router';
import Details from './components/Details';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => (
  <div className="container-style mx-auto">
    <Navbar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/:name" component={Details} />
    </Switch>
  </div>
);

export default App;
