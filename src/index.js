import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {CookiesProvider} from "react-cookie";


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<span/>}>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
