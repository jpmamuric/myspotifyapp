import React    from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router,browserHistory }        from 'react-router';
import { syncHistoryWithStore }         from 'react-router-redux';
import Thunk                            from 'redux-thunk';

import routes   from './routes/routes';
import reducers from './reducers/index';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f
const history = syncHistoryWithStore(browserHistory, createStoreWithMiddleware(reducers, devTools));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devTools)}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('root')
);
