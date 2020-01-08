import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/app';

import './index.scss';

const wrapper = document.getElementById('root');

if (wrapper) {
    ReactDOM.render(<App />, wrapper);
}
