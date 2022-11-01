import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import history from './history';
import NetcarsProvider from './context/netcarsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter history={ history }>
      <NetcarsProvider>
        <App />
      </NetcarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

