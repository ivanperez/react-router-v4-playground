
import { Route, Switch } from 'react-router'; // react-router v4
import React from 'react';
import { Link } from 'react-router-dom'



import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const reducer = (state) => state;




const store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
        ),
    ),
);


const ConnectedExample = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <div>
                    <div><Link to="/">Home</Link> <Link to="/hello">Hello</Link></div>
                </div>
                <Switch>
                    <Route exact path="/" render={() => (<div>Match</div>)} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider >
);

export default ConnectedExample;