import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './Home';

class EnsureLoggedInContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {dispatch, currentURL, isLoggedIn} = this.props;

    if (!isLoggedIn) {
        this.props.history.replace('/login');
    }
  }

  render() {
    const {isLoggedIn} = this.props;

    return (
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    )
  }
}

export default withRouter(EnsureLoggedInContainer);
