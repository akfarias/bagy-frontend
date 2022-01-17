import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectRoutes from './routes';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <ProjectRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

// reportWebVitals();
