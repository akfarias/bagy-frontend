import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clients from './pages/Clients';
import Home from './pages/Home'
import Plans from './pages/Plans';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Settings from './pages/Settings';
import Stores from './pages/Stores';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home name={''} />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
