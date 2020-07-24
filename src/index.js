import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga"

import rootReducer from "./Redux/Reducer/index";
import App from './App';
import "./Style/style.css";
import * as serviceWorker from './serviceWorker';
import rootSaga from "./Saga/index";


const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
  );
  sagaMiddleWare.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,     
  document.getElementById('root')
);
console.log("Store", store.getState())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
