import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Login from './Login'

import { logout } from '../utils/AuthService';

class Logout extends Component {
    constructor(props) {
        super(props)

        logout();
    }

    render() {
       return (
            <Redirect to="/dashboard" />
        )
    }
}

export default Logout;
