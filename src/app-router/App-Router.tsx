import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from '../pages/Main';
const createBrowserHistory = require('history').createBrowserHistory;



const history = createBrowserHistory()

export const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Main} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};