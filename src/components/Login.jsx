import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const API_URL_LOGIN = "http://127.0.0.1:8000/api/login";

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    login = () => {
        var self = this;

        axios.post('http://127.0.0.1:8000/api/login', {
            email: self.state.email,
            password: self.state.password
        }).then(function (response) {
            console.log(response);

            self.setState({
                redirectToReferrer: true,
                access_token: response.data.access_token
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

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
