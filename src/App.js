import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Documentation from './Components/Documentation/Documentation';
import NotReady from './Components/NotReady/NotReady';

function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/documentation' component={Documentation} />
        <Route path='/quickStart' component={NotReady} />
        <Redirect from="/" to="home" />
      </Switch>
    </div>
  );
}

export default withRouter(App)
