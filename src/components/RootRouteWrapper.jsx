import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from './Login';
import EnsureLoggedInContainer from './EnsureLoggedInContainer';

class RootRouteWrapper extends Component {
    render() {
        return (
            <div id="RootRouteWrapper">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path = "/home" component={EnsureLoggedInContainer} />
                </Switch>
            </div>
        )
    }
}

export default RootRouteWrapper;
