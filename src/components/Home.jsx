import React, { Component } from 'react';

import axios from 'axios';
import { getAccessToken } from '../utils/AuthService';

import logo from '../isoftbet-logo-new.png';
import '../App.css';
import '../index.css';

import TransactionList from './TransactionList'

const API_URL_GET_ALL_TRANSACTIONS = 'http://127.0.0.1:8000/api/transactions/1';

class Home extends Component {
  constructor(props) {
    super(props);

    var self = this;

    this.state = {
      transactions: [],
    };

    console.log("Home constructor");

    let token = getAccessToken();

    axios.get(
      API_URL_GET_ALL_TRANSACTIONS,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(function (response) {
      self.setState({ transactions: response.data.transactions });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" />
            <h1 className="App-title">ISoft Bet API</h1>
          </header>
          <div className="container">
            <div className="row transactions-container">
              <div className="col-12 col-md-9 pull-md-3 bd-content">
                <TransactionList transactions={this.state.transactions}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
