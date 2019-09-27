import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'

import * as serviceWorker from './serviceWorker';

// el componente app contiene a componente hijo de home
ReactDOM.render(
    <Provider store={createStore(reducers,{},applyMiddleware(reduxThunk))}>
        <Router>
            <App>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
            </App>
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
