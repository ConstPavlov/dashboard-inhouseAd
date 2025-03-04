import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Dashboard from '../../pages/dashboard/Dashboard';
import Finalize from '../../pages/finalize/Finalize';
import NotFound from '../../pages/notfound/NotFound';
import Results from '../../pages/results/Results';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'results/:id',
        element: <Results />,
      },
      {
        path: 'finalize/:id',
        element: <Finalize />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
