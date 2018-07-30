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
import Navbar from './components/Navbar'

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
    <App>
        <Navbar/>
            <Switch>
                <Route exact path= '/' component={App} />
            </Switch>
        </App>
    
    , document.getElementById('root'));
registerServiceWorker();
