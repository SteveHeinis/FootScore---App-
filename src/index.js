import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
