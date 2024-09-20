import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA2 = [
  { id: "filter-0", name: "Toutes" },
  { id: "filter-1", name: "Actives" },
  { id: "filter-2", name: "Terminées" },
];

const DATA = [
  { id: "todo-0", name: "Manger", completed: true },
  { id: "todo-1", name: "Dormir", completed: false },
  { id: "todo-2", name: "Recommencer", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} tasks2={DATA2} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
