import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Clients from './pages/Clients';
import Home from './pages/Home'
import Plans from './pages/Plans';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Settings from './pages/Settings';
import Stores from './pages/Stores';
import ProjectRoutes from './routes';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <ProjectRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

// reportWebVitals();
