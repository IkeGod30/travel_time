import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';
import axios from 'axios';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

// axios.defaults.baseURL = process.env.REACT_APP_API_URL

// axios.defaults.baseURL = process.env.REACT_APP_API_URL

// Review below


// ReactDOM.render(
//     <Provider
//         store={createStoreWithMiddleware(
//             Reducer,
//             window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//         )}
//     >
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>
//     , document.getElementById('root'));


// The below is prefered and newer method of ReactDOM 

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
             <Provider
        store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

        </React.StrictMode>
    );


    // For React and react-dom 17.0.2
    // Removed <React.SrictMode> as advised, but no harm in putting it back afterwards
    // ReactDOM.render(
    //     <React.StrictMode>
    //      <Provider
    //     store={createStoreWithMiddleware(
    //         Reducer,
    //         window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //         window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )}
    // >
    //     <BrowserRouter>
    //         <App />
    //     </BrowserRouter>
    // </Provider>
    //     </React.StrictMode>
    //     ,
    //     document.getElementById('root')
    //   );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
