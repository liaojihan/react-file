import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter as Router } from "react-router-dom"
import { LocaleProvider } from 'antd'
import zh_CN  from 'antd/lib/locale-provider/zh_CN'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <LocaleProvider locale={zh_CN}>
                <App />
            </LocaleProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
