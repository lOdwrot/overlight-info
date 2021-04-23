import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Documentation from './Components/Documentation/Documentation';
import QuickStart from './Components/QuickStart/QuickStart';
import Headless from './Components/Headless/Headless';
import Exercise from './Components/Excercise/Excercise';

function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/documentation' component={Documentation} />
        <Route path='/quickStart' component={QuickStart} />
        <Route path='/headless' component={Headless} />
        <Route path='/exercise' component={Exercise} />
        <Redirect from="/" to="home" />
      </Switch>
    </div>
  );
}

export default withRouter(App)
