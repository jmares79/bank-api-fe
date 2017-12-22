import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import './index.css';
import './css/main.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
