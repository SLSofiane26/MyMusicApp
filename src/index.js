import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../src/LoginReducer';
import { BrowserRouter } from 'react-router-dom';
import MusicReducer from '../src/MusicReducer';
import App from '../src/App';

let stateStore = combineReducers({
  login: LoginReducer,
  music: MusicReducer,
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(stateStore, composeEnhancers(applyMiddleware(thunk)));

let app = (
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
