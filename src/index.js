import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PackingListProvider } from './context/packingListContext';

ReactDOM.render(
  <React.StrictMode>
    <PackingListProvider>
      <App />
    </PackingListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
