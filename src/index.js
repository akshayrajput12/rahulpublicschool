import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoadingProvider } from './context/LoadingContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
