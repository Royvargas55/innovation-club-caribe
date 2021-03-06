import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
