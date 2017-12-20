import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import logo from './isoftbet-logo-new.png';
import './App.css';
import './index.css';

import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'
import Login from './components/Login'

// const API_URL_GET_ALL_TRANSACTIONS = 'http://127.0.0.1:8000/api/transactions/1';
const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <header className="App-header">
              <img src={logo} alt="logo" />
              <h1 className="App-title">ISoft Bet API</h1>
            </header>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/home" component={Home}/>
          </div>
      </Router>
    );
  }
}

export default App;
