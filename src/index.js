import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './store/reducer'
import WebFont from 'webfontloader';

/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(
    console.log("root-reducer?")
  )

const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
  ))
*/

ReactDOM.render(   
    <BrowserRouter>
    <App>
     <Switch>
          <Route exact path= '/' component={App} />
     </Switch>
    </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
