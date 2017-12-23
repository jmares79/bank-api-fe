import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'

import logo from './isoftbet-logo-new.png';
import './App.css';
import './index.css';

// import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'

import { isLoggedIn } from './utils/AuthService';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLoggedIn: false,
    //   access_token: null
    // }

    console.log("Logged in? " + isLoggedIn());
  }

  // updateLoginState = (loginState) => {
  //   this.setState({
  //     isLoggedIn: loginState.isLoggedIn,
  //     access_token: loginState.access_token
  //   });
  // }

  render() {
    return (
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} alt="logo" />
              <h1 className="App-title">ISoft Bet API</h1>
            </header>

            <Route path="/" render={() => (
              isLoggedIn() ? <Redirect to="/home" /> : <Redirect to={{pathname: '/login', state: { from: this.props.location }}} />
            )}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/home" component={Home} />

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
