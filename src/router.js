import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {Router, RouterContext, match, createMemoryHistory} from 'react-router'
import Routes from './routes'
import Main from './templates/Main'


module.exports = function(locals, callback){
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);

    return match({
        routes: Routes,
        location: location
    }, function(error, redirectLocation, renderProps) {
        var html = ReactDOMServer.renderToStaticMarkup(
            <RouterContext {...renderProps} />
        );
        return callback(null, html);
    })
}
