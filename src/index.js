import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import reducers from './ducks';

import './theme/index.less';

import MainPage from './containers/DeciveWatch/MainPage';

let store = createStore(reducers);
window.$getState = store.getState;
window.$dispatch = store.dispatch;
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainPage}>
        <Route path="s1" component={MainPage} />
      </Route>
    </Router>
  </Provider>
  
, document.getElementById('root'));