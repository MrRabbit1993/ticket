import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from './../redux/store';
const routersContext = require.context('@/pages', true, /router\.js$/);
const routersArray = routersContext
    .keys()
    .map(key => routersContext(key).default);
function RenderRoute(props) {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>{renderRoutes(routersArray)}</Fragment>
            </Router>
        </Provider>
    );
}
export default RenderRoute;
