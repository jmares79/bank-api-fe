import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
          this.setState({ redirectToReferrer: true })
        })
    }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div className="container">
        <form className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <p>You must log in to view the page at {from.pathname}</p>
      </div>
    )
  }
}

export default Login;
