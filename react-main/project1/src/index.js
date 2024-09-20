import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nom="Fatma" age="22" />
    <App nom="Mouna" age="23" />
    <App2 />
  </React.StrictMode>
);
