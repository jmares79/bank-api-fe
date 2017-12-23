import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../utils/AuthService';

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
