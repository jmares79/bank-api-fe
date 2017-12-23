import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import logo from './isoftbet-logo-new.png';
import './App.css';
import './index.css';

import Home from './components/Home'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import NotFoundRoute from './components/Auth/NotFoundRoute'

import { isLoggedIn } from './utils/AuthService';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} alt="logo" />
              <h1 className="App-title">ISoft Bet API</h1>
            </header>
            <Switch>
              <Route exact path="/" render={() => (
                isLoggedIn() ? <Redirect to="/home" /> : <Redirect to={{pathname: '/login', state: { from: this.props.location }}} />
              )}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/home" component={Home} />
              <Route component={NotFoundRoute}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
