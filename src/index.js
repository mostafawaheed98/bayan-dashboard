import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import {AuthPovider} from './hooks/useAuth';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthPovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthPovider>
  </React.StrictMode>,
  document.getElementById('root')
);

