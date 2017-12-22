import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import RootRouteWrapper from './components/RootRouteWrapper';

import logo from './isoftbet-logo-new.png';
import './App.css';
import './index.css';

import Login from './components/Login'


const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class App extends Component {
  render() {
    return (
        <div>
            <header className="App-header">
              <img src={logo} alt="logo" />
              <h1 className="App-title">ISoft Bet API</h1>
            </header>

            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/" component={RootRouteWrapper} />
            </Switch>
        </div>
    );
  }
}

export default App;
