import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { setAccessToken } from '../../utils/AuthService';
import axios from 'axios';

const API_URL_LOGIN = "http://127.0.0.1:8000/api/login";

class Login extends Component {
    state = { redirectToReferrer: false }

    handleEmailChange = (e) => { this.setState({ email: e.target.value }); }
    handlePasswordChange = (e) => {this.setState({ password: e.target.value }); }

    login = () => {
        var self = this;

        axios.post(API_URL_LOGIN, {
            email: self.state.email,
            password: self.state.password
        }).then(function (response) {
            self.setState(() => ({ redirectToReferrer: true }))

            setAccessToken(response.data.access_token);
            window.location.href = "/home";
        }).catch(function (error) {
        });
    }

    render() {
        const from = this.props.location.state || { from: { pathname: '/' } }
        const redirectToReferrer = this.state

        if (redirectToReferrer === true) {
            return (
                <Redirect to={from} />
            )
        }

        return (
          <div className="container">
            <form className="form-signin" onSubmit={this.login}>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleEmailChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.handlePasswordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.login}>Sign in</button>
            </form>
          </div>
        )
    }
}

export default Login;
