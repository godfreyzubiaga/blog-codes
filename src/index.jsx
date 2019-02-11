import React from 'react';
import { render } from 'react-dom';
import mountPoint from './utils/mountPoint';
import App from './components/App';
import './assets/App.css';

render(<App />, mountPoint());
